import { Grid } from '@mui/material'
import React from 'react'
import BlogEditor from './BlogEditor'
import BlogGenerator from './BlogGenerator'

export default function Createblog() {
  const alignCenter = { display: 'flex', justifyContent: "center" }
  return (
    <Grid container spacing={2} sx={{ marginTop: "10px" }}>
      <Grid item xs={4} sx={alignCenter}>
        <BlogGenerator />
      </Grid>
      <Grid item xs={8} sx={{ ...alignCenter, height: "90vh" }}>
        <BlogEditor />
      </Grid>
    </Grid >
  )
}
