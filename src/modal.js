import React from 'react'
import './css/train.css'
import {Link} from 'react-router-dom'
function Modal(props) {
    
    return (
<div>
                <div className="grid-item">
      
      <img className='images' src={props.image}/>
<Link to= {props.path} ><p className='ss'>{props.name}</p></Link>

                    </div>
                    </div>
    )
}

export default Modal
