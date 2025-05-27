import './gallery.css'
import GalleryItem from '../galleryItem/galleryItem'

//change the grid templet columns in gallery.css .gallery{} from 7 if you want less columns on desktop screens
// 3 seems to looks the best without being overwhelming, you'll have to find something to put on the right column
const items = [

    {
        id:1,
        media: "/pins/pin1.jpeg",
        width: 1260,
        height: 1000,
    },
     {
        id:2,
        media: "/pins/pin2.jpeg",
        width: 1260,
        height: 1400,
    },
     {
        id:3,
        media: "/pins/pin3.jpeg",
        width: 1260,
        height: 1400,
    },
     {
        id:4,
        media: "/pins/pin4.jpeg",
        width: 1260,
        height: 1000,
    },
    {
        id:5,
        media: "/pins/pin1.jpeg",
        width: 1260,
        height: 1000,
    },
     {
        id:6,
        media: "/pins/pin2.jpeg",
        width: 1260,
        height: 1400,
    },
     {
        id:7,
        media: "/pins/pin3.jpeg",
        width: 1260,
        height: 1400,
    },
     {
        id:8,
        media: "/pins/pin4.jpeg",
        width: 1260,
        height: 1000,
    },
    {
        id:9,
        media: "/pins/pin1.jpeg",
        width: 1260,
        height: 1000,
    },
     {
        id:10,
        media: "/pins/pin2.jpeg",
        width: 1260,
        height: 1400,
    },
     {
        id:11,
        media: "/pins/pin3.jpeg",
        width: 1260,
        height: 1400,
    },
     {
        id:12,
        media: "/pins/pin4.jpeg",
        width: 1260,
        height: 1000,
    },
    {
        id:13,
        media: "/pins/pin1.jpeg",
        width: 1260,
        height: 1000,
    },
     {
        id:14,
        media: "/pins/pin2.jpeg",
        width: 1260,
        height: 1400,
    },
     {
        id:15,
        media: "/pins/pin3.jpeg",
        width: 1260,
        height: 1400,
    },
     {
        id:16,
        media: "/pins/pin4.jpeg",
        width: 1260,
        height: 1000,
    },
]

const Gallery = () => {
    return (

        <div className='gallery'>
            {items.map(item=>(
                <GalleryItem key={item.id} item={item}/>
            ))}
        </div>
    )
}
export default Gallery