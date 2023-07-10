import React, { useState, useRef } from 'react'
import * as AiIcons from 'react-icons/ai';
import { Editor } from '@tinymce/tinymce-react';
import Axios from 'axios';
const Filiales = () => {
    const [name, setName] = useState('');
    const [add, setAdd] = useState(false);
    const [edit, setEdit] = useState(false);
    const [neutre, setNeutre] = useState(false);
    const [filiale, setFiliale] = useState('')
    const [image, setImage] = useState();
    const [content, setContent] = useState('');
    const editorRef = useRef(null);
    const [images, setImages] = useState([]);
    const handleImageChange = (event) => {
        const files = Array.from(event.target.files);
        setImages(files);
    };
    return (
        <div className="dmt__dashboard-control">
            {!neutre && (
                <>
                    <h1>Créer et Editer les filiales:</h1>
                    <p>Ajouter une filiale</p>
                    <AiIcons.AiOutlineAppstoreAdd className='table__icons table__icons-elt' onClick={() => {
                        setAdd(true);
                        setNeutre(true);
                    }} />
                </>
            )}
            {add && (
                <>
                    <div className="dmt__dashboard-control">
                        <label>Titre du filiale:</label>
                        <input type="text" onChange={(e) => {
                            setName(e.target.value);
                        }} />
                        <label>Image de Couverture</label>
                        <input type="file" name='file' onChange={(e) => {
                            setImage(e.target.files[0]);
                        }} />
                        <label>Description du filiale:</label>
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
                        <label>Upload Images</label>
                        <input type="file" multiple onChange={handleImageChange} />
                        <div className="dark__button">
                            <button onClick={() => {
                                Axios.post("https://api.digimytch.com/api/addcat", { name: name }).then(() => {
                                    Axios.get("https://api.digimytch.com/api/getcats").then((data) => {
                                        setListCat(data.data);
                                    })
                                });
                                setAdd(false);
                                setNeutre(false);
                            }}>Add</button>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Filiales