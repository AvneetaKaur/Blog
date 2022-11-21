import React from 'react'
import i23 from './i23.jpg';
import i24 from './i24.jpg';
import i25 from './i25.jpg';
import i26 from './i26.jpg';
import fruits from './fruits.jpeg';
import vegetables from './vegetables.jpg';
import pasta from './pasta.jpg';
import cake from './cake.jpg';
import nuggets from './nuggets.jpg';
import pao from './pao.jpg';
import bread from './bread.jpg'; 
import LatestArticles from './LatestArticles';
import RightCards from './RightCards';
import Advertisement from './Advertisement';
function Food() {
  return (
    <>
    <br />
    <div>
    <div id='title' align="left">Hollywood</div>
    <hr align="left" id="hr1"/>
    </div>
    <div id="bigdiv">
      <div id="latestarticles">
      <LatestArticles latestarticlesheading="top 10 fast food items" Imagelatestarticles={i23} linklatestarticles={'https://www.boxofficepro.com/'} latestarticlefoot="Ratings" latestarticlefooter="5 stars"/>
      <LatestArticles latestarticlesheading="top 10 hollywood actors" Imagelatestarticles={i24} linklatestarticles={'https://www.boxofficepro.com/'} latestarticlefoot="Ratings" latestarticlefooter="5 stars"/>
      <LatestArticles latestarticlesheading="top 10 hollywood movies" Imagelatestarticles={i25} linklatestarticles={'https://www.boxofficepro.com/'} latestarticlefoot="Ratings" latestarticlefooter="5 stars"/>
      
        <img src={i26} alt="img" />
        
      </div>
      <div id="rightcol">
        <RightCards img={fruits} count="1" rcheading="Fruits" rightcardfoot="Fresh fruits available" />
        <RightCards img={vegetables} count="2" rcheading="Vegetables" rightcardfoot="Fresh vegtgties available here"  />
        <RightCards img={pasta} count="3" rcheading="Pasta" rightcardfoot="Deloicious pasta"  />
        <RightCards img={cake} count="4" rcheading="Cakes" rightcardfoot="Mouth watering cakes"  />
        <RightCards img={nuggets} count="5" rcheading="Nuggets" rightcardfoot="yumm cheesy nuggets"  />
        <RightCards img={pao} count="6" rcheading="Pao Bhaji" rightcardfoot="Rich with indian spices"  />
        <RightCards img={bread} count="7" rcheading="Breads" rightcardfoot="Multigrain soft breads"  />
        <Advertisement />
      </div>
    </div>
    </>
  )
}

export default Food