import React, { useState, useRef } from 'react'
import * as AiIcons from 'react-icons/ai';
import { Editor } from '@tinymce/tinymce-react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useQuill } from "react-quilljs";
const Project = () => {
    const { quill, quillRef } = useQuill();
    const router = useRouter();
    const [add, setAdd] = useState(false);
    const [edit, setEdit] = useState(false);
    const [neutre, setNeutre] = useState(false);
    const [listProjects, setListProjects] = useState([{}]);
    const [name, setName] = useState('')
    const [filiale, setFiliale] = useState('')
    const [image, setImage] = useState();
    const [content, setContent] = useState('');
    const editorRef = useRef(null);
    const [images, setImages] = useState([]);
    const handleImageChange = (event) => {
        const files = Array.from(event.target.files);
        setImages(files);
    };
    const handleSubmit = async () => {
        try {
            const promises = images.map((image) => {
                const formData = new FormData();
                formData.append('file', image);
                formData.append('upload_preset', 'etmholding');
                return axios.post('https://api.cloudinary.com/v1_1/djzf1gnjd/image/upload', formData)
                    .then((response) => response.data.secure_url);
            });

            const links = await Promise.all(promises);
            const formData = new FormData();
            formData.append("file", image);
            formData.append("upload_preset", "etmholding");

            axios.post("https://api.cloudinary.com/v1_1/djzf1gnjd/image/upload", formData).then(async (response) => {
                console.log(response);
                if (quill) {
                    axios.post("/api/projects/add", { title: name, paragraph: quill.root.innerHTML, image: response.data.secure_url, images: links, filiale: filiale }).then(()=> {
                        router.push('/catalog');
                    });
                }

            })
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="dmt__dashboard-control">
            {!neutre && (
                <>
                    <h1>Créer et Editer les projets:</h1>
                    <p>Ajouter un Projet</p>
                    <AiIcons.AiOutlineAppstoreAdd className='table__icons table__icons-elt' onClick={() => {
                        setAdd(true);
                        setNeutre(true);
                    }} />
                </>
            )}
            {add && (
                <>
                    <div className="dmt__dashboard-control">
                        <label>Titre du projet:</label>
                        <input type="text" onChange={(e) => {
                            setName(e.target.value);
                        }} />
                        <label>Filiale du projet:</label>
                        <input type="text" onChange={(e) => {
                            setFiliale(e.target.value);
                        }} />
                        <label>Image de Couverture</label>
                        <input type="file" name='file' onChange={(e) => {
                            setImage(e.target.files[0]);
                        }} />
                        <label>Description du Projet:</label>
                        <div style={{ width: "600px", height: "300px", overflow: "scroll" }}>
                            <div ref={quillRef} />
                        </div>
                        <label>Upload Images</label>
                        <input type="file" multiple onChange={handleImageChange} />
                        <div className="dark__button">
                            <button onClick={handleSubmit}>Add</button>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Project