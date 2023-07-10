import React, { useState, useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import Axios from 'axios';
import axios from 'axios';
import dynamic from 'next/dynamic';
const CreateBlog = () => {

    const editorRef = useRef(null);
    const [text, setText] = useState('');
    const [title, setTitle] = useState("");
    const [video, setVideo] = useState("");
    const [image, setImage] = useState();
    const [vAfter, setVafter] = useState(false);
    const [blogs, setBlogs] = useState(false);
    const [content, setContent] = useState('');
    const uploadImage = (e) => {
        setBlogs(true);
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "etmholding");

        Axios.post("https://api.cloudinary.com/v1_1/djzf1gnjd/image/upload", formData).then(async (response) => {
            console.log(response);
            await e.preventDefault();
            await e.stopPropagation();
            setVafter(true);
            if(content.level) {
                axios.post("/api/post/blog", { title: title, paragraph: content.level.content, image: response.data.secure_url });
            }
            
        })
    }
    return (
        <div className="dmt__dashboard-control">
            {!blogs && (
                <div className="dmt__dashboard-control">
                    <label>Insert an image</label>
                    <input type="file" name='file' onChange={(e) => {
                        setImage(e.target.files[0]);
                    }} disabled={blogs} />
                    <label >Insert link to your video (Optional)</label>
                    <input type="link" onChange={(e) => {
                        setVideo(e.target.value);
                    }} disabled={blogs} />
                    <label>Title: </label>
                    <input type="text" onChange={(e) => {
                        setTitle(e.target.value);
                    }} disabled={blogs} />
                    <label>BLOG: </label>
                    <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        initialValue=""
                        onChange={setContent}
                        init={{
                            height: 500,
                            apiKey: 'iq8au7ol5ckuwydc3h6r47g97ipdma9gvr19332oa4zfcw3p',
                            menubar: false,
                            plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss',
                            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                    />
                    <div className='button-filled'>
                        <button onClick={uploadImage}>Submit</button>
                    </div>
                </div>
            )}
            {vAfter && (
                <div className="dmt__dashboard-content">
                    <h1>You have submitted the blog successfuly! </h1>
                </div>
            )}
        </div>
    )
}

export default CreateBlog