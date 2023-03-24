import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import {useParams} from "react-router-dom";
import QueryService from '../../API/services/QueryService';
import {dateConvert} from '../../helpers/helper'
interface Blog {
  id:number,
  content:string,
  query:string,
  created_Date:string,
  updated_date:string
}

export default function Blog(props:any) { 
  const id = useParams().id;
  const [blog, setBlog] = useState<Blog>({id:0,content:'',query:'',created_Date:'',updated_date:''});
  useEffect(() => {
    blogDetails();
  }, []);
  let blogDetails = async()=>{
    let res = await QueryService.getBlogService(id);
      if (res.status === 200) {
        console.log(res.data.data,'><><<')
        setBlog(res.data.data)
        console.log(blog,'hi')
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
              <img src="assets/img/blog/blog-1.jpg" alt="" className="img-fluid"/>
            </div>

            <h2 className="title">{blog.query}</h2>

            <div className="meta-top">
              <ul>
                <li className="d-flex align-items-center"><i className="bi bi-person"></i> <a href="blog-details.html">Admin</a></li>
                <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <a href="blog-details.html"><time >{dateConvert(blog.created_Date)}</time></a></li>
                <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <a href="blog-details.html">0 Comments</a></li>
              </ul>
            </div>
            <div className="content" dangerouslySetInnerHTML={{ __html: blog.content }}>

            </div>

            {/* <div className="meta-bottom">
              <i className="bi bi-folder"></i>
              <ul className="cats">
                <li><a href="#">Business</a></li>
              </ul>

              <i className="bi bi-tags"></i>
              <ul className="tags">
                <li><a href="#">Creative</a></li>
                <li><a href="#">Tips</a></li>
                <li><a href="#">Marketing</a></li>
              </ul>
            </div> */}

          </article>

          <div className="post-author d-flex align-items-center">
            <img src="assets/img/blog/blog-author.jpg" className="rounded-circle flex-shrink-0" alt=""/>
            <div>
              <h4>Jane Smith</h4>
              <div className="social-links">
                <a href="https://twitters.com/#"><i className="bi bi-twitter"></i></a>
                <a href="https://facebook.com/#"><i className="bi bi-facebook"></i></a>
                <a href="https://instagram.com/#"><i className="biu bi-instagram"></i></a>
              </div>
              <p>
                Itaque quidem optio quia voluptatibus dolorem dolor. Modi eum sed possimus accusantium. Quas repellat voluptatem officia numquam sint aspernatur voluptas. Esse et accusantium ut unde voluptas.
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


            <div className="sidebar-item recent-posts">
              <h3 className="sidebar-title">Recent Posts</h3>

              <div className="mt-3">

                <div className="post-item mt-3">
                  <img src="assets/img/blog/blog-recent-1.jpg" alt="" className="flex-shrink-0"/>
                  <div>
                    <h4><a href="blog-post.html">Nihil blanditiis at in nihil autem</a></h4>
                    <time >Jan 1, 2020</time>
                  </div>
                </div>

                <div className="post-item">
                  <img src="assets/img/blog/blog-recent-2.jpg" alt="" className="flex-shrink-0"/>
                  <div>
                    <h4><a href="blog-post.html">Quidem autem et impedit</a></h4>
                    <time >Jan 1, 2020</time>
                  </div>
                </div>
              </div>

            </div>

            <div className="sidebar-item tags">
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
            </div>

          </div>

        </div>
      </div>

    </div>
  </section>
  );
}``