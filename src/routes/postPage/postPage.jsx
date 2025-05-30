import './postPage.css'
import GalleryImage from '../../components/image/galleryImage'
import PostInteractions from '../../components/postInteractions/postInteractions'
import { Link } from 'react-router'
import Comments from '../../components/comments/comments'
import { Image } from '@imagekit/react'

const PostPage = () => {

    return (
        <div className="postPage">
             <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-back"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1" /></svg>
               
            <div className="postContainer">
                <div className="postImg">
                    <GalleryImage path='/pins/pin1.jpeg' alt="" w={736} />
                </div>
                <div className="postDetails">
                    <PostInteractions/>
                    <Link to="/john" className='postUser'>
                        <GalleryImage path="/general/noAvatar.png"/>
                        <span>John Doe</span>
                    </Link>
                    <Comments/>
                </div>
            </div>
        </div>
    )
}

export default PostPage