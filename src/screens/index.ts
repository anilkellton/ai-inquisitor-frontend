import React from 'react';
const Dashboard = React.lazy(() => import('./Dashboard'));
import Home from './Home';
import CreateBlog from './Blogs/Createblog';


export default {
  CreateBlog,
  Dashboard,
  Home,
};
