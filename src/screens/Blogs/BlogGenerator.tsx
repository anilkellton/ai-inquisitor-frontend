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
  const [selectedTone, setSelectedTone] = useState<any>(null)
  const [blogData, setBlogData] = useState([])
  const { control, reset, handleSubmit } = useForm();
// const generateBlog = async (data:any) => {

// }

  const tones = [
    "Convincing",
    "Formal",
    "Professional",
    "Humorous",
    "Passionate"
  ]

  const handleToneChange = (event: any) => { 
  }

  useEffect(() => {}, []);

  const onSubmit = async(data: any) => {
    try {
      console.log('in');
      const req = {
        query: data.query
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
      return console.log(data);
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
              onChange={handleToneChange}
              input={<OutlinedInput label="Select Tone" />}
              renderValue={(selected) => selected.join(', ')}
            >
              {tones.map((tone) => (
                <MenuItem key={tone} value={tone}>
                  <ListItemText primary={tone} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <div style={{ marginTop: "30px" }} />

          <FormControl sx={{ m: 1, width: "100%" }}>
            <TextField
              // selectedTags={handleSelecetedKeywords}
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
        <Button variant="contained"  onClick={async () => {await onSubmit} }>Generate Results</Button>
      </CardActions>
    </Card>
  )
}
