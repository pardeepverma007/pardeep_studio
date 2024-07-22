import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Header from './pages/Header';
import Login from './pages/Login';
import Register from './pages/Register';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UploadVideo from './pages/UploadVideo';
import VideoPage from './pages/VideoPage';
// import './App.scss';

function App() {
  return (
    <div className="App main_page">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/upload-video" element={<UploadVideo />} />
        <Route path="/watch/:id" element={<VideoPage />} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
