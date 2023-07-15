import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import * as AiIcons from 'react-icons/ai';
import { Table } from 'react-bootstrap'
const Equip = () => {
    const [mat, setMat] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [view, setView] = useState(false);
    const [neutre, setNeutre] = useState(false);
    const [add, setAdd] = useState(false);
    const [selectedMat, setSelectedMat] = useState({});
    const [edit, setEdit] = useState(false);
    const [newMat,setNewMat] = useState('');
    const [newQuant,setNewQuantity] = useState('');
    const handleSubmit = () => {
        Axios.post("/api/equip/add", { mat: mat, quantity: quantity });
        setView(true);
    }
    const handleEdit = ()=> {
        Axios.post("/api/equip/update",{id: selectedMat.id, mat: newMat, quantity: newQuant});
        setEdit(false);
    }
    const [equip, setEquip] = useState([{}]);
    useEffect(() => {
        Axios.get("/api/equip/fetch").then((data) => {
            setEquip(data.data);
        })
    }, [])
    return (
        <div className="dmt__dashboard-control">
            {!neutre && (

                <>
                    <h1>Créer et Editer les equipments:</h1>
                    <p>Ajouter un Equipment</p>
                    <AiIcons.AiOutlineAppstoreAdd className='table__icons table__icons-elt' onClick={() => {
                        setAdd(true);
                        setNeutre(true);
                    }} />
                </>
            )}
            {add && !view && (
                <div className='dmt__dashboard-control'>
                    <label>Materiel: </label>
                    <input type="text" onChange={(e) => {
                        setMat(e.target.value);
                    }} />
                    <label>Quantité: </label>
                    <input type="number" onChange={(e) => {
                        setQuantity(e.target.value);
                    }} />
                    <div className="dark__button">
                        <button onClick={handleSubmit}>Add</button>
                    </div>
                    <div className="dark__button">
                        <button onClick={() => { setAdd(false); setNeutre(false); }}>Revenir à la page des équipments</button>
                    </div>
                </div>
            )}
            {view && (
                <>
                    <h1>Vous avez ajouté un équipment</h1>
                    <div className="dark__button">
                        <button onClick={() => { setView(false) }}>Ajouter un autre equipment</button>
                    </div>
                    <div className="dark__button">
                        <button onClick={() => { setAdd(false); setNeutre(false); }}>Revenir à la page des équipments</button>
                    </div>
                </>
            )}
            {!add && (
                <div className="dashboard_table">
                    {!edit && (
                        <Table striped bordered hover variant="dark" style={{ width: "80%", overflow: 'scroll' }}>
                            <thead>
                                <tr>
                                    <th>Equipments</th>
                                    <th>Quantités</th>
                                    <th>Tools</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.from(equip).map((val, key) => {
                                    return (
                                        <tr key={key}>
                                            <th>{val.mat}</th>
                                            <th>{val.quantity}</th>
                                            <th className='table__icons'>
                                                <AiIcons.AiOutlineEdit className='table__icons-elt' onClick={async (e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    Axios.post("/api/equip/fetchmat", { id: val.id }).then((data) => {
                                                        setSelectedMat(data.data[0]);
                                                        setEdit(true);
                                                    })
                                                }} />
                                                <AiIcons.AiOutlineDelete className='table__icons-elt' onClick={() => {
                                                    Axios.post("https://api.digimytch.com/api/delete_cat", { id: val.id });
                                                }} /></th>
                                        </tr>
                                    )
                                })}
                            </tbody>

                        </Table>
                    )}
                    {edit && (
                        <div className='dmt__dashboard-control'>
                            <label>Materiel: </label>
                            <input type="text" placeholder={selectedMat.mat} onChange={(e) => {
                                setNewMat(e.target.value);
                            }} />
                            <label>Quantité: </label>
                            <input type="number" placeholder={selectedMat.quantity} onChange={(e) => {
                                setNewQuantity(e.target.value);
                            }} />
                            <div className="dark__button">
                                <button onClick={handleEdit}>Add</button>
                            </div>
                            <div className="dark__button">
                                <button onClick={() => { setAdd(false); setNeutre(false); setEdit(false);}}>Revenir à la page des équipments</button>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default Equip