import React from 'react';
import '../css/vids.css'
const videos = [
{Link:'https://www.youtube.com/embed/qyH6wcgmMlI'},
{Link:'https://www.youtube.com/embed/ZA8GzhFh_CQ'},
{Link:'https://www.youtube.com/embed/WxWvTDQ0Yh4'},
{Link:'https://www.youtube.com/embed/xJBqbv8GRZ4'},
{Link:'https://www.youtube.com/embed/vc1E5CfRfos'},
{Link:'https://www.youtube.com/embed/95846CBGU0M'},
];

const Vids =()=>{
  return(
  < div className='grid-container'>
    {videos.map((video) => (
     <div className='grid-item'> <iframe width="330" height="250" src={video.Link} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
    ))}
 </div>
)
}
export default Vids;
