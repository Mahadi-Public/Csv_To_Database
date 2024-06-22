import 'bootstrap/dist/css/bootstrap.min.css';
import ImageUploads from "./Components/ImageUploads";
import TablesDataList from './Components/TablesDataList';
import Chart from './Components/Chart';
import RootLayout from './RootLayout';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout/>}>
        <Route index element={<ImageUploads/>}/>
        <Route path='/csv-table-list/' element={<TablesDataList/>}/>
        <Route path='/csv-chart' element={<Chart/>}/>
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;