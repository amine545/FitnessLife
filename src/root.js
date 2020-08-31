import React from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
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
        <div>
        <Router>
        <div>
<Navbar/>

        <Switch>
          <div >
                            <Route path="/" exact component={Home}/>
                            <Route path="/sign" component={Sign}/>
                            <Route path="/train" component={Train}/>
    <Route path="/kpu" component={Kpu}/> 
    <Route path="/lunges" component={Lunges}/> 
    <Route path="/plank" component={Plank}/> 
    <Route path="/pushup" component={Pushup}/> 
    <Route path="/situp" component={Situp}/> 
    <Route path="/squat" component={Squat}/>
    </div>
        </Switch>
        <Footer/>
        </div>

        </Router>

        </div>
    )
}
export default root;