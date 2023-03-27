import React, { useState,useEffect } from 'react'
import QueryService from '../../API/services/QueryService';
import { InputTags } from 'react-bootstrap-tagsinput'
export default function BlogGenerator(props: any) {
  const [selectedTone, setTone] = useState('')
  const [query, setQuery] = useState('');
  const [tags, setTags] = useState<string[]>([])
  const [image, setImage] = useState<boolean>(false)
  const [loading,setLoading] = useState<boolean>(false);

  const tones = [
    { label: 'Select', value: '' },
    { label: 'Convincing', value: 'Convincing' },
    { label: 'Formal', value: 'Formal' },
    { label: 'Professional', value: 'Professional' },
    {label:'Humorous',value:'Humorous'},
    {label:'Passionate',value:'Passionate'}
  ];
  useEffect(()=>{
    console.log(image,">>>>>>")

  },[image])

  const handleSubmit = async(event: any) => {
    try {
      event.preventDefault();
      const req = {
        query: query,
        tone:selectedTone,
        getImage:image,
        tags:tags
      };
      setLoading(true);
      let res = await QueryService.generateQueryService(req);
      if (res.status === 200) {
        setLoading(false);
        props.setData({response:res.data.textAnswer,query:query,image:image?res.data.imageUrl:null})
      } else {
        setLoading(false);
        return console.error("something went wrong");
      }
    } catch (error) {
      setLoading(false);
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
                  <div className='row'>
                  <div className="col form-group form-check">&nbsp;&nbsp;
                  <label className="form-check-label">
                  Want Image ?
                  </label>
                  <input className="form-check-input" type="checkbox" onChange={(e)=> {setImage(e.target.checked)}} name="option1" checked={image}/>  
                  </div>
                  </div>
                  <div className={image?'row':'row hidden'}>
                  <div className="col form-group">
                  <InputTags placeholder='suggestive tags for image' values={tags} onTags={(value) => setTags(value.values)} />
                  </div>
                  </div>
                  <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-primary" disabled={loading}>Generate Blog <div className={loading?"spinner-border spinner-border-sm":"hidden"} role="status">
  <span className="sr-only"> Loading...</span></div></button>
  </div>
                </form>
              </div>
              </div>
  )
}