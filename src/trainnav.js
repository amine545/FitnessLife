import React, { useState, useEffect } from 'react';
import './css/train.css'
import Modal from './modal'

function Trainnav() {
  const complement = [
    {Name:'Lunges' ,  path:'lunges',image:'./res1/lunges.jpg'},
    {Name:'Plank ' ,  path:'plank',image:'./res1/plank.jpg'},
    {Name:'Push-up' , path:'pushup',image:'./res1/pushup.jpg'},
    {Name:'Sit-up' , path:'situp',image:'./res1/sit-up.jpg'},
    {Name:'Squat'  , path:'squat',image:'./res1/squat.jpg'},
    {Name:'Knee Push-up' , path:'kpu',image:'./res1/kneepushup.jpg'},
]
  const [search, setSearch] = useState("");
  const [filteredEx, setFilteredEx] = useState([]);

useEffect(() => {
const result = 
    complement.filter((ex) =>
      ex.Name.toLowerCase().includes(search.toLowerCase().trim())
    )
  ;
  setFilteredEx(result)
}
,[search]
); 
    return (
      <div>
      <input className='inp' value = {search} placeholder=" Search  Your Exercices .."  onChange={(e) => setSearch(e.target.value)}/>
      <div className='grid-container'>
     
      {filteredEx.map (comp =>  (
             <Modal name={comp.Name}  path={comp.path}  image={comp.image}/>
    )         
          )  }
</div>
        </div>
    )
}

export default Trainnav