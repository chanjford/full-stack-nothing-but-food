import './galleryItem.css'
import {Link} from 'react-router'
import { Image, ImageKitProvider, buildSrc } from '@imagekit/react';
import { useState, useRef, useCallback } from 'react'

const GalleryItem = ({item}) =>{

    const [showPlaceholder, setShowPlaceholder] = useState(true);

    const hidePlaceholder = () => setShowPlaceholder(false);

    const imgRef = useCallback((img) => {
        if (!img) return; // unmount

        if (img.complete) {
        hidePlaceholder();
        return;
        }
    }, []);

    return (
        <div className="galleryItem" style={{gridRowEnd:`span ${Math.ceil(item.height/100)}`}}> 
            {/* <img src={item.media} alt="" /> */}
            <Image 
                urlEndpoint={import.meta.env.VITE_URL_IK_ENDPOINT}
                src={item.media}
                transformation={[{ width: 200, height: 200 }]}
                loading="lazy" 
                ref={imgRef}
                style={showPlaceholder ? {
                    backgroundImage: `url(${buildSrc({
                    urlEndpoint: "https://ik.imagekit.io/ikmedia",
                    src: "/default-image.jpg",
                    transformation: [
                        // {}, // Any other transformation you want to apply to the placeholder image
                        {
                        quality: 20,
                        blur: 90,
                        }
                    ]
                    })})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                } : {}}

            />
           

            {/**Links to the image's page with all the details */}
            <Link to={`/bite/${item.id}`} className='overlay'></Link>
            
            {/* 
            
            1, Can remove the overlay above and instead maybe increase the image size a bit like a expansion when hovered.
            2, Also try all the icons at bottom of the image on hover or translucent then darker when hovered 
            */}
            <button className="saveButton">Save</button>
            <div className="overlayIcons">
                <button>
                    <img src="/general/share.svg" alt="" />
                </button>
                <button>
                    <img src="/general/more.svg" alt="" />
                </button>
            </div>
        </div>
    )
}

export default GalleryItem