/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import materiel1 from '../../assets/materiel1.jpg'
import materiel2 from '../../assets/materiel2.jpg'
import materiel3 from '../../assets/materiel3.jpg'
import Axios from 'axios';
import * as AiIcons from 'react-icons/ai';
import { Table } from 'react-bootstrap'
export default function index() {
    const [equip,setEquip] = useState([{}]);
    useEffect(()=> {
        Axios.get("/api/equip/fetch").then((data)=> {
            setEquip(data.data);
        })
    },[])
    return (
        <>
            <div className='fill_header'>
                <h1>Equipments</h1>
            </div>
            <div className='materiel_container'>
                <div className="section-header">
                    <h2 className="vtitle">Liste des Equipments</h2>
                </div>
                <div className='materiel__container-top'>
                    <Image src={materiel3} alt='Image' id='image1' />
                    <Image src={materiel2} alt='Image' id='image2' />
                </div>
                <div>
                    <Image src={materiel1} alt='Image' id='image3' />
                </div>
            </div>
            <div className="dashboard_table">
                <Table striped bordered hover variant="dark" style={{ width: "80%", overflow: 'scroll' }}>
                    <thead>
                        <tr>
                            <th>Equipments</th>
                            <th>Quantités</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from(equip).map((val,key)=> {
                            return(
                                <tr key={key}>
                                    <th>{val.mat}</th>
                                    <th>{val.quantity}</th>
                                </tr>
                            )
                        })}
                    </tbody>
                    
                </Table>
            </div>

        </>
    )
}
