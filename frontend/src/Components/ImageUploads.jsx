import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import useApiHelper from '../api';
import SuccessToast from '../../utilits/Toast';

const ImageUploads = () => {

    const [formData, setFormData] = useState(null);
    const [showToast, setShowToast] = useState(false);
    const api = useApiHelper();


    const handleFormdData = (e) => {
        const file = e.target.files[0];
        const newFormData = new FormData();
        newFormData.append('file', file);
        setFormData(newFormData);
    };


    const handleSubmit =  (e) => {
        e.preventDefault();
    
        try {
            const response = api.fileUploads(formData);
            console.log('Upload Response:', response.data);
            setShowToast(!showToast);
        } catch (error) {
            console.error('Upload Error:', error.message);
        }
    };
    
    
    return (
        <Container className='d-flex justify-content-center align-items-center mt-5 pt-5'>
            <Card className='p-5 bg-body-tertiary border-0 shadow rounded-4' style={{ width: '30rem' }}>
                <Card.Body className="d-flex flex-column align-items-center">
                    <Card.Title className='text-center text-uppercase mb-3'>Upload File</Card.Title>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formFile" className="mb-3 mt-3">
                            <Form.Label className='text-uppercase'>Only CSV files:</Form.Label>
                            <Form.Control type="file" onChange={handleFormdData} required/>
                        </Form.Group>
                        <Button type="submit" className='mt-2' variant="success">Submit</Button>
                    </Form>
                </Card.Body>
            </Card>
            <SuccessToast 
                show={showToast} 
                onClose={() => setShowToast(false)} 
                message="File uploaded successfully." 
                duration={3000} 
            />
        </Container>
    );
}

export default ImageUploads;