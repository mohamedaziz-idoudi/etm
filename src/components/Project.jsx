import React, { useState, useRef, useEffect } from 'react'
import * as AiIcons from 'react-icons/ai';
import { Editor } from '@tinymce/tinymce-react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useQuill } from "react-quilljs";
import { Table } from 'react-bootstrap'
const Project = () => {
    const { quill, quillRef } = useQuill();
    const { q, qr } = useQuill();
    const router = useRouter();
    const [add, setAdd] = useState(false);
    const [edit, setEdit] = useState(false);
    const [neutre, setNeutre] = useState(false);
    const [listProjects, setListProjects] = useState([{}]);
    const [name, setName] = useState('')
    const [filiale, setFiliale] = useState('')
    const [image, setImage] = useState();
    const [projects, setProjects] = useState([{}]);
    const [content, setContent] = useState('');
    const editorRef = useRef(null);
    const [images, setImages] = useState([]);
    const [del, setDel] = useState(false);
    const [selectedId, setSelectedId] = useState(0);
    const [selectedProj, setSelectedProj] = useState({})
    const [newTitle, setNewTitle] = useState('');
    const [newPara, setNewPara] = useState('');
    const fetchData = () => {
        axios.get("/api/projects/getprojects").then((data) => {
            setProjects(data.data);
        })

    }
    useEffect(() => {
        fetchData();
    }, [])
    const setInitialContent = ()=> {
        const initialContent = selectedProj.paragraph;
        const delta = quill.clipboard.convert(initialContent);
        quill.setContents(delta);
    }
    useEffect(() => {
        if (edit && quill) {
            setInitialContent();
            quill.on('ready', setInitialContent);
        }
    }, [edit, quill])
    const handleUpdate = ()=> {
        axios.post("/api/projects/update",{id: selectedProj.id, title: newTitle, paragraph: quill.root.innerHTML }).then(()=> {
            setEdit(false);
            fetchData();
        })
    }
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
                    axios.post("/api/projects/add", { title: name, paragraph: quill.root.innerHTML, image: response.data.secure_url, images: links, filiale: filiale }).then(() => {
                        setAdd(false);
                        setNeutre(false);
                        setEdit(false);
                        setDel(false);
                        fetchData();
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
                    <div className="dashboard_table">
                        {!edit && !del && (
                            <Table striped bordered hover variant="dark" style={{ width: "80%", overflow: 'scroll' }}>
                                <thead>
                                    <tr>
                                        <th>Project</th>
                                        <th>Filiale</th>
                                        <th>Tools</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.from(projects).map((val, key) => {
                                        return (
                                            <tr key={key}>
                                                <th>{val.title}</th>
                                                <th>{val.filiale}</th>
                                                <th className='table__icons'>
                                                    <AiIcons.AiOutlineEdit className='table__icons-elt' onClick={async (e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        axios.post("/api/projects/getPost", { id: val.id }).then((data) => {
                                                            setSelectedProj(data.data[0]);
                                                            setEdit(true);
                                                        })
                                                    }} />
                                                    <AiIcons.AiOutlineDelete className='table__icons-elt' onClick={() => {
                                                        setDel(true);
                                                        setSelectedId(val.id);
                                                    }} /></th>
                                            </tr>
                                        )
                                    })}
                                </tbody>

                            </Table>
                        )}
                        {del && (
                            <div className='delete_message'>
                                <h2>Êtes-vous sûrs de supprimer ce Projet?</h2>
                                <div className='buttons'>
                                    <div className='dark_button'>
                                        <button onClick={() => {
                                            axios.post("/api/projects/delete", { id: selectedId })
                                            setDel(false);
                                            fetchData();
                                        }}>Oui</button>
                                        <button onClick={() => { setDel(false); }}>Non</button>
                                    </div>
                                </div>
                            </div>
                        )}
                        {edit && (
                            <div className='dmt__dashboard-control'>
                                <label>Materiel: </label>
                                <input type="text" placeholder={selectedProj.title} onChange={(e) => {
                                    setNewTitle(e.target.value);
                                }} />
                                <label>Description du Projet:</label>
                                <div style={{ width: "600px", height: "300px", overflow: "scroll" }}>
                                    <div ref={quillRef} />
                                </div>
                                <div className="dark__button">
                                    <button onClick={handleUpdate}>Mettre à jour</button>
                                </div>
                                <div className="dark__button">
                                    <button onClick={() => { setAdd(false); setNeutre(false); setEdit(false); }}>Revenir à la page des équipments</button>
                                </div>
                            </div>
                        )}
                    </div>
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