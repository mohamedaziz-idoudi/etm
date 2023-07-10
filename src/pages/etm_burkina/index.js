/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import Image from 'next/image'
import cap from '../../assets/burkina/two.jpg'
import cap1 from '../../assets/burkina/onee.jpg'
import { useTranslation } from 'react-i18next'
export default function index() {
    const {t} = useTranslation();
    return (
        <>
            <div className='fill_header'>
                <h1>{t('fil.burk')}</h1>
            </div>
            <div className='fill_container'>
                <p>{t('fil.tun_desc')}</p>
                <p>{t('fil.tun_list1')}</p>
                <p>{t('fil.tun_list2')}</p>
                <p>{t('fil.burk_list')}</p>
                <p>{t('fil.tun_list6')}</p>
                <div className='row'>
                    <Image src={cap1} alt='Image' />
                    <Image src={cap} alt='Image' />
                </div>
            </div>
        </>
    )
}
