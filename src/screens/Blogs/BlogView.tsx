import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import QueryService from '../../API/services/QueryService';
import {dateConvert} from '../../helpers/helper'
import RecentPost from '../../components/RecentPost'
import {url} from '../../API/client/const'
interface Blog {
  id:number,
  content:string,
  query:string,
  created_Date:string,
  updated_date:string,
  image:string|null
}

export default function Blog(props:any) { 
  const id = useParams().id;
  const [blog, setBlog] = useState<Blog>({id:0,content:'',query:'',created_Date:'',updated_date:'',image:null});
  useEffect(() => {
    blogDetails();
  }, []);
  let blogDetails = async()=>{
    let res = await QueryService.getBlogService(id);
      if (res.status === 200) {
        setBlog(res.data.data)
      } else {
        return console.error("something went wrong");
      }
  }

  return (
    <section id="blog" className="blog">
    <div className="container" data-aos="fade-up">

      <div className="row">

        <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">

          <article className="blog-details">

            <div className="post-img">
              <img src={blog.image?url+'/'+blog.image:'../../public/images/default.jpg'} alt="" className="img-fluid"/>
            </div>

            <h2 className="title">{blog.query}</h2>

            <div className="meta-top">
              <ul>
                <li className="d-flex align-items-center"><i className="bi bi-person"></i> <a href="blog-details.html">ChatGPT</a></li>
                <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <a href="blog-details.html"><time >{dateConvert(blog.created_Date)}</time></a></li>
                <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <a href="blog-details.html">0 Comments</a></li>
              </ul>
            </div>
            <div className="content" dangerouslySetInnerHTML={{ __html: blog.content }}>

            </div>
          </article>

          <div className="post-author d-flex align-items-center">
            <img src="assets/img/blog/blog-author.jpg" className="rounded-circle flex-shrink-0" alt=""/>
            <div>
              <h4>ChatGPT</h4>
              <div className="social-links">
                <a href="https://twitters.com/#"><i className="bi bi-twitter"></i></a>
                <a href="https://facebook.com/#"><i className="bi bi-facebook"></i></a>
                <a href="https://instagram.com/#"><i className="biu bi-instagram"></i></a>
              </div>
              <p>
              I'm ChatGPT, a language model developed by OpenAI, designed to assist and communicate with people through text-based conversations. I've been trained on a large corpus of text data using advanced machine learning techniques to understand natural language, generate human-like responses, and provide accurate and helpful information on a wide range of topics.
              </p>
            </div>
          </div>

          {/* <div className="comments">

            <h4 className="comments-count">8 Comments</h4>

            <div id="comment-1" className="comment">
              <div className="d-flex">
                <div className="comment-img"><img src="assets/img/blog/comments-1.jpg" alt=""/></div>
                <div>
                  <h5><a href="">Georgia Reader</a> <a href="#" className="reply"><i className="bi bi-reply-fill"></i> Reply</a></h5>
                  <time >01 Jan,2022</time>
                  <p>
                    Et rerum totam nisi. Molestiae vel quam dolorum vel voluptatem et et. Est ad aut sapiente quis molestiae est qui cum soluta.
                    Vero aut rerum vel. Rerum quos laboriosam placeat ex qui. Sint qui facilis et.
                  </p>
                </div>
              </div>
            </div>

            <div id="comment-2" className="comment">
              <div className="d-flex">
                <div className="comment-img"><img src="assets/img/blog/comments-2.jpg" alt=""/></div>
                <div>
                  <h5><a href="">Aron Alvarado</a> <a href="#" className="reply"><i className="bi bi-reply-fill"></i> Reply</a></h5>
                  <time >01 Jan,2022</time>
                  <p>
                    Ipsam tempora sequi voluptatem quis sapiente non. Autem itaque eveniet saepe. Officiis illo ut beatae.
                  </p>
                </div>
              </div>
            </div>

            <div className="reply-form">

              <h4>Leave a Reply</h4>
              <p>Your email address will not be published. Required fields are marked * </p>
              <form action="">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input name="name" type="text" className="form-control" placeholder="Your Name*"/>
                  </div>
                  <div className="col-md-6 form-group">
                    <input name="email" type="text" className="form-control" placeholder="Your Email*"/>
                  </div>
                </div>
                <div className="row">
                  <div className="col form-group">
                    <input name="website" type="text" className="form-control" placeholder="Your Website"/>
                  </div>
                </div>
                <div className="row">
                  <div className="col form-group">
                    <textarea name="comment" className="form-control" placeholder="Your Comment*"></textarea>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">Post Comment</button>

              </form>

            </div>

          </div> */}

        </div>

        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="400">

          <div className="sidebar ps-lg-4">

            <div className="sidebar-item search-form">
              <h3 className="sidebar-title">Search</h3>
              <form action="" className="mt-3">
                <input type="text"/>
                <button type="submit"><i className="bi bi-search"></i></button>
              </form>
            </div>


            <RecentPost data={[]}/>

            {/* <div className="sidebar-item tags">
              <h3 className="sidebar-title">Tags</h3>
              <ul className="mt-3">
                <li><a href="#">App</a></li>
                <li><a href="#">IT</a></li>
                <li><a href="#">Business</a></li>
                <li><a href="#">Mac</a></li>
                <li><a href="#">Design</a></li>
                <li><a href="#">Office</a></li>
                <li><a href="#">Creative</a></li>
                <li><a href="#">Studio</a></li>
                <li><a href="#">Smart</a></li>
                <li><a href="#">Tips</a></li>
                <li><a href="#">Marketing</a></li>
              </ul>
            </div> */}

          </div>

        </div>
      </div>

    </div>
  </section>
  );
}``