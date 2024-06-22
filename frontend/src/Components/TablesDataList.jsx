import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Container, Button } from 'react-bootstrap';
import useApiHelper from '../api';
import TablesDataUpdate from './TablesDataUpdate';
import Paginator from './Paginator';
import TablesDataDelete from './TablesDataDelete';


const TablesDataList = () => {

    const [fileData, setFileData] = useState([]);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [editData, setEditData] = useState(null); 
    const [deleteData, setDeleteData] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    const api = useApiHelper();

    useEffect(() => {
        handleDataList();
    }, [currentPage]);
    
    const handleDataList = () => {
        api.getFileData({ page: currentPage }).then(response => {
            setFileData(response.data.results);
            setNextPage(response.data.next);
            setPrevPage(response.data.previous);
            setTotalPage(Math.ceil(response.data.count / 33));
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    };

    const handlePaginator = (page) => {
        setCurrentPage(page);
        handleDataList();
    };
    

    const handleEditModal = (id) => {
        api.getFileById(id).then(response => {
            setEditData(response.data); 
            setShowEditModal(!showEditModal);
        })
        .catch(error => {
            console.error('Error fetching data for edit:', error);
        });
    };


    const handleCloseEditModal = () => {
        setShowEditModal(!showEditModal);
    };


    const handleUpdateDataList = (id, updatedData) => {
        api.updateFileById(id, updatedData).then(response => {
            handleCloseEditModal(); 
            handleDataList(); 
        }).catch(error => {
            console.log('Error updating data:', error);
        });
    };


    const handleDeleteModal = (id, trade_code) => {
        setDeleteData({id, trade_code});
        setShowDeleteModal(true);
    };

    const handleConfirmDelete = () => {
        api.deleteFileById(deleteData.id).then(response => {
            console.log('Delete successful:', response.data);
            setShowDeleteModal(false);
            handleDataList(); 
        }).catch(error => {
            console.log('Error delete data:', error);
        })
    };

    return (
        <Container className='mt-4 pt-4'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Trade_Code</th>
                        <th>High</th>
                        <th>Low</th>
                        <th>Open</th>
                        <th>Close</th>
                        <th>Volume</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {fileData.map((data, index) => (
                        <tr key={index}>
                            <td>{(currentPage - 1) * 33 + index + 1}</td>
                            <td>{data.trade_code}</td>
                            <td>{data.high}</td>
                            <td>{data.low}</td>
                            <td>{data.open}</td>
                            <td>{data.close}</td>
                            <td>{data.volume}</td>
                            <td>{data.date}</td>
                            <td className='d-flex gap-3'>
                                <Button variant="success" size="sm" onClick={() => handleEditModal(data.id)}>Edit</Button>
                                <Button variant="danger" size="sm" onClick={()=>handleDeleteModal(data.id, data.trade_code)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {showEditModal && 
                <TablesDataUpdate
                showEditModal={showEditModal}
                handleCloseEditModal={handleCloseEditModal}
                editData={editData} 
                handleUpdateDataList={handleUpdateDataList}
            />
            }

            <TablesDataDelete
                showDeleteModal={showDeleteModal}
                handleCloseDeleteModal={()=>setShowDeleteModal(!showDeleteModal)}
                handleConfirmDelete={handleConfirmDelete}
                tradeCodeToDelete={deleteData && deleteData.trade_code}
            />

            <Paginator
                handlePaginator={handlePaginator}
                nextPage={nextPage}
                prevPage={prevPage}
                currentPage={currentPage}
                totalPage={totalPage}
            />

        </Container>
    );
};

export default TablesDataList;  