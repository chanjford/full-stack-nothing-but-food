import './galleryItem.css'
import {Link} from 'react-router'
import { useState, useRef, useCallback } from 'react'
import GalleryImage from '../image/galleryImage'

const GalleryItem = ({item}) =>{       
   

    const optimizedHeight = (372 * item.height)/item.width  // this creates the best height given the width we want

    return (
        <div className="galleryItem" style={{gridRowEnd:`span ${Math.ceil(item.height/100)}`}}> 
            {/* <img src={item.media} alt="" /> */}
         

            <GalleryImage path={item.media} alt="" w={372} h={optimizedHeight} />
           

            {/**Links to the image's page with all the details */}
            <Link to={`/bite/${item._id}`} className='overlay'></Link>
            
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