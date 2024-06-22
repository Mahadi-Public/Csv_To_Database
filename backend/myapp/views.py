from rest_framework import generics, status
from rest_framework.response import Response
from myapp.serializers import FileUploadSerializer, SaveFileSerializer
from myapp.models import CsvFile
from rest_framework import viewsets,pagination
from datetime import datetime
from decimal import Decimal
import pandas as pd


class FileCreateListAPi(generics.CreateAPIView):
    serializer_class = FileUploadSerializer
    
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        file = serializer.validated_data['file']

        try:
            # Process the CSV file
            csv_objects = []
            total_rows = 0

            # Read the entire CSV file into a single chunk
            chunk = pd.read_csv(file)

            for index, row in chunk.iterrows():
                try:
                    date_object = datetime.strptime(row['date'], '%Y-%m-%d').date()
                    volume = int(row['volume'].replace(',', ''))
                    high = Decimal(row['high'].replace(',', ''))
                    low = Decimal(row['low'].replace(',', ''))
                    open_value = Decimal(row['open'].replace(',', ''))
                    close = Decimal(row['close'].replace(',', ''))

                    new_csv = CsvFile(
                        trade_code=row['trade_code'],
                        date=date_object,
                        volume=volume,
                        high=high,
                        low=low,
                        open=open_value,
                        close=close
                    )
                    csv_objects.append(new_csv)
                    total_rows += 1
                except Exception as e:
                    print(f"Error processing row: {str(e)}")
                    pass

            # Bulk create all objects at once
            CsvFile.objects.bulk_create(csv_objects)

            return Response({"status": "success", "total_rows_processed": total_rows}, status=status.HTTP_201_CREATED)

        except Exception as e:
            print(f"Error processing CSV file: {str(e)}")
            return Response({"status": "error", "message": "Failed to process CSV file."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



class CsvDataTablePaginator(pagination.PageNumberPagination):
    page_size = 33
    page_size_query_param = 'page_size'
    max_page_size = 100


class CsvDataTableQuery(viewsets.ModelViewSet):
    queryset = CsvFile.objects.all()
    serializer_class = SaveFileSerializer
    pagination_class = CsvDataTablePaginator