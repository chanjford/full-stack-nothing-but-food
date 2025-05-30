import { Image, ImageKitProvider, buildSrc } from '@imagekit/react';
import { useState, useRef, useCallback } from 'react'


const GalleryImage = ({path, alt, className, w, h}) => {
     //this is apart of the placeholder img to create a blurred placeholder when loading

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

         <Image 
                        urlEndpoint={import.meta.env.VITE_URL_IK_ENDPOINT}
                        src={path}
                        alt={alt}
                        className={className}
                        transformation={[{ 
                            width: w,  
                            height: h,
                        }]}
                        loading="lazy" 
                        ref={imgRef}
                        style={showPlaceholder ? {          //this creates a blurred placeholder when loading
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
    )
}

export default GalleryImage