import {users} from './users.js'
import {useState,useEffect} from 'react'
function Login (){
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')
    const [login,setLogin] = useState(false)
    useEffect(()=>{
            if(login== true){
                window.location.href = "http://localhost:3000/Profile"
            }
    })
    const submit = () =>{
        if(name==""||password==""){
            setError("error")
        }
        else{
            users.map(user=>{
                if(user.name===name && user.password === password){
                    localStorage.setItem("username",name)
                    localStorage.setItem("id",user.id)
                    localStorage.setItem("pic",user.userImage)
                    setLogin(true)
                }
            })
        }
    }
    if(localStorage.getItem("username")==null){
    return(
        
        <div className="container">
            <div className="row">
            <div className='card-body'>
                        {error=="error" &&
                        <div className='alert alert-danger'>Invalid Submission</div>
                        }
                <div className="col-lg-6 col-md-8 col-sm-10 mx-auto my-5">
                <div className="card">
                    <div className="card-header text-center">
                        Sign In
                    </div>
                    
                    <div className="card-body">
                    <input className='form-control my-2' placeholder='name' onChange={e=>setName(e.target.value)}/>
                        <textarea className='form-control my-2' placeholder='comment'  onChange={e=>setPassword(e.target.value)}></textarea>
                        <button className='btn btn-success' onClick={submit}>Sumbit</button>
                       
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    )
                    }else{
                        window.location.herf = "http://localhost:3000/Profile"
                    }
}
export default Login