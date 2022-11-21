import React from 'react'
import i1 from './i1.jpeg';
import i2 from './i2.jpg';
import i3 from './i3.jpg';
import i4 from './i4.jpg';
import i5 from './i5.jpg';
import i6 from './i6.jpg';
import i7 from './i7.jpeg';
import i8 from './i8.jpg';
import i9 from './i9.jpeg';
import i10 from './i10.jpg';
import LatestArticles from './LatestArticles';
import LatestStories from './LatestStories';
import './MainPage.css';
import Right from './Right';
import TheLatest from './TheLatest';
// import Advertisement from './Advertisement';
function MainPage() {
  return (
    <>
    
    <hr align="left" id="hr" />
    <div id="images">
      <div id="images1">
        <img src={i1} alt="img" id='i1' />
      </div>
      <div id="images2">
      <img src={i2} alt="img" id='i2' />
      <img src={i3} alt="img" id='i3' />
      </div>
    </div>

    <div>
    <div id='title' align="left">The Latest</div>
    <hr align="left" id="hr1"/>
    </div>
    <div id="cards">
      <TheLatest heading="Full Moon" image={i4}/>
      <TheLatest heading="Crescent Moon" image={i5}/>
      <TheLatest heading="Half Moon" image={i6}/>
    </div>
    <br></br>
    <div>
    <div id='title' align="left">Latest Articles</div>
    <hr align="left" id="hr1"/>
    </div>

    <div id="bigdiv">
      <div id="latestarticles"> 
        <LatestArticles latestarticlesheading="Fun activities to do in Maldives" Imagelatestarticles={i7} linklatestarticles={'https://en.wikipedia.org/wiki/Maldives'} latestarticlefoot="Travel" latestarticlefooter="2023"/>
        <LatestArticles latestarticlesheading="Top 10 places to visit in India" Imagelatestarticles={i8} linklatestarticles={'https://www.holidify.com/country/india/places-to-visit.html'} latestarticlefoot="Travel" latestarticlefooter="2023"/>
        <LatestArticles latestarticlesheading="Best food outlets in London" Imagelatestarticles={i9} linklatestarticles={'https://www.cntraveller.com/gallery/best-restaurants-london'} latestarticlefoot="Travel" latestarticlefooter="2023"/>
        <img src={i10} alt="img" id="image10" />
        
      </div>
      <div id="rightcol">
        {/* <Advertisement /> */}
        <Right/>
      </div>
    </div>

    <div>
    <div id='title' align="left">Latest Stories</div>
    <hr align="left" id="hr1"/>
    <div id="cards">
      <LatestStories heading="Catches waves with an adventure guide" footer="TECH"  footercontent="TODAY 12PM"/>
      <LatestStories heading="Catches waves with an adventure guide" footer="STYLE" footercontent="12 AUGUST"/>
      <LatestStories heading="Catches waves with an adventure guide" footer="TECH" footercontent="27 SEPTEMBER"/>
    </div>
    </div>
    
    <hr align="left" id="hr" />

    </>
  )
}
export default MainPage