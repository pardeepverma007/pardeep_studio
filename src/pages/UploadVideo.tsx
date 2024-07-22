import React, { useState } from 'react';
import { Container, Form, Button, Col, Row, Alert } from 'react-bootstrap';

const UploadVideo = () => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [isPublished, setIsPublished] = useState<boolean>(false);
    const [thumbnail, setThumbnail] = useState<File | null>(null);
    const [videoFile, setVideoFile] = useState<File | null>(null);
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Handle form submission here
        if (!title || !description || !videoFile) {
            setError('Please fill in all required fields.');
            return;
        }

        // For demonstration purposes, we'll just display a success message
        setSuccess('Video uploaded successfully!');
        setError('');
        // Clear fields or handle further logic here
    };
    return (
        <>
            <Container className="video-upload-container">
                <h1 className="text-center my-4">Upload Video</h1>
                {error && <Alert variant="danger">{error}</Alert>}
                {success && <Alert variant="success">{success}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter video title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Enter video description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formPublished">
                        <Form.Check
                            type="checkbox"
                            label="Published"
                            checked={isPublished}
                            onChange={(e) => setIsPublished(e.target.checked)}
                        />
                    </Form.Group>

                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="formThumbnail">
                                <Form.Label>Thumbnail</Form.Label>
                                <Form.Control
                                    type="file"
                                    accept="image/*"
                                    onChange={(e: any) => setThumbnail(e.target.files[0])}
                                />
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group controlId="formVideoFile">
                                <Form.Label>Video File</Form.Label>
                                <Form.Control
                                    type="file"
                                    accept="video/*"
                                    onChange={(e: any) => setVideoFile(e.target.files[0])}
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Button variant="primary" type="submit" className="mt-3">
                        Upload
                    </Button>
                </Form>
            </Container>
        </>
    )
}
export default UploadVideo;
