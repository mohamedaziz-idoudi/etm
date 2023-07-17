/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router';
import Axios from 'axios'
import React, { useEffect, useState } from 'react';
import { Image } from 'cloudinary-react';
export default function Post() {
    const [post, setPost] = useState({});
    const router = useRouter();
    const { postID } = router.query;
    const postIdInt = Math.floor(Number(postID));
    const [sliderWidth, setSliderWidth] = useState(896);
    useEffect(() => {
        Axios.post("/api/post/getPost", { id: postIdInt }).then((data) => {
            setPost(data.data[0]);
            console.log(data)
        })
        
        const handleResize = () => {


            if (window.innerWidth <= 700) {
                setSliderWidth(window.innerWidth - 20);
            } else {
                setSliderWidth(window.innerWidth - 200);
            }

        };

        handleResize(); // Set initial width

        window.addEventListener('resize', handleResize)
    }, [postID])

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
