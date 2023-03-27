import React, {useEffect,useState,useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { useNavigate } from 'react-router-dom';
import {BlogEditorProps} from './interfaces'
import QueryService from '../../API/services/QueryService';
const BlogEditor = (props:BlogEditorProps) => {
  const {data} = props
  const [content, setContent] = useState('');
  const [query,setQuery] = useState<string|undefined>('');
  const history = useNavigate();
  const editorRef = useRef<any>(null);
  useEffect(() => {
    setQuery(data.query);
  }, [data.query]);
  const save = async(event: React.MouseEvent<HTMLButtonElement>)=>{
    try {
      event.preventDefault();
      const req = {
        query: query,
        content: content,
        image:data.image
      };
      let res = await QueryService.saveResponseService(req);
      if (res.status === 200) {
        history('/')
      } else {
        return console.error("something went wrong");
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    if (props.data.response.length>0) {
      let data = props.data.response[0].split('\n\n').map((str:string) => `<p>${str}</p>`).join("");
      if(props.data.image){
        const imageUrl = props.data.image
        const imageHtml = `<img src="${imageUrl}" alt="Example Image"/>`;
        data = `${imageHtml}${data}`
        // editorRef?.current?.editor.insertContent(imageHtml)
      }
      editorRef?.current?.setContent(data);
    }
  }, [props.data])
  return (
    <div className='comments'>
    <div className="reply-form">
    <div className="col form-group">
      <input name="query" className="form-control" placeholder='Blog Title..'  value={query} onInput={(e:any)=>setQuery(e.target.value)}/>
    </div>
    <div className='col form-group'>
      <Editor
      apiKey='6pzebeby85ypdasbi6macamk7d7uhmwa6y5gw5grtg66zjas'
         onInit={(evt, editor) => editorRef.current = editor}
         initialValue="<p>Please use generator to create blog content </p>"
         init={{
           height: 500,
           menubar: false,
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help'
           ],
           toolbar: 'undo redo | formatselect | ' +
           'bold italic backcolor | alignleft aligncenter ' +
           'alignright alignjustify | bullist numlist outdent indent | ' +
           'removeformat | help',
           content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
         }}
         value={content}
         onEditorChange={setContent}
       />
       </div>
      <div className='row'>
        <div className='col form-group'>
      <button type="button" onClick={save} className="btn btn-primary">Save</button>
      </div>
      </div>
    </div>
    </div>
  )
}


export default BlogEditor