import React, { useEffect, useState } from 'react';
import { Container, Row, Col, ListGroup, Card, Form, Button, Badge } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { _get } from '../Axios/apiClient';
import ReactPlayer from 'react-player';
import { toast } from 'react-toastify';
import moment from 'moment';
// import { useNavigate } from 'react-router-dom';
const formatTimeAgo = (timestamp: any) => {
    return moment(timestamp).fromNow(true);
};
const VideoPage = () => {

    const { id } = useParams();
    const [videos, setVideos] = useState<any | null>(null);
    const [video, setVideo] = useState<any | null>(null)
    const getWatchVide = async () => {
        const response = await _get(`/video/video/${id}`);
        console.log(response.data, "response")
        if (response.data.status == true) {
            setVideo(response.data.data)
        }
    }

    console.log("videos", videos)

    const fetchVideos = async () => {
        try {
            const response = await _get('/video/videos');
            // console.log(response.data, "fetchVideos")
            if (response.data.status == true) {
                setVideos(response.data.data)
            } else {
                toast(response.data.message)
            }
        } catch (error: any) {
            toast(error.response.data.message)
            console.log("Error: when User fetch videos", error.response.data.message)
        }
    }

    useEffect(() => {
        fetchVideos();
    }, [])

    useEffect(() => {
        getWatchVide();
    }, [id])

    console.log(video, "video")
    const [hoveredVideo, setHoveredVideo] = useState(null);


    const handleMouseEnter = (index: any) => {
        setHoveredVideo(index);
    };

    const handleMouseLeave = () => {
        setHoveredVideo(null);
    };

    return (
        <Container fluid style={{ minHeight: '100vh' }} className='Videopage'>
            <Row>
                {/* Main Video Section */}
                <Col md={8}>
                    <Card>
                        <ReactPlayer
                            url={video?.videoFile}
                            width="100%"
                            controls
                        />
                        <Card.Body>
                            <Card.Title>{video?.title}</Card.Title>
                            <Card.Text>{video?.description}</Card.Text>
                        </Card.Body>
                    </Card>

                    {/* Comments Section */}
                    <Card className="mt-3">
                        <Card.Header>Comments</Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Group controlId="comment">
                                    <Form.Control as="textarea" rows={3} placeholder="Add a comment..." />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="mt-2">Post</Button>
                            </Form>
                            <ListGroup variant="flush" className="mt-3">
                                <ListGroup.Item>User1: Great video!</ListGroup.Item>
                                <ListGroup.Item>User2: Thanks for sharing!</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Sidebar with Video List */}
                <Col md={4}>
                    {videos?.map((data: any, index: number) => {
                        return <Card className="mb-3">
                            <Row
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                                onClick={() => { alert("mnbhdsabda") }}
                            >
                                <Col md={4}

                                >
                                    <ReactPlayer
                                        className="react-player"
                                        url={data?.videoFile}
                                        width="128px"
                                        height="88px"
                                        controls={false}
                                        playing={false}
                                    />
                                </Col>
                                <Col md={8}>
                                    <Card.Body className='p-1'>
                                        <Card.Title className='SideBar_video mb-0'>{data?.title}</Card.Title>
                                        <Card.Text className='mb-0 card_text'>
                                            {data?.owner?.username}
                                        </Card.Text>
                                        <Card.Text className='card_text'>
                                            {data?.views} views · {formatTimeAgo(data?.createdAt)} ago
                                        </Card.Text>

                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    })}


                </Col>
            </Row>
        </Container>
    );
};

export default VideoPage;
