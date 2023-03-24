import React from 'react';
import { Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import "../../public/css/vendor/bootstrap/css/bootstrap.min.css";
import "../../public/css/vendor/bootstrap-icons/bootstrap-icons.css";
import "../../public/css/main.css";
import "../../public/css/vendor/swiper/swiper-bundle.min.css";
import "../../public/css/vendor/remixicon/remixicon.css";
import "../../public/css/vendor/glightbox/css/glightbox.min.css";
import "../../public/css/vendor/aos/aos.css"

import {
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import navigation from '../navigation';
import screens from '../screens';
import BlogView from '../screens/Blogs/BlogView';
import Header from '../screens/Navigation/header';
const { Home, Dashboard, CreateBlog } = screens;
import { useEffect,useState } from 'react'
import { useLocation } from 'react-router-dom';
{/* <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"> */}

const { ProtectedRoute } = navigation;
const App = () => {
  const navigate = useNavigate();
  const [state, setState] = useState('');
  const location = useLocation();
  const path = location.pathname;
  const handleRoute = (url: any) => {
    navigate(url)
  }
  useEffect(() => {
    if (path === '/') {
      setState('Home');
    } else if (path === '/create-blog') {
      setState('Blog-Generator');
    } else {
      setState('View-Blog');
    }
  }, [path]);

  return (
    <>
    <Header/>
      {/* <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            AI Inquisitor
          </Typography>
          <Button color="inherit" onClick={() => handleRoute("/")}>Home</Button>
          <Button color="inherit" onClick={() => handleRoute("/create-blog")}>Create Blog</Button>
        </Toolbar>
      </AppBar> */}
      
      <main id="main">
      <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage: 'url("../../public/images/blog-header.jpg")'}}>
      <div className="container position-relative d-flex flex-column align-items-center">

        <h2>{state}</h2>
        <ol>
          <li><a href="index.html">Home</a></li>
          <li>{state}</li>
        </ol>

      </div>
    </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/blog/:id" element={<BlogView />} />

        </Routes>
      </main>
    </>
  );
};

export default App;
