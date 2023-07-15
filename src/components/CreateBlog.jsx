import React, { useState, useRef, useEffect } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import Axios from 'axios';
import axios from 'axios';
import { useQuill } from "react-quilljs";
import dynamic from 'next/dynamic';
const CreateBlog = () => {
    const { quill, quillRef } = useQuill();
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
            if (quill) {
                axios.post("/api/post/blog", { title: title, paragraph: quill.root.innerHTML, image: response.data.secure_url })
            }

        })
    }
    return (
        <div className="dmt__dashboard-control">
            {!blogs && (
                <>
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
                        <div style={{ width: "600px", height: "600px" }}>
                            <div ref={quillRef} />
                        </div>
                    </div>
                    <div className='button-filled'>
                        <button onClick={uploadImage}>Submit</button>
                    </div>
                </>
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