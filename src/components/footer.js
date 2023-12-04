import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../css/footer.css'
function footer() {
    return (
        <div>
          
          <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className='p1'>Fitness Hub is a platform founded to help people achieve their health and fitness goals all in a relaxed, friendly and supportive atmosphere.</p>
            <p className='p1'>Whether the goal is to lose weight, get in shape or improve strength this platform provides it all by offering a variety of workout exercices which targets different body muscles and aims to improve strengh and flexibility.</p>
          </div>

          

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Contribute</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className='p2' >Copyright &copy; 2020 All Rights Reserved by</p>
            <p>Fitnesshub.com</p>
            
          </div>

     
        </div>
      </div>
</footer>



        </div>
    )
}

export default footer
