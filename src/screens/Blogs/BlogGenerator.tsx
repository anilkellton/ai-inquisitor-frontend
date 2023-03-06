import React, { useState } from 'react'
import { Box, Card, Checkbox, Divider, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import TextFieldWithChips from '../../components/TextFieldWithChips';


export default function BlogGenerator() {
  const [selectedTone, setSelectedTone] = useState<any>(null)
  const tones = [
    "Convincing",
    "Formal",
    "Professional",
    "Humorous",
    "Passionate"
  ]

  const handleToneChange = (event: any) => {

  }

  const handleSelecetedKeywords = (item: any) => {

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
            <TextFieldWithChips
              selectedTags={handleSelecetedKeywords}
              fullWidth
              variant="outlined"
              id="keywords"
              name="Keywords"
              placeholder="general ai, narrow ai"
              label="Keywords"
            />
          </FormControl>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: "right" }}>
        <Button variant="contained">Generate Results</Button>
      </CardActions>
    </Card>
  )
}
