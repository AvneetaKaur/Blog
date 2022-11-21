import React from 'react'
import './LatestStories.css';

function LatestStories(props) {

  return (
    <>
      <div id="card1">
          <h2>{props.heading}</h2>
          <br />
          <p>Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-known as a tourist destination. It has a plethora of temples and places.Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-known as a tourist destination. It has a plethora of temples and places.Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-known as a tourist destination. It has a plethora of temples and places.</p>
          <div>
          <h4 id="footer">{props.footer} </h4> 
          <div id="fcontent">{props.footercontent}</div>
          </div> 
      </div>
    
    </>
  )
}

export default LatestStories