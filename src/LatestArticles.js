import React from 'react'
import './LatestArticles.css';
import i1 from './i1.jpeg';
function LatestArticles(props) {
  return (
    <>
    <div id="main">
    <hr align="left" id="hr2" />
    <div>
    <a href={props.linklatestarticles} target="_blank">
      <img src={props.Imagelatestarticles} alt="img" id='image' />
    </a>
    <div id="content">
        <p id="heading">{props.latestarticlesheading}</p>
        <p id="text">Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-known as a tourist destination. It has a plethora of temples and places.</p>
        <br></br>
        <div>
          <h4 id="footerh">{props.latestarticlefoot} </h4> 
          <div id="fcontent">|{props.latestarticlefooter}</div>
        </div> 
    </div>
    </div>

    <div>
    </div>
    </div>
    </>
  )
}

export default LatestArticles