import {useEffect, useState} from 'react'
import {videos} from './videos'
import {Link} from 'react-router-dom'
function Uploads(){
    return (videos.map(video=>{
        if(video.username == localStorage.getItem("username")){
            const videoUrl= `/overview/${video.vid}`
           return(
            <Link className="mx-auto my-2 col-3" to={videoUrl}>
                <video src={video.url} className="col-12 shadow-lg rounded"></video>
                </Link>
           )
        }
    }))
}
function UserArea (){
    if(localStorage.getItem("username")!==null){
        return(
            <div className='container my-5'>
                <div className='row my-5'>
                    <img className='userImage' src={localStorage.getItem("pic")}/>
                    <div className='display-1 col-3 my-auto'>{localStorage.getItem("username")}</div>
                </div>
                <div className='row'>
                    <div className='card'>
                        <h1 className='card-header p-2'>
                            Your Uploads
                        </h1>

                        <div className='card-body row'>
                        <Uploads/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return(
            <div>404</div>
        )
    }
   
}
export default UserArea