import {useParams} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import {useEffect,useState} from 'react'
import { videos } from './videos'
import { comments } from './comments'
import {Link} from 'react-router-dom'

const Related = (category) =>{
    console.log("hi")
    const {id} = useParams()
   return( videos.map(item=>{
        if(item.vid!=id && category.category==item.category){
            const videoUrl= `/overview/${item.vid}`
         return( 
            <Link className="col-12 mx-auto my-2" to={videoUrl}>
                    <video className='rounded shadow-lg my-2 w-100' src={item.url}></video>
            </Link>
         )
        }
    })
   )
}
const CommentsList = (c) =>{
    console.log(c.c)
    return (comments.map(comment=>{
      if(c.c==comment.vid){
        console.log(comment)
        return (
           <div className='row my-5 hide'>
                <img className='c-img' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"/>
                <div className='col-7 my-auto'>
                    <h5>{comment.name}</h5>
                    <small>{comment.comment}</small>
                </div>
           </div>
        )
      }
    }))
}
function OverView(){
    const [comments,setComments] = useState('hide comments')
    const [name,setName] = useState('')
    const [comment,setComment] = useState('')
    const [error,setError] = useState('')
    const [show,setShow] = useState("btn btn-danger ms-auto")
    const {id} = useParams()
    const [video,setVideo] = useState({})
    const [category,setCategory] = useState('')
    const [userImg,setUserImg] = useState('')
    const [userName,setUserName] = useState('')
    useEffect(()=>{
        videos.map(e=>{
            if(e.vid==id){
               setVideo(e)
               setCategory(e.category)
               setUserImg(e.userImage)
               setUserName(e.username)
            }
         })
        
    })

//    }
    const submit = () =>{
        if(name==""||comment==""){
            setError("error")
        }
        else{
            setError("success")
        }
        console.log(name)
    }
    const showComments = () =>{
        if(comments==="display comments"){
          setComments("hide comments")
          setShow("btn btn-danger ms-auto")
          document.querySelector('.hide').style.display = "block"
        }
        else{
            setComments("display comments")
            setShow("btn btn-success ms-auto")
            document.querySelector('.hide').style.display = "none"
        }
    }
    return(
        <div className='container my-5'>
            <div className='row'>
                <div className='col-lg-8 col-md-10 mx-auto col-sm-12'>
                    <video src={video.url} controls className='w-100 rounded shadow-sm'>
                    
                    </video>
                    <div className='my-2'>
                        upload by:{userName} <img src={userImg} className="user-img"></img>
                    </div>
                    <div className='card'>
                    <div className='card-header d-flex align-items-center'>Leave a Comment:
                       
                       </div>
                       <div className='card-body'>
                        {error=="error" &&
                        <div className='alert alert-danger'>All the flieds are required</div>
                        }
                        {error=="success" &&
                        <div className='alert alert-success'>Your comment is submitted!</div>
                        }
                        <input className='form-control my-2' placeholder='name' onChange={e=>setName(e.target.value)}/>
                        <textarea className='form-control my-2' placeholder='comment'  onChange={e=>setComment(e.target.value)}></textarea>
                        <button className='btn btn-success' onClick={submit}>Sumbit</button>
                       </div>
                        </div>
                    <div className='my-2 card align-center'>
                        <div className='card-header d-flex align-items-center'>Comments <button className={show} onClick={showComments}>{comments}</button>
                       
                        </div>
                        
                        <div className='hide'>
                        <CommentsList c={id}/>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-10 col-sm-12 mx-auto'>
                    <h3 className='p-2 bg-black text-white text-center rounded'>relate videos</h3>
                    <div className='container'>
                        <div className='row'>
                            <Related category={category}/>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OverView