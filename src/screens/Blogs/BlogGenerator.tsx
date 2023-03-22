import React, { useState,useEffect } from 'react'
import { Card, FormControl, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import TextFieldWithChips from '../../components/TextFieldWithChips';
import QueryService from '../../API/services/QueryService';
import { useForm, Controller } from "react-hook-form";

export default function BlogGenerator(props: any) {
  const [selectedTone, setTone] = useState('')
  const [query, setQuery] = useState('');

  const tones = [
    { label: 'Select', value: '' },
    { label: 'Convincing', value: 'Convincing' },
    { label: 'Formal', value: 'Formal' },
    { label: 'Professional', value: 'Professional' },
    {label:'Humorous',value:'Humorous'},
    {label:'Passionate',value:'Passionate'}
  ];

  const handleSubmit = async(event: any) => {
    event.preventDefault();
    console.log(query);
    try {
      const req = {
        query: query,
        tone:selectedTone,
        getImage:false
      };
      console.log(req,'req')
      console.log(JSON.stringify(req));
      let res = await QueryService.generateQueryService(req);
      if (res.status === 200) {
        console.log('in')
        console.log(res);
        props.setData({response:res.data.textAnswer,query:query})
        // setData(res.data.textAnswer)
        //  console.log(setData,'setData1')
        console.log(res.data.textAnswer,'setData')
        // router.replace('/user/login');
      } else {
        return console.error("something went wrong");
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleSelecetedKeywords = async(item: any) => {
  }

  const handleInputChange = (event:any) => {
    setQuery(event.target.value);
  };


  return (
    <Card sx={{ width: "80%", height: "100%", minHeight: 800, background: "white" }}>
      <form onSubmit={handleSubmit}>
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

          <FormControl sx={{ m: 1, width: "100%" }} onSubmit={handleSubmit}>
             <TextField
        label="Query"
        id="query"
        name="query"
        type="text"
        value={query}
        onChange={handleInputChange}
        variant="outlined"
        placeholder="Enter your query"
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