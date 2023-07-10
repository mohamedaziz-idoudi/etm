/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import Image from 'next/image'
import cap from '../../assets/imm2.jpg'
import cap1 from '../../assets/imm1.jpg'
import { useTranslation } from 'react-i18next'
export default function index() {
    const {t} = useTranslation();
    return (
        <>
            <div className='fill_header'>
                <h1>ETM Immobiliere</h1>
            </div>
            <div className='fill_container'>
                <p>{t('fil.imm')}</p>
                <div className='row'>
                    <Image src={cap1} alt='Image' />
                    <Image src={cap} alt='Image' />
                </div>
            </div>
        </>
    )
}
