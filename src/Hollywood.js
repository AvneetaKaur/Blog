import React from 'react'
import LatestArticles from './LatestArticles'
import Right from './Right';
import i19 from './i19.jpg';
import i20 from './i20.jpg';
import i21 from './i21.jpg';
import i22 from './i22.jpg';
import RightCards from './RightCards';
import tom from './tom.jpg';
import leo from './leo.jpg';
import brad from './brad.jpg';
import will from './will.jpg';
import robert from './robert.jpg';
import johnny from './johnny.jpg';
import matt from './matt.jpg';
import Advertisement from './Advertisement';

function Hollywood() {
  return (
    <>
    <br />
    <div>
    <div id='title' align="left">Hollywood</div>
    <hr align="left" id="hr1"/>
    </div>
    <div id="bigdiv">
      <div id="latestarticles">
      <LatestArticles latestarticlesheading="top 10 hollywood actors" Imagelatestarticles={i19} linklatestarticles={'https://www.boxofficemojo.com/year/world/'} latestarticlefoot="Block busters" latestarticlefooter="5 stars"/>
      <LatestArticles latestarticlesheading="top 10 hollywood actors" Imagelatestarticles={i20} linklatestarticles={'https://www.boxofficemojo.com/year/world/'} latestarticlefoot="Block busters" latestarticlefooter="5 stars"/>
      <LatestArticles latestarticlesheading="top 10 hollywood movies" Imagelatestarticles={i22} linklatestarticles={'https://www.boxofficemojo.com/year/world/'} latestarticlefoot="Block busters" latestarticlefooter="5 stars"/>
      
        <img src={i21} alt="img" id="imageh" />
        
      </div>
      <div id="rightcol">
        <RightCards img={tom} count="1" rcheading="Tom Cruise" rightcardfoot="Releasing soon" linkrightcards={'https://www.boxofficemojo.com/year/world/'}  />
        <RightCards img={leo} count="2" rcheading="leonardo dicaprio" rightcardfoot="Releasing soon" linkrightcards={'https://www.boxofficemojo.com/year/world/'}  />
        <RightCards img={brad} count="3" rcheading="Brad Pitt" rightcardfoot="Releasing soon"  linkrightcards={'https://www.boxofficemojo.com/year/world/'}  />
        <RightCards img={will} count="4" rcheading="Will Smith" rightcardfoot="Releasing soon"  linkrightcards={'https://www.boxofficemojo.com/year/world/'}  />
        <RightCards img={robert} count="5" rcheading="Robert Downey jr" rightcardfoot="Releasing soon"  linkrightcards={'https://www.boxofficemojo.com/year/world/'}  />
        <RightCards img={johnny} count="6" rcheading="Johnny Depp" rightcardfoot="Releasing soon"  linkrightcards={'https://www.boxofficemojo.com/year/world/'}   />
        <RightCards img={matt} count="7" rcheading="Matt Damon" rightcardfoot="Releasing soon"   linkrightcards={'https://www.boxofficemojo.com/year/world/'} />
        <Advertisement />
      </div>
    </div>
    </>
  )
}

export default Hollywood