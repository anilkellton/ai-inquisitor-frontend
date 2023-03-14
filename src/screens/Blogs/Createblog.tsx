import { Grid } from '@mui/material'
import BlogEditor from './BlogEditor'
import BlogGenerator from './BlogGenerator'
import React, { useState,useEffect } from 'react'

export default function Createblog() {
  const [data, setData] = useState('')
  const alignCenter = { display: 'flex', justifyContent: "center" }
  return (
    <Grid container spacing={2} sx={{ marginTop: "10px" }}>
      <Grid item xs={4} sx={alignCenter}>
        <BlogGenerator  setData= {setData}/>
      </Grid>
      <Grid item xs={8} sx={{ ...alignCenter, height: "90vh" }}>
        <BlogEditor data={data} />
        
      </Grid>
    </Grid >
  )
}
