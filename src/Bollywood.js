import React from 'react'
import LatestArticles from './LatestArticles'
import Right from './Right'
import i15 from './i15.jpeg';
import i16 from './i16.jpg';
import i17 from './i17.jpg';
import i18 from './i18.jpeg';
import i11 from './i11.jpeg';
import akshay from './akshay.jpg';
import varun from './varun.jpg';
import tiger from './tiger.jpg';
import ranbir from './ranbir.jpg';
import ranveer from './ranveer.jpg';
import shahid from './shahid.jpg';
import RightCards from './RightCards';
import Advertisement from './Advertisement';
const Bollywood = (props) => {
  return (
    <>
    <br />
    <div>
    <div id='title' align="left">Bollywood</div>
    <hr align="left" id="hr1"/>
    </div>
    <div id="bigdiv">
      <div id="latestarticles"> 
      <LatestArticles latestarticlesheading="top 10 bollywood actors" Imagelatestarticles={i15} linklatestarticles={'https://www.boxofficepro.com/'} latestarticlefoot="Block busters" latestarticlefooter="5 stars"/>
      <LatestArticles latestarticlesheading="top 10 bollywood actress" Imagelatestarticles={i16} linklatestarticles={'https://www.boxofficepro.com/'} latestarticlefoot="Block busters" latestarticlefooter="5 stars"/>
      <LatestArticles latestarticlesheading="top 10 bollywood movies" Imagelatestarticles={i17} linklatestarticles={'https://www.boxofficepro.com/'} latestarticlefoot="Block busters" latestarticlefooter="5 stars"/>
        <img src={i18} alt="img" id="image123" />
        
      </div>
      <div id="rightcol">
        {/* <Right/> */}
        <RightCards img={akshay} count="1" rcheading="Akshay Kumar" rightcardfoot="Upcoming movie"  linkrightcards={'https://www.boxofficepro.com/'}  />
        <RightCards img={varun} count="2" rcheading="Varun Dhawan" rightcardfoot="Upcoming movie"  linkrightcards={'https://www.boxofficepro.com/'} />
        <RightCards img={tiger} count="3" rcheading="Tiger Shroff" rightcardfoot="Upcoming movie"  linkrightcards={'https://www.boxofficepro.com/'} />
        <RightCards img={ranbir} count="4" rcheading="Ranbir Kapoor" rightcardfoot="Upcoming movie"  linkrightcards={'https://www.boxofficepro.com/'} />
        <RightCards img={ranveer} count="5" rcheading="Ranveer Singh" rightcardfoot="Upcoming movie" linkrightcards={'https://www.boxofficepro.com/'}  />
        <RightCards img={shahid} count="6" rcheading="Shahid Kapoor" rightcardfoot="Upcoming movie"  linkrightcards={'https://www.boxofficepro.com/'} />
        <RightCards img={i11} count="7" rcheading="Taj Mahal" rightcardfoot="Upcoming movie"  linkrightcards={'https://www.boxofficepro.com/'} />
        <Advertisement />
      </div>
    </div>
    </>
  )
}

export default Bollywood