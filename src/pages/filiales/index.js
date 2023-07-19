/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import styles from '@/styles/filiales.module.css'
import Image from 'next/image'
import tunisia from '../../assets/tunisia.jpg'
import burkina from '../../assets/burkina.jpg'
import togo from '../../assets/togo.jpg'
import cap from '../../assets/fill.jpg'
import imm from '../../assets/imm1.jpg'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { UseTranslation, useTranslation } from 'react-i18next'
export default function index() {
    const router = useRouter();
    const {t} = useTranslation();
    return (
        <>
            <div className={styles.header}>
                <h2>{t('fil.title')}</h2>
            </div>
            <section id="hotels" className="section-with-bg wow fadeInUp">
                <div className="container">
                    <div className="section-header">
                        <h2 className="vtitle">{t('fil.title')}</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="hotel">
                                <div className="hotel-img">
                                    <Image src={tunisia} alt='Image' />
                                </div>
                                <h3>
                                    <a href="#" className="v1">
                                    {t('fil.tun')}
                                    </a>
                                </h3>
                                <div className='dark_button'>
                                    <button onClick={()=> {router.push("/etm_tunisia")}}>{t('learn')}</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="hotel">
                                <div className="hotel-img">
                                    <Image src={burkina} alt='Image' />
                                </div>
                                <h3>
                                    <a href="#" className="v1">
                                    {t('fil.burk')}
                                    </a>
                                </h3>
                                <div className='dark_button'>
                                <button onClick={()=> {router.push("/etm_burkina")}}>{t('learn')}</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="hotel">
                                <div className="hotel-img">
                                    <Image src={togo} alt='Image' />
                                </div>
                                <h3>
                                    <a href="#" className="v1">
                                    {t('fil.togo')}
                                    </a>
                                </h3>
                                <div className='dark_button'>
                                <button onClick={()=> {router.push("/etm_togo")}}>{t('learn')}</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="hotel">
                                <div className="hotel-img">
                                    <Image src={cap} alt='Image' />
                                </div>
                                <h3>
                                    <a href="#" className="v1">
                                        EXCELLENCE BETON DU CAP-BON
                                    </a>
                                </h3>
                                <div className='dark_button'>
                                <button onClick={()=> {router.push("/capbon")}}>{t('learn')}</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="hotel">
                                <div className="hotel-img">
                                    <Image src={imm} alt='Image' />
                                </div>
                                <h3>
                                    <a href="#" className="v1">
                                        ETM IMMOBILIERE
                                    </a>
                                </h3>
                                <div className='caption_button'>
                                    <div className='dark_button'>
                                    <button onClick={()=> {router.push("/etmimm")}}>{t('learn')}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
