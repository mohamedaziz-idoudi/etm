import React, {useState, useEffect} from 'react'
import { UseTranslation, useTranslation } from 'react-i18next';
import SimpleImageSlider from "react-simple-image-slider";
import { useRouter } from 'next/router';
const Slider = () => {
    const router = useRouter()
    const images = [
        { url: "https://res.cloudinary.com/djzf1gnjd/image/upload/v1688415417/slider1_sepghr.jpg" },
        { url: "https://res.cloudinary.com/djzf1gnjd/image/upload/v1688415418/slider2_lwugvr.jpg" },
        { url: "https://res.cloudinary.com/djzf1gnjd/image/upload/v1688415417/slider3_kfs1su.jpg" },

    ];
    const [sliderWidth, setSliderWidth] = useState(896);
    useEffect(() => {
        const handleResize = () => {
          
            
            if (window.innerWidth <= 700) {
                setSliderWidth(window.innerWidth-20);
              } else {
                setSliderWidth(window.innerWidth-200);
              }
          
        };
    
        handleResize(); // Set initial width
    
        window.addEventListener('resize', handleResize);})
        const {t} = useTranslation();
    return (
        <div className='slider__container'>
            <SimpleImageSlider
                width={sliderWidth}
                height={504}
                images={images}
                showBullets={true}
                showNavs={true}
            />
            <div className="slider__caption">
                <h3>{t('slider.title')}</h3>
                <p>{t('slider.caption')}</p>
                <div className='dark__button'>
                    <button onClick={()=> {router.push('/catalog')}}>{t('slider.button')}</button>
                </div>
            </div>
        </div>
    )
}

export default Slider