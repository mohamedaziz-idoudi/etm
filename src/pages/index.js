import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useTranslation, Trans } from 'react-i18next';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import Axios from 'axios';
import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';
import blog_pic from '../assets/blog.jpg'
import React from 'react';
import tunisia from '../assets/tunisia.png'
import togo from '../assets/togo.png'
import burkina_faso from '../assets/burkina-faso.png'
import mixer from '../assets/mixer.png'
import building from '../assets/building.png'
import { Slider } from '@/components';

export default function Home() {
  const router = useRouter();
  const launchDate = new Date('2023-05-01T00:00:00Z');
  const { t, i18n } = useTranslation();
  const [blog, setBlog] = useState({})
  const [sliderWidth, setSliderWidth] = useState(550);
  useEffect(() => {
    Axios.get("/api/post/getblogs").then((response) => {
      setBlog(response.data[0]);
    })
    const handleResize = () => {


      if (window.innerWidth <= 800) {
        setSliderWidth(window.innerWidth - 100);
      } 

    };

    handleResize(); // Set initial width

    window.addEventListener('resize', handleResize)
  }, [])
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <div className={styles.header} >
          <h2>ETM Holding</h2>
          <p>{t('header')}</p>
          <div className='button-filled'>
            <button onClick={()=> {router.push('/about')}}>{t('learn')}</button>
          </div>
        </div>
        <div className={styles.subheader} >
          <p>{t('quote')}</p>
          <h5>Mohamed Traki - CEO ETM Holding</h5>
        </div>
        <div className={styles.last_container}>
          <div className={styles.last_container_header}>
            <h5>{t('last')}</h5>
          </div>
          <div className={styles.last__container_body} >
            <div className={styles.last__container_body}>
              <Image src={blog?.image} alt='blog_pic' width={sliderWidth} height={350} />
            </div>
            <div className={styles.last__container_body_right}>
              <h5>{new Date(blog?.date).toDateString()}</h5>
              <h3>{blog?.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: blog?.paragraph?.length > 250 ? blog?.paragraph.substring(0, 250) + "..." : blog?.paragraph }} />
              <div className='dark__button'>
                <button>{t('read')}</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.fil__container}>
          <div className={styles.fil__container_items}>
            <div className={styles.fil__container_item}>
              <Image src={tunisia} alt='Tunisia' />
              <h5>{t('sub.tunisia')}</h5>
            </div>
            <div className={styles.fil__container_item}>
              <Image src={burkina_faso} alt='burkina_faso' />
              <h5>{t('sub.bur')}</h5>
            </div>
            <div className={styles.fil__container_item}>
              <Image src={togo} alt='togo' />
              <h5>{t('sub.togo')}</h5>
            </div>
            <div className={styles.fil__container_item}>
              <Image src={mixer} alt='Image' />
              <h5>{t('sub.beton')}</h5>
            </div>
            <div className={styles.fil__container_item}>
              <Image src={building} alt='Image' />
              <h5>{t('sub.imm')}</h5>
            </div>
          </div>
          <div className='dark__button'>
            <button onClick={()=> {router.push('/filiales')}}>{t('sub.button')}</button>
          </div>
        </div>
        <Slider />
      </I18nextProvider>
    </>
  )
}
