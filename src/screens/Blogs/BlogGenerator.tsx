import React, { useState,useEffect } from 'react'
import { Box, Card, Checkbox, Divider, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, TextField } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import TextFieldWithChips from '../../components/TextFieldWithChips';
import QueryService from '../../API/services/QueryService';
import { useForm, Controller } from "react-hook-form";

export default function BlogGenerator() {
  const [selectedTone, setTone] = useState('')
  const [query, setQuery] = useState('');
  // const [blogData, setBlogData] = useState([])
  const { control, reset, handleSubmit } = useForm();
// const generateBlog = async (data:any) => {

// }
  const tones = [
    { label: 'Select', value: '' },
    { label: 'Convincing', value: 'Convincing' },
    { label: 'Formal', value: 'Formal' },
    { label: 'Professional', value: 'Professional' },
    {label:'Humorous',value:'Humorous'},
    {label:'Passionate',value:'Passionate'}
  ];

  const handleToneChange = (event: any) => { 
  }
  
  useEffect(() => {}, []);

  const onSubmit = async() => {
    try {
     alert('heel')
      const req = {
        query: query,
        tone:selectedTone,
        getImage:false
      };
      console.log(req,'req')
      console.log(JSON.stringify(req));
      let res = await QueryService.generateQueryService(req);
      if (res.status === 200 && res.data.success) {
        console.log(res.data.message)
        // router.replace('/user/login');
      } else {
        return console.error("something went wrong");
      }
    } catch (error) {
      console.log('out');
      console.log(error)
    }
  }

  const handleSelecetedKeywords = async(item: any) => {
    // try {
    //   const req = {
    //     query: item.query
    //   };
    //   console.log(JSON.stringify(req));
    //   let res = await QueryService.generateQueryService(req);
    //   if (res.status === 200 && res.data.success) {
    //     console.log(res.data.message)
    //     // router.replace('/user/login');
    //   } else {
    //     return console.error("something went wrong");
    //   }
    // } catch (error) {
    //   return console.log(item);
    // }
  }
  return (
    <Card sx={{ width: "80%", height: "100%", minHeight: 800, background: "white" }}>
      <form onSubmit={onSubmit}>
      <CardActionArea>
        <Typography variant="h6" sx={{ textAlign: "center", padding: "50px" }} component="div">
          BLOG GENERATOR
        </Typography>
        <CardContent>
          <FormControl sx={{ m: 1, width: "100%" }}>
            <InputLabel id="demo-multiple-checkbox-label">Select Tone</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              value={selectedTone}
              onChange={(event) => setTone(event.target.value)}
              input={<OutlinedInput label="Select Tone" />} 
            >
              {tones.map((tone) => (
                <MenuItem key={tone.value} value={tone.value}>
                  {tone.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <div style={{ marginTop: "30px" }} />

          <FormControl sx={{ m: 1, width: "100%" }}>
            <TextField
              onChange={(event) => setQuery(event.target.value)}
              fullWidth
              variant="outlined"
              id="query"
              name="query"
              placeholder="Enter your query"
              label="Query"
            />
          </FormControl>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: "right" }}>
        <Button type='submit' variant="contained">Generate Results</Button>
      </CardActions>
      </form>
    </Card>
  )
}
