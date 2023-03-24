// @ts-nocheck
import React, {useEffect,useState,useRef } from 'react'
// import { EditorState } from 'draft-js';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Editor } from '@tinymce/tinymce-react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Editable, withReact, useSlate, Slate } from 'slate-react'
import { useNavigate } from 'react-router-dom';
import {
  Editor,
  Transforms,
  createEditor,
  Descendant,
  Element as SlateElement,
} from 'slate'
import { withHistory } from 'slate-history'
import QueryService from '../../API/services/QueryService';
import { Button, Card, Icon, Toolbar } from '@mui/material'

// import { Button, Icon, Toolbar } from '../components'

const BlogEditor = (props) => {
  const {data} = props
  const [content, setContent] = useState('');
  const history = useNavigate();
  const editorRef = useRef(null);
  const save = async(event: any)=>{
    try {
      event.preventDefault();
      const req = {
        query: props.data.query?props.data.query:'',
        content: editorRef.current.getContent()
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
    if (props.data.response) {
      editorRef.current.setContent(props.data.response[0]);
    }
  }, [props.data])
  return (
    <div className='comments'>
    <div className="reply-form">
    <div className='col form-group'>
      <Editor
         onInit={(evt, editor) => editorRef.current = editor}
         initialValue="<p>Please use generator to create blog content .</p>"
         init={{
           height: 500,
           menubar: false,
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount'
           ],
           toolbar: 'undo redo | formatselect | ' +
           'bold italic backcolor | alignleft aligncenter ' +
           'alignright alignjustify | bullist numlist outdent indent | ' +
           'removeformat | help',
           content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
         }}
         value={content}
         onEditorStateChange={setContent}
       />
       </div>
      <div className='row'>
        <div className='col form-group'>
      <button type="button"onClick={save} className="btn btn-primary">Save</button>
      </div>
      </div>
    </div>
    </div>
  )
}


export default BlogEditor