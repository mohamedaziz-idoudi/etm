import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { Image } from 'cloudinary-react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
const Blogs = () => {
    const { t } = useTranslation();
    const [postList, setPostList] = useState([]);
    useEffect(() => {
        Axios.get("/api/post/getblogs").then((data) => {
            setPostList(data.data);
        })
    }, [])
    const router = useRouter();
    return (
        <>
            <div className='blogs__header'>
                <h2>Blogs</h2>
            </div>
            <div className='dmt__blogs section__padding fade-in'>
                {Array.from(postList).map((val, key) => {
                    return (
                        <div className="dmt__blogs-item" key={key}>
                            <div className="blogs__container-post_caption">
                                <h4>{new Date(val.date).toDateString()}</h4>
                                <h2>{val.title}</h2>
                                <p dangerouslySetInnerHTML={{ __html: val.paragraph.length > 250 ? val.paragraph.substring(0, 250) + "..." : val.paragraph }} />
                                <button onClick={()=> {
                                    router.push(`/post/${val.id}`)
                                }}>{t('partners_button')}</button>
                            </div>
                            <Image
                                cloudName="dbx8tzoes"
                                alt="Image"
                                publicId={val.image}
                                id="cloud_image" />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Blogs
