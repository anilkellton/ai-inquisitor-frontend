import React, { useEffect, useState } from 'react';
import {trimBody,dateConvert} from '../helpers/helper'
import { Link } from 'react-router-dom';
export default function RecentPost(props:any){
  const {data} = props;
  console.log(data)
  const [blogData, setBlogData] = useState<any[]>([]);
  useEffect(() => {
    setBlogData(data);
  }, [data]);
    return (
      <>
        <div className="sidebar-item recent-posts">
              <h3 className="sidebar-title">Recent Posts</h3>
              <div className="mt-3">
              {blogData.map((item,key) => (
                <div className="post-item mt-3"  key={key}>
                  <img src="assets/img/blog/blog-recent-1.jpg" alt="" className="flex-shrink-0"/>
                  <div>
                    <h4><Link to={`/blog/${item.id}`}>{item.query}</Link></h4>
                    <h5></h5>
                    <time >{dateConvert(item.created_Date)}</time>
                  </div>
                </div>
                 ))}
              </div>
        </div>
      </>
    )
}