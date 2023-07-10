/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import styles from '@/styles/About.module.css'
import Image from 'next/image'
import mail from '../../assets/app.png'
import { UseTranslation, useTranslation } from 'next-i18next'
export default function index() {
  const {t} = useTranslation();
  return (
    <>
      <div className={styles.header}>
        <h2>{t('about.title')}</h2>
      </div>
      <div className={styles.body}>
        <div className={styles.body_word}>
          <h1>{t('about.word_title')}</h1>
          <p>{t('about.word_para1')}</p>
          <p>{t('about.word_para2')}</p>
          <p>{t('about.word_para3')}</p>
        </div>
        <div className={styles.body_gras}>
          <p>{t('about.gras')}</p>
        </div>
        <div className={styles.sepr}>

        </div>
        <div className={styles.body_phy}>
          <h2>{t('about.phil_title')}</h2>
          <p>{t('about.phil_para1')}</p>
          <p>{t('about.phil_para2')}</p>
          <p>{t('about.phil_para3')}</p>
          <p>{t('about.phil_para4')}</p>
          <p>{t('about.phil_para5')}</p>
          <p>{t('about.phil_para6')}</p>
          <p>{t('about.phil_para7')}</p>
        </div>
        <div className={styles.buttons}>
          <div className='button-filled'>
            <button>{t('about.button1')}</button>
          </div>
          <div className='dark__button'>
            <button>{t('about.button2')}</button>
          </div>
        </div>
        <div className={styles.questions}>
          <div className={styles.questions_left}>
            <h2>{t('about.quest')}</h2>*
            <a href="mailto:example@example.com">{t('about.email')}</a>
            <p>{t('about.fb')}</p>
          </div>
          <div className={styles.questions_right}>
            <Image src={mail} alt="Image"/>
          </div>
        </div>
      </div>
    </>
  )
}
