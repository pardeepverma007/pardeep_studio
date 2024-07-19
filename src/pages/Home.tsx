// Home.js

import React, { useState } from 'react';
import { Container, Row, Col, Nav, Card } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroll-component';
import ReactPlayer from 'react-player';
const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&key=AIzaSyCEGEuX_02fFPBIaLaWxharWFeq1ODo74s';
const Home = () => {
    const [activeTab, setActiveTab] = useState('home');
    const [hoveredVideo, setHoveredVideo] = useState(null);


    const getServerSideProps = async () => {
        const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}`)
        const data = await res.json();
        console.log(data)
    }

    const videos = [
        {
            title: 'Video 1Build Stone Paper Scissor Game Using HTML, CSS & JS🔥 | #4 Mini Project',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
            thumbnail: 'https://via.placeholder.com/300x180',
            channel: 'Channel E',
            views: '150K',
            time: '5 months ago'
        },

        {
            title: 'Video 1Build Stone Paper Scissor Game Using HTML, CSS & JS🔥 | #4 Mini Project',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
            thumbnail: 'https://via.placeholder.com/300x180',
            channel: 'Channel B',
            views: '50K',
            time: '5 months ago'
        },
        {
            title: 'Video 1Build Stone Paper Scissor Game Using HTML, CSS & JS🔥 | #4 Mini Project',
            videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
            thumbnail: 'https://via.placeholder.com/300x180',
            channel: 'Channel C',
            views: '200K',
            time: '5 months ago'
        },
        {
            title: 'Video 1Build Stone Paper Scissor Game Using HTML, CSS & JS🔥 | #4 Mini Project',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
            thumbnail: 'https://via.placeholder.com/300x180',
            channel: 'Channel D',
            views: '80K',
            time: '5 months ago'
        },
        {
            title: 'Video 1Build Stone Paper Scissor Game Using HTML, CSS & JS🔥 | #4 Mini Project',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
            thumbnail: 'https://via.placeholder.com/300x180',
            channel: 'Channel A',
            views: '100K',
            time: '5 months ago'
        },

    ];
    const handleMouseEnter = (index: any) => {
        setHoveredVideo(index);
    };

    const handleMouseLeave = () => {
        setHoveredVideo(null);
    };

    const renderContent = () => {
        if (activeTab === 'home') {
            return (
                <Row>
                    <Row>
                        {videos.map((video, index) => (
                            <Col key={index} md={4} className="mb-4">
                                <Card
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={handleMouseLeave}
                                >

                                    {hoveredVideo === index ? (
                                        <ReactPlayer
                                            className="react-player"
                                            url={video.videoUrl}
                                            width="98%"
                                            height="180px"

                                            controls={true}
                                            playing={true}
                                        />
                                    ) : (
                                        <ReactPlayer
                                            className="react-player"
                                            url={video.videoUrl}
                                            width="98%"
                                            height="180px"
                                            controls={false}
                                            playing={true}
                                        />
                                    )}
                                    {/* <ReactPlayer
                                        className="react-player"
                                        url={video.videoUrl}
                                        width="100%"
                                        height="100%"
                                        controls={false}
                                        playing={true}
                                        config={{
                                            youtube: {
                                                playerVars: { showinfo: 1 }
                                            },
                                        }}
                                    /> */}
                                    {/* <Card.Img variant="top" src={video.thumbnail} /> */}
                                    <Card.Body>
                                        <div className='d-flex'>
                                            <div className='channelName pe-2'>
                                                <img id="img" draggable="false" className="style-scope yt-img-shadow" alt="" width="40" src="https://yt3.ggpht.com/MeY_fGNrjVLV0PVOBN7dRWzMBS0y41YGm55LOaJ02cXV82a7Np9pYxxhHFqdYdncEy1I2cYR=s68-c-k-c0x00ffffff-no-rj" />
                                            </div>
                                            <div>
                                                <div className="d-flex justify-content-between align-items-center mb-0">
                                                    <Card.Title className='mb-0'>{video.title.substring(0, 55) + "..."}</Card.Title>
                                                </div>
                                                <Card.Text>
                                                    <small className='vide_text' style={{ color: "#aaa" }}>{video.channel}</small>
                                                    <div className='d-flex align-items-center'>
                                                        <span className='vide_text me-2' style={{ color: "#aaa" }}>{video.views} views</span> • <span style={{ color: "#aaa" }} className='vide_text ms-2'>{video.time}</span>
                                                    </div>
                                                </Card.Text>
                                            </div>

                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>

                        ))}
                    </Row>
                </Row >
            );
        }
        return <div>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</div>;
    };

    return (
        <Container fluid>
            <Row>
                {/* <button onClick={getServerSideProps}>sfnjkdsdhfghd</button> */}
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
