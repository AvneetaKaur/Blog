import React from 'react'
import "./RightCards.css";
const RightCards = (props) => {
  return (
    <>
    <br />
    <a href={props.linkrightcards} target="_blank"><img src={props.img} alt="img" id='rcimage' align="left" /></a>
    <div align="left" id="rcsheading">{props.rcheading}</div>
    <h4 className='abc'align="left">{props.rightcardfoot}<span>  2023</span> </h4>
    <br />
    <hr align="left" id="hr2" />
    <p align="right" id="rcr">{props.count}</p>
    

    </>
  )
}

export default RightCards