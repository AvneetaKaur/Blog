import React from 'react'
import './Right.css';
import RightCards from './RightCards';
import TheLatest from './TheLatest';
import i11 from './i11.jpeg';
import i12 from './i12.jpeg';
import i13 from './i13.jpg';
import i14 from './i14.jpg';
import Advertisement from './Advertisement';
function Right() {
  return (
    <>
    <br />
        
        <Advertisement />
        
    <div id='titlee' >Top Posts</div>
    <hr align="left" id="hr123"/>
    <p align="left" id="rc">Eight wonders of the </p>
    <p align="left" id="rc">World</p>
    <h4 className='abc'align="left">Travel |<span>  this year</span> </h4>      
    <hr align="left" id="hr2" />
    <RightCards img={i11} count="1" rcheading="Taj Mahal" />
    <RightCards img={i12} count="2" rcheading="Great Wall of China"/>
    <RightCards img={i13} count="3" rcheading="Petra"/>
    <RightCards img={i14} count="4" rcheading="Colosseum"/>
    

    
    </>
  )
}

export default Right