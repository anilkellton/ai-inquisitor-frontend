import React from 'react';
import { Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import {
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import navigation from '../navigation';
import screens from '../screens';
import BlogView from '../screens/Blogs/BlogView';
const { Home, Dashboard, CreateBlog } = screens;

const { ProtectedRoute } = navigation;

const App = () => {
  const navigate = useNavigate()

  const handleRoute = (url: any) => {
    navigate(url)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            AI Inquisitor
          </Typography>
          <Button color="inherit" onClick={() => handleRoute("/")}>Home</Button>
          <Button color="inherit" onClick={() => handleRoute("/create-blog")}>Create Blog</Button>
        </Toolbar>
      </AppBar>
      <main className="main-container" id='main-container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/view-blog" element={<BlogView />} />

        </Routes>
      </main>
    </Box>
  );
};

export default App;
