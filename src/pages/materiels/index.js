import React from 'react'
import Image from 'next/image'
import materiel1 from '../../assets/materiel1.jpg'
import materiel2 from '../../assets/materiel2.jpg'
import materiel3 from '../../assets/materiel3.jpg'
import * as AiIcons from 'react-icons/ai';
import { Table } from 'react-bootstrap'
export default function index() {
    return (
        <>
            <div className='fill_header'>
                <h1>Material Park</h1>
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
            <div className="dashboard__content dashboard_table">
                <Table striped bordered hover variant="dark" style={{ width: '80vw' }}>
                    <thead>
                        <tr>
                            <th>Materials</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>CAMIONS & TRACTEURS ROUTIERS</th>
                            <th>54</th>
                        </tr>
                        <tr>
                            <th>AUTOBETONNIERE</th>
                            <th>4</th>
                        </tr>
                        <tr>
                            <th>BRISE ROCHE</th>
                            <th>4</th>
                        </tr>
                        <tr>
                            <th>BULLDOZER</th>
                            <th>3</th>
                        </tr>
                        <tr>
                            <th>CHARGEUSE</th>
                            <th>12</th>
                        </tr>
                        <tr>
                            <th>COMPACTEUR</th>
                            <th>8</th>
                        </tr>
                        <tr>
                            <th>NIVELEUSE</th>
                            <th>10</th>
                        </tr>
                        <tr>
                            <th>PELLE</th>
                            <th>8</th>
                        </tr>
                        <tr>
                            <th>PORTE CHAR</th>
                            <th>3</th>
                        </tr>
                        <tr>
                            <th>REPANDEUSE</th>
                            <th>1</th>
                        </tr>
                        <tr>
                            <th>TRACTOPELLE</th>
                            <th>3</th>
                        </tr>
                        <tr>
                            <th>FINISSEUR</th>
                            <th>1</th>
                        </tr>
                        <tr>
                            <th>CYLINDRE</th>
                            <th>15</th>
                        </tr>
                        <tr>
                            <th>UNITE DE CONCASAGE</th>
                            <th>3</th>
                        </tr>
                        <tr>
                            <th>FOREUSE</th>
                            <th>1</th>
                        </tr>
                        <tr>
                            <th>GRAVILONNEUSE</th>
                            <th>1</th>
                        </tr>
                        <tr>
                            <th>CRIBLE</th>
                            <th>1</th>
                        </tr>
                        <tr>
                            <th>CENTRALE D ENROBE</th>
                            <th>1</th>
                        </tr>
                        <tr>
                            <th>CENTRALE A BETON</th>
                            <th>1</th>
                        </tr>
                    </tbody>
                    
                </Table>
            </div>

        </>
    )
}
