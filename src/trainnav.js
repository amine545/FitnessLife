import React, { useState, useEffect } from 'react';
import './css/train.css';
import { Link } from 'react-router-dom';

const Modal = ({ name, image }) => (
  <div>
    <h3  className='ss'>{name}</h3>
    <img className="images" src={image} alt='' />
  </div>
);
function Trainnav() {

  const complement = [
    { Key:'z' , Name: 'Lunges', path: 'lunges', Image: './res1/lunges.jpg' },
    { Key:'y'  ,Name: 'Plank', path: 'plank', Image: './res1/plank.jpg' },
    { Key:'t'  ,Name: 'Push-up', path: 'pushup', Image: './res1/pushup.jpg' },
    { Key:'p'  ,Name: 'Sit-up', path: 'situp', Image: './res1/sit-up.jpg' },
    { Key:'m'  ,Name: 'Squat', path: 'squat', Image: './res1/squat.jpg' },
    { Key:'n'  ,Name: 'Knee Push-up', path: 'kpu', Image: './res1/kneepushup.jpg' },
  ];
  const [search, setSearch] = useState('');
  const [filteredEx, setFilteredEx] = useState([]);

  useEffect(() => {
    const result = complement.filter((ex) =>
      ex.Name.toLowerCase().includes(search.toLowerCase().trim())
    );
    setFilteredEx(result);
  }, [search]);

  return (
    <div>
      <input
        className='inp'
        value={search}
        placeholder=" Search  Your Exercices .."
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className='grid-container'>
        {filteredEx.map((comp) => (
          <Link key={comp.Key} to={`/${comp.path}`}>
            <Modal key={comp.Key} name={comp.Name} path={comp.path} image={comp.Image} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Trainnav;
