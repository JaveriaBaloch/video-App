import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import { videos } from './videos'
function Videos(video){
    const videoUrl= `/overview/${video.video.vid}`
    return(
               <Link className="card card-body col-lg-3 col-md-5 col-sm-8 mx-1 my-2" to={videoUrl}>
                     <video className='card-img' src={video.video.url}/>
               </Link>
            )
         
}
function HomePage (){
    return(
        <div className="container">
        <div className="row my-5 gx-1">
        {videos.map(e=><Videos video={e}/>)}
        </div>
    </div>
    )
}
export default HomePage