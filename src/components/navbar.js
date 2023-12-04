import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../css/navbar.css'
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div>
<section className="navigation">
  <div className="nav-container">
    <div className="brand">
      <p className='p'>FitnessHub</p>
    </div>
    <nav>
      <div className="nav-mobile"><a id="nav-toggle" href="#"><span></span></a></div>
      <ul className="nav-list">
        <li><NavLink to = '/' className="active">Home</NavLink></li>
        <li><NavLink to= '/sign' >Sign In / UP</NavLink></li>
        <li><NavLink to= '/train' >Start Your Taining</NavLink></li>
        <li><form className="navbar-form navbar-left" action="/action_page.php">
    
      </form>
      </li>
      </ul>
     
    </nav>
  </div>
</section>


</div>

    )
}

export default Navbar

