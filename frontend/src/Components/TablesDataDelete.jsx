import React, { useState } from 'react'
import { Form,Button,Modal } from 'react-bootstrap';

const TablesDataDelete = ({ showDeleteModal, handleCloseDeleteModal, tradeCodeToDelete, handleConfirmDelete }) => {
  return (
    <>
        <Modal show={showDeleteModal} onHide={handleCloseDeleteModal} centered>
            <Modal.Header closeButton>
                <Modal.Title>Edit Data</Modal.Title>
            </Modal.Header>
            <Modal.Body className='p-5'>
                <Form>
                    <p>Are you sure to delete this <strong>{tradeCodeToDelete}</strong> data!,</p>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" size='sm' onClick={handleCloseDeleteModal}>cancel</Button>
                <Button variant="danger" size='sm' onClick={handleConfirmDelete}>Delete</Button>
            </Modal.Footer>
        </Modal> 
    </>
  )
}

export default TablesDataDelete;