import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../css/navbar.css'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
<section class="navigation">
  <div class="nav-container">
    <div class="brand">
      <p className='p'>FitnessHub</p>
    </div>
    <nav>
      <div class="nav-mobile"><a id="nav-toggle" href="#"><span></span></a></div>
      <ul class="nav-list">
      <li><Link to = '/' class="active">Home</Link></li>
    <li><Link to= '/sign' >Sign In / UP</Link></li>
    <li><Link to= '/train' >Start Your Taining</Link></li>
    <li><form class="navbar-form navbar-left" action="/action_page.php">
    
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

