import GalleryImage from '../image/galleryImage'
import UserButton from '../userButton/userButton'
import { Image, ImageKitProvider, buildSrc } from '@imagekit/react';
import './topBar.css'

const TopBar = () => {
    return (
        <div className='topBar'>
        {/* SEARCH */}
        <div className='search'>
            {/* supposed to use the GalleryImage component here (and all ofther img tags) but it makes the icon entirely too small and not sure how to resolve that just yet timestamp 1:07:00 */}
            <img src="/general/search.svg" alt="" /> 
            
            <input type="text" placeholder='Search' />
        </div>
          {/* USER */}
          <UserButton/>

        </div>
       
       
    )
}
export default TopBar