import React, { useState } from 'react'
import { Form,Button,Modal,Col,Row } from 'react-bootstrap';


const TablesDataUpdate = ({ showEditModal,handleCloseEditModal, handleUpdateDataList, editData }) => {

    const [formData, setFormData] = useState(editData);


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        handleUpdateDataList(editData.id, formData);
    }

    return (
    <>
        <Modal show={showEditModal} onHide={handleCloseEditModal}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Data</Modal.Title>
            </Modal.Header>
            <Modal.Body className='p-5'>
                <Form>
                    <Row>
                        <Col xs={12} md={12}>
                            <Form.Group controlId="formTradeCode" className='shadow-none'>
                                <Form.Label>Trade Code</Form.Label>
                                <Form.Control type="text" name="trade_code"  value={formData?.trade_code} onChange={handleChange} />
                            </Form.Group>
                        </Col>
                        <Col xs={6} md={6}>
                            <Form.Group controlId="formHigh">
                                <Form.Label>High</Form.Label>
                                <Form.Control type="number" name="high" value={formData?.high}  onChange={handleChange} />
                            </Form.Group>
                            <Form.Group controlId="formLow">
                                <Form.Label>Low</Form.Label>
                                <Form.Control type="number" name="low" value={formData?.low}  onChange={handleChange} />
                            </Form.Group>
                            <Form.Group controlId="formOpen">
                                <Form.Label>Open</Form.Label>
                                <Form.Control type="number" name="open" value={formData?.open}  onChange={handleChange} />
                            </Form.Group>
                            <Form.Group controlId="formClose">
                                <Form.Label>Close</Form.Label>
                                <Form.Control type="number" name="close" value={formData?.close}  onChange={handleChange} />
                            </Form.Group>  
                        </Col>
                        <Col xs={6} md={6}>
                            <Form.Group controlId="formVolume">
                                <Form.Label>Volume</Form.Label>
                                <Form.Control type="number" name="volume" value={formData?.volume}  onChange={handleChange} />
                            </Form.Group>
                            <Form.Group controlId="formDate">
                                <Form.Label>Date</Form.Label>
                                <Form.Control type="date" name="date" value={formData?.date}  onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" size='sm' onClick={handleCloseEditModal}>cancel</Button>
                <Button variant="success" size='sm' onClick={handleSubmit} >Update</Button>
            </Modal.Footer>
        </Modal> 
    </>
    )
}

export default TablesDataUpdate;
