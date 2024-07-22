import React, { useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroll-component';
import ReactPlayer from 'react-player';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
const formatTimeAgo = (timestamp: any) => {
    return moment(timestamp).fromNow(true);
};

interface HomeVideoProps {
    data: any
}
const HomeVideos: React.FC<HomeVideoProps> = ({ data }) => {

    const navigate = useNavigate()

    const [hoveredVideo, setHoveredVideo] = useState(null);

  


    const handleMouseEnter = (index: any) => {
        setHoveredVideo(index);
    };

    const handleMouseLeave = () => {
        setHoveredVideo(null);
    };

    const handlePlayVideo = (id: string) => {
        navigate(`/watch/${id}`);
    }

    return (
        <>
            <Row>
                <Row>
                    {data?.map((video: any, index: number) => (
                        <Col key={index} md={4} className="mb-4">
                            <Card
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                                onClick={() => handlePlayVideo(video._id)}
                            >
                                {hoveredVideo === index ? (
                                    <ReactPlayer
                                        className="react-player"
                                        url={video.videoFile}
                                        width="98%"
                                        height="180px"

                                        controls={true}
                                        playing={true}
                                    />
                                ) : (
                                    <ReactPlayer
                                        className="react-player"
                                        url={video.videoFile}
                                        width="98%"
                                        height="180px"
                                        controls={false}
                                        playing={true}
                                    />
                                )}
                                <Card.Body>
                                    <div className='d-flex'>
                                        <div className='channelName pe-2'>
                                            <img id="img" draggable="false" className="style-scope yt-img-shadow rounded-circle" alt="" width="40" src={video?.owner?.avatar} />
                                        </div>
                                        <div>
                                            <div className="d-flex justify-content-between align-items-center mb-0">
                                                <Card.Title className='mb-0'>{video.title.substring(0, 55) + "..."}</Card.Title>
                                            </div>
                                            <Card.Text>
                                                <small className='vide_text' style={{ color: "#aaa" }}>{video?.owner.username}</small>
                                                <div className='d-flex align-items-center'>
                                                    <span className='vide_text me-2' style={{ color: "#aaa" }}>{video.views} views</span> • <span style={{ color: "#aaa" }} className='vide_text ms-2'>{formatTimeAgo(video?.createdAt)} ago</span>
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
        </>
    )
}
export default HomeVideos