import React from 'react'
import {BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Home from './home';
import Navbar from './components/navbar';
import Sign from './sign';
import Train from './train';
import Footer from './components/footer'
import Kpu from './sport/kpu'
import Lunges from './sport/lunges'
import Plank from './sport/plank'
import Pushup from './sport/pushup'
import Situp from './sport/situp'
import Squat from './sport/squat'
function root() {
    return (
     


        
        <Router>
            <Navbar/>
            <Routes>
                <Route >
                <Route path="/" element={<Home />} />
                <Route path="/sign" element={<Sign />} />
                <Route path="/train" element={<Train />} />
                <Route path="/kpu" element={<Kpu />} />
                <Route path="/lunges" element={<Lunges />} />
                <Route path="/plank" element={<Plank />} />
                <Route path="/plank" element={<Plank />} />
                <Route path="/pushup" element={<Pushup />} />
                <Route path="/situp" element={<Situp />} />
                <Route path="/squat" element={<Squat />} />
                </Route>
            </Routes>
            <Footer/>
        </Router>

       


    )
}
export default root;
