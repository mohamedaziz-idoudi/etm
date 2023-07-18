/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import styles from '@/styles/Catalog.module.css'
import { Image } from 'cloudinary-react'
import { UseTranslation, useTranslation } from 'react-i18next';
import commonEN from '../../../public/locales/en/common.json'
import commonFR from '../../../public/locales/fr/common.json'
import { useRouter } from 'next/router';
export default function index() {
  const { t, i18n } = useTranslation();


  const [project, setProjects] = useState([{}]);
  const [refArray, setRefArray] = useState([]);
  useEffect(() => {
    Axios.get("/api/projects/getprojects").then((response) => {
      setProjects(response.data);
    })
  }, [])
  useEffect(() => {
    const currentLanguage = i18n.language;
    const commonData = currentLanguage === 'fr' ? commonFR : commonEN;
    const refArray = commonData.ref;
    setRefArray(refArray);
  }, [i18n.language]);
  const router = useRouter()
  return (
    <>
      <div className={`${styles.header} fade-in`}>
        <h2>{t('catalog.header')}<br />{t('catalog.header-b')}</h2>
        <p>{t('catalog.subheader')}</p>
      </div>
      <section id="speakers" className="wow fadeInUp">
        <div className="container">
          <div className="section-header">
            <h2 className="targets">{t('catalog.title')}</h2>
          </div>
          <div className="row">
            {Array.from(project).map((val, key) => {
              return (
                <div className="col-lg-4 col-md-6" key={key}>
                  <div className="speaker">
                    <Image
                      cloudName="djzf1gnjd"
                      alt="Image"
                      publicId={val.image}
                      id="cloud_image" />
                    <div className="details">
                      <h3>
                        <a href="#" className="target_one">
                          <h5>{val.filiale}</h5>
                          <h4>{val.title}</h4>
                        </a>
                      </h3>
                      <div className='button-filled'>
                        <button onClick={() => {
                          router.push(`/projects/${val.id}`)
                        }}>{t('learn')}</button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <div className='references'>
        <div className="section-header">
          <h2 className="targets">{t('autre')}</h2>
        </div>
        <div className='ref_items'>
          {refArray.map((item, index) => (
            <div key={index} className='ref_item'>
              <h3>{t(item.title)}</h3>
              <p>{t(item.mo)}</p>
              <p>{t(item.year)}</p>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}
