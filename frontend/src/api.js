import useInterceptor from "./interceptors";

const useApiHelper = () => {
  const axios = useInterceptor();

  const api = {
    // Function to upload a file
    fileUploads: (data, params = {}) => axios.post(`api/file-uploads/`, data, { params }),

    // Function to retrieve all CSV file data
    getFileData: (params = {}) => axios.get(`api/csv-files/`, { params }),

    // Function to retrieve a specific CSV file by ID
    getFileById: (id, params = {}) => axios.get(`api/csv-files/${id}/`, { params }),

    // Function to update a specific CSV file by ID
    updateFileById: (id, data, params = {}) => axios.put(`api/csv-files/${id}/`, data, { params }),

    // Function to delete a specific CSV file by ID
    deleteFileById: (id, params = {}) => axios.delete(`api/csv-files/${id}/`, { params }),

  };

  return api;
};

export default useApiHelper;
