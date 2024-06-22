import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

const Paginator = ({ nextPage, prevPage, currentPage, totalPage, handlePaginator }) => {

    return (
        <>
            <div className="d-flex justify-content-center align-items-center py-3">
                <Pagination>
                    <Pagination.First onClick={() => handlePaginator(1)} />

                    {prevPage ? (
                        <Pagination.Prev onClick={() => handlePaginator(currentPage - 1)} />
                    ) : (
                        <Pagination.Item disabled>No Previous</Pagination.Item>
                    )}

                    <Pagination.Item disabled>{`Page ${currentPage} of ${totalPage}`}</Pagination.Item>

                    {nextPage ? (
                        <Pagination.Next onClick={() => handlePaginator(currentPage + 1)} />
                    ) : (
                        <Pagination.Item disabled>No Next</Pagination.Item>
                    )}

                    <Pagination.Last onClick={() => handlePaginator(totalPage)} />
                </Pagination>
            </div>
        </>
    );
};

export default Paginator;
