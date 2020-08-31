import React from 'react'
import Welcome from './components/welcome'
import Slides from './components/slides'
import Vids from'./components/vids'
function home() {
    return (
        <div>
           
           <Welcome/>
           <Slides/>
            <Vids/>
        </div>
    )
}

export default home
