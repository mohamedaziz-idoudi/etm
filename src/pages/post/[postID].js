/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router';
import Axios from 'axios'
import React, { useEffect, useState } from 'react';
import { Image } from 'cloudinary-react';
import { useTranslation } from 'react-i18next'
export default function Post() {
    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(true); // Add loading state
    const router = useRouter();
    const { t, i18n } = useTranslation();
    const [sliderWidth, setSliderWidth] = useState(896);
    let { postID } = router.query;
    const fetchBlogData = async () => {
        try {
            let blogEndpoint = "/api/post/getPost"; 
            const response = await Axios.post(blogEndpoint, { id: postID });
            setPost(response.data[0]);
            setLoading(false); // Set loading to false after data is fetched
        } catch (error) {
            console.error("Error fetching blog data:", error);
            setLoading(false); // Set loading to false in case of an error
        }
    };
    useEffect(() => {

        const handleResize = () => {


            if (window.innerWidth <= 700) {
                setSliderWidth(window.innerWidth - 20);
            } else {
                setSliderWidth(window.innerWidth - 200);
            }

        };

        handleResize(); // Set initial width

        window.addEventListener('resize', handleResize)
    }, [])
    useEffect(() => {
        if (postID) {
            fetchBlogData();
        }
    }, [postID, i18n.language]);
    if (loading) {
        return <div>Loading...</div>; // Render a loading state while data is being fetched
    }
    return (
        <>
            <div className='fill_header'>
                <h1>{post?.title}</h1>
            </div>
            <div className="dmt__blog-post">
                <div className='dmt__training-container'>
                    <div className="dmt__training-container_header section__padding">
                        <Image
                            cloudName="djzf1gnjd"
                            alt='Image'
                            width={sliderWidth}
                            height="504"
                            publicId={post?.image}
                            id="cloud_image" />
                        <h1>{post?.title}</h1>
                        <h5>{new Date(post?.date).toDateString()}</h5>
                        <div className="dmt__training-dark_decoration"></div>
                    </div>
                    <div className="dmt__training-container_contentt">
                        <p dangerouslySetInnerHTML={{ __html: post?.paragraph }} />
                    </div>
                </div >
            </div>
        </>
    );
}
