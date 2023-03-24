import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import BlogServices from "../../API/services/BlogService";
import { Link } from 'react-router-dom';
import {dateConvert} from '../../helpers/helper'

const Landing = () => {
  type Response = {
    status: Number,blogData: [{}]
}
  const [blogData, setBlogData] = useState<any[]>([]);
  useEffect(() => {
    blogDetails();
  }, []);

  const blogDetails = async () => {
    try{
      const response = await BlogServices.lisingService();
      if(response.status ===200 && response.statusText == 'OK'){
        setBlogData(response.data.blogData);
      }
    } catch(error) {
      console.log(error);
    }
  }
  const trimBody = (content:string)=>{
    return `${content.slice(0, 100)}....`

  }
  return (
    <>
     <section id="blog" className="blog">
      <div className="container" data-aos="fade-up">

        <div className="row g-5">

          <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">

            <div className="row gy-5 posts-list">
            {
          blogData.map((item,key) => (
              <div className="col-lg-6" key={key}>
                <article className="d-flex flex-column">

                  <div className="post-img">
                    {/* <img src="assets/img/blog/blog-1.jpg" alt="" className="img-fluid" /> */}
                  </div>

                  <h2 className="title">
                    <a href="blog-details.html">{item.query}</a>
                  </h2>

                  <div className="meta-top">
                    <ul>
                      <li className="d-flex align-items-center"><i className="bi bi-person"></i> <a >Admin</a></li>
                      <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <a ><time >{dateConvert(item.created_Date)}</time></a></li>
                      <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <a >0 Comments</a></li>
                    </ul>
                  </div>

                  <div className="content" dangerouslySetInnerHTML={{ __html: trimBody(item.content) }}>
                  </div>

                  <div className="read-more mt-auto align-self-end">
                    <Link to={`/blog/${item.id}`}><a >Read More <i className="bi bi-arrow-right"></i></a></Link>
                  </div>

                </article>
              </div>
          ))}
            </div>

            <div className="blog-pagination">
              <ul className="justify-content-center">
                <li><a href="#">1</a></li>
                <li className="active"><a href="#">2</a></li>
                <li><a href="#">3</a></li>
              </ul>
            </div>

          </div>

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="400">

            <div className="sidebar ps-lg-4">

              <div className="sidebar-item search-form">
                <h3 className="sidebar-title">Search</h3>
                <form action="" className="mt-3">
                  <input type="text" />
                  <button type="submit"><i className="bi bi-search"></i></button>
                </form>
              </div>


              <div className="sidebar-item recent-posts">
                <h3 className="sidebar-title">Recent Posts</h3>

                <div className="mt-3">

                  <div className="post-item mt-3">
                    {/* <img src="assets/img/blog/blog-recent-1.jpg" alt="" className="flex-shrink-0"/> */}
                    <div>
                      <h4><a href="blog-post.html">Nihil blanditiis at in nihil autem</a></h4>
                      <time>Jan 1, 2020</time>
                    </div>
                  </div>

                  <div className="post-item">
                    {/* <img src="assets/img/blog/blog-recent-2.jpg" alt="" className="flex-shrink-0" /> */}
                    <div>
                      <h4><a href="blog-post.html">Quidem autem et impedit</a></h4>
                      <time>Jan 1, 2020</time>
                    </div>
                  </div>                 

                </div>

              </div>

              <div className="sidebar-item tags">
                <h3 className="sidebar-title">Tags</h3>
                <ul className="mt-3">
                  <li><a href="#">App</a></li>
                
                </ul>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
    {/* <div style={{ justifyContent: "center", display: "flex" }}>
      <List sx={{ width: '80%', bgcolor: 'background.paper' }}>
        {
          blogData.map((item,key) => (
            <>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                // primary={blogData.blogDetails.query}
                  // primary="Brunch this weekend?"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        key= {key}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        AI-GENERATED
                      </Typography>
                      {item.content}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          ))
        }

      </List>
    </div> */}
    </>
  );
};

export default Landing;
