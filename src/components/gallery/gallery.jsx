import './gallery.css'
import GalleryItem from '../galleryItem/galleryItem'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

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

const fetchPins = async () =>{
    const res = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/pins`)
    return res.data
}

const Gallery = () => {
    const { isPending, error, data} = useQuery({ 
        queryKey: ['pins'], 
        queryFn: fetchPins, 
    })

    if(error) return "An error has occurred: " + error
    if(isPending) return "Loading ... "

    

    return (

        <div className='gallery'>
            {data?.map(item=>(
                <GalleryItem key={item._id} item={item}/>
            ))}
        </div>
    )
}
export default Gallery