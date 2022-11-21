import React from 'react'
import './TheLatest.css';

function TheLatest(props) {

  return (
    <>
      <div id="card1">
          <img src={props.image} alt="img" id='i' />
          <h3>{props.heading}</h3>
          <p>Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-known as a tourist destination. It has a plethora of temples and places.</p>
          <div>
          <h4 id="footer">Travel </h4> 
          <div id="fcontent">| 27 December 2020</div>
          </div> 
      </div>
    
    </>
  )
}

export default TheLatest