import { Grid } from '@mui/material'
import BlogEditor from './BlogEditor'
import BlogGenerator from './BlogGenerator'
import React, { useState,useEffect } from 'react'

export default function Createblog() {
  const [data, setData] = useState({})

  console.log(data,'createData')
  const alignCenter = { display: 'flex', justifyContent: "center" }
  return (
    <section id="blog" className="blog">
    <div className="container" data-aos="fade-up">
      <div className="row g-5">
      <div className="col-lg-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
        <BlogGenerator setData={setData}/>
        </div>
        <div className="col-lg-8 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
        <BlogEditor data={data} />
        </div>
    </div>
    </div>
    </section>
  )
}
