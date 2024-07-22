// Home.js

import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import HomeVideos from '../component/HomeVideos';
import { _get } from '../Axios/apiClient'
import { toast } from 'react-toastify';

const Home = () => {
    const [activeTab, setActiveTab] = useState<string>('home');
    const [videos, setVideos] = useState(null);

    // console.log(videos, "videos")
    const renderContent = () => {
        if (activeTab === 'home') {
            return (
                <HomeVideos data={videos} />
            );
        }
        return <div>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</div>;
    };
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


    return (
        <Container fluid>
            <Row>
                <Col xs={2} id="sidebar" className="bg-light">
                    <Nav className="flex-column">
                        <Nav.Link
                            href="#home"
                            active={activeTab === 'home'}
                            onClick={() => setActiveTab('home')}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            href="#trending"
                            active={activeTab === 'trending'}
                            onClick={() => setActiveTab('trending')}
                        >
                            Trending
                        </Nav.Link>
                        <Nav.Link
                            href="#subscriptions"
                            active={activeTab === 'subscriptions'}
                            onClick={() => setActiveTab('subscriptions')}
                        >
                            Subscriptions
                        </Nav.Link>
                        <Nav.Link
                            href="#library"
                            active={activeTab === 'library'}
                            onClick={() => setActiveTab('library')}
                        >
                            Library
                        </Nav.Link>
                    </Nav>
                </Col>
                <Col xs={10} id="page-content">
                    <div id="page_content">
                        {renderContent()}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
