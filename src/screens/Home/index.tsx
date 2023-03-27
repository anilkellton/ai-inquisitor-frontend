import React, { useEffect, useState } from 'react';
import BlogServices from "../../API/services/BlogService";
import { Link } from 'react-router-dom';
import {dateConvert,trimBody} from '../../helpers/helper'
import RecentPost from '../../components/RecentPost';
import {url} from '../../API/client/const'

const Landing = () => {
  const [blogData, setBlogData] = useState<any[]>([]);
  const [pages,setPages] = useState<number>(0);
  const [pageNumber,setPageNumber] = useState<number>(1)
  useEffect(() => {
    blogDetails();
  }, [pageNumber]);
  const setPage = function(event:any,number:number):void{
    event.preventDefault();
    setPageNumber(number)
  }

  const blogDetails = async () => {
    try{
      const response = await BlogServices.listingService(pageNumber);
      if(response.status ===200 && response.statusText == 'OK'){
        setBlogData(response.data.blogData);
        setPages(response.data.totalPages);
      }
    } catch(error) {
      console.log(error);
    }
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
                    <img src={item.image?url+'/'+item.image:'../../public/images/default.jpg'} alt="" className="img-fluid" />
                  </div>

                  <h2 className="title">
                  <Link to={`/blog/${item.id}`}><a>{item.query}</a></Link>
                  </h2>

                  <div className="meta-top">
                    <ul>
                      <li className="d-flex align-items-center"><i className="bi bi-person"></i> <a >ChatGPT</a></li>
                      <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <a ><time >{dateConvert(item.created_Date)}</time></a></li>
                      <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <a >0 Comments</a></li>
                    </ul>
                  </div>

                  <div className="content" dangerouslySetInnerHTML={{ __html: trimBody(item.content,200) }}>
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
              {Array.from({ length: pages }, (_, index) => <li className={pageNumber==index+1?"active":""} key={index}><a onClick={(event)=>setPage(event,index+1)}  href="">{index+1}</a></li>)}
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
              <RecentPost data={blogData}/>

              {/* <div className="sidebar-item tags">
                <h3 className="sidebar-title">Tags</h3>
                <ul className="mt-3">
                  <li><a href="#">App</a></li>
                
                </ul>
              </div> */}

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
