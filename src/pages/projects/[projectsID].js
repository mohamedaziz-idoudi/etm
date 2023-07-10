/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import Axios from 'axios'
import React, { useEffect, useState } from 'react';
import { Image } from 'cloudinary-react';
export default function Projects() {
  const [post, setPost] = useState({});
  const [images, setImages] = useState([]);
  const router = useRouter();
  const { projectsID } = router.query;
  const [sliderWidth, setSliderWidth] = useState(896);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const postDataResponse = await Axios.post("/api/projects/getPost", { id: projectsID });
        const postData = postDataResponse.data[0];
        setPost(postData);
        const imagesResponse = await Axios.post("/api/projects/getimages", { title: postData?.title });
        setImages(imagesResponse.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (projectsID) {
      fetchData();
    }

    const handleResize = () => {
      if (window.innerWidth <= 700) {
        setSliderWidth(window.innerWidth - 20);
      } else {
        setSliderWidth(window.innerWidth - 350);
      }
    };

    handleResize(); // Set initial width
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [projectsID]);

  return (
    <>
      <div className='fill_header'>
        <h1>{post?.title}</h1>
      </div>
      <div className="dmt__blog-post">
        <div className='dmt__training-container'>
          <div className="dmt__training-container_header section__padding">
            <h5>{post?.filiale}</h5>
            <Image
              cloudName="djzf1gnjd"
              alt='Image'
              width={sliderWidth}
              height="504"
              publicId={post?.image}
              id="cloud_image" />

            <div className="dmt__training-dark_decoration"></div>
          </div>
          <div className="dmt__training-container_contentt">
            <p dangerouslySetInnerHTML={{ __html: post?.paragraph }} />
          </div>
          <div className="row_projects">
            {Array.from(images).map((val, key) => {
              return (


                <Image
                  key={key}
                  cloudName="djzf1gnjd"
                  alt="Image"
                  publicId={val.link}
                  id="cloud_image" />


              )
            })}
          </div>
        </div >
      </div>
    </>
  );
}
