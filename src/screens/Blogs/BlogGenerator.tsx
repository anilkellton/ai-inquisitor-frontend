import React, { useState,useEffect } from 'react'
import QueryService from '../../API/services/QueryService';

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
    try {
      event.preventDefault();
      const req = {
        query: query,
        tone:selectedTone,
        getImage:false
      };
      let res = await QueryService.generateQueryService(req);
      if (res.status === 200) {
        props.setData({response:res.data.textAnswer,query:query})
      } else {
        return console.error("something went wrong");
      }
    } catch (error) {
      console.log(error)
    }
  }
  const handleInputChange = (event:any) => {
    setQuery(event.target.value);
  };


  return (
    <div className='comments'>
    <div className="reply-form">
                <h4>BLOG GENERATOR</h4>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col form-group">
                    <select value={selectedTone} className="form-select" aria-label="Default select example"  onChange={(event) => setTone(event.target.value)}>
                    {tones.map((tone) => (
                       <option value={tone.value}>{tone.label}</option>
                    ))}
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col form-group">
                      <textarea name="comment" className="form-control" placeholder="Your Query.."  value={query} onChange={handleInputChange}></textarea>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">Generate Blog</button>
                </form>
              </div>
              </div>
  )
}