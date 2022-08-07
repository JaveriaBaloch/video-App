import { Link } from "react-router-dom"
import { users } from "./users"

const Navbar = () =>{
  const logout = () =>{
    localStorage.clear()
    window.location.href = "http://localhost:3000"
  }
    return(
<nav className="navbar navbar-expand-lg navbar-dark bg-black">
  <div className="container-fluid">
    <Link className="navbar-brand logo" to="/">Videos</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-2 ms-auto my-auto">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        {localStorage.getItem("username")!=null &&
        <li className="nav-item">
           <Link className="nav-link" to="/Profile">Profile</Link>
           </li>
          }
        <li className="nav-item">
          {localStorage.getItem("username")!=null &&
           <a className="nav-link"  onClick={logout}>LogOut</a>
          }
          {localStorage.getItem("username")==null &&
          <Link className="nav-link" to="/Login">Login</Link>
        }
        </li>
        
        </ul>
    </div>
  </div>
</nav>
    )
}
export default Navbar