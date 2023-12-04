import React from 'react'
import Welcome from './components/welcome'
import Slides from './components/slides'
import Vids from'./components/vids'
import { Route , Routes } from 'react-router-dom';
function home() {
    return (
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/" element={<Slides />} />
            <Route path="/" element={<Vids />} />

        </Routes>
    )
}

export default home
