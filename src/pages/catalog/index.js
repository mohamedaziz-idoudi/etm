/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import styles from '@/styles/Catalog.module.css'
import { Image } from 'cloudinary-react'
import { UseTranslation, useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
export default function index() {
  const {t} = useTranslation();
  const [project, setProjects] = useState([{}]);
  useEffect(() => {
    Axios.get("/api/projects/getprojects").then((response) => {
      setProjects(response.data);
    })
  }, [])
  const router = useRouter()
  return (
    <>
      <div className={styles.header}>
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
                      <button onClick={()=> {
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

    </>
  )
}
