/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import Image from 'next/image'
import cap from '../../assets/cap.jpg'
import cap1 from '../../assets/cap1.jpg'
import { useTranslation } from 'react-i18next'
export default function index() {
    const {t} = useTranslation();
    return (
        <>
            <div className='fill_header'>
                <h1>EXCELLENCE BETON DU CAP-BON</h1>
            </div>
            <div className='fill_container'>
                <p>{t('fil.ex')}</p>
                <div className='row'>
                    <Image src={cap1} alt='Image' />
                </div>
            </div>
        </>
    )
}
