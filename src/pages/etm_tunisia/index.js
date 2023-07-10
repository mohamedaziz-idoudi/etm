/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import Image from 'next/image'
import cap from '../../assets/tunisia/one.jpeg'
import cap1 from '../../assets/tunisia/two.jpg'
import { UseTranslation, useTranslation } from 'react-i18next'
export default function index() {
    const {t} = useTranslation();
    return (
        <>
            <div className='fill_header'>
                <h1>{t('fil.tun')}</h1>
            </div>
            <div className='fill_container'>
                <p>{t('fil.tun_desc')}</p>
                <p>{t('fil.tun_list1')}</p>
                <p>{t('fil.tun_list2')}</p>
                <p>{t('fil.tun_list3')}</p>
                <p>{t('fil.tun_list4')}</p>
                <p>{t('fil.tun_list5')}</p>
                <p>{t('fil.tun_list6')}</p>
                <div className='row'>
                    <Image src={cap} alt='Image' />
                    <Image src={cap1} alt='Image' />
                </div>
            </div>
        </>
    )
}
