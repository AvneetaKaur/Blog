import React from 'react'
import I1 from "./person1.png";
import I2 from "./logos3.jpg";
import I3 from "./react1.png";
import I4 from "./code1.png";  
import Card5 from "./TheLatest"; 
import I5 from "./clap.png";
import I6 from "./share2.png";
import i30 from "./i30.jpeg";
import i31 from "./i31.jpg";
import i32 from "./i32.jpeg";
function Fitness() {
  return (
    <>
        <div className="tech-cont ">
            <div className="share  ">
                <div className="share-1"> 
                    <img src={I5}/> <span> 9.3K</span> <br/> <br/>
                    <img src={I6}/><span>Share this article</span>
                </div>
            </div>
            <div className="tec-content ">
                <h2>5 Ways to animate a React app</h2>
                <div className="content-head">
                    <div className="headd-img "><img src={I1}/></div>
                    <div className="headd-txt ">
                        <p>Dmitry Nozhenko</p>
                        <span>Jan 28 2019 - 10 min read</span>
                    </div>
                    <div className="headd-fav "><img src={I2}/></div>
                </div>
                <div className="tec-img1"><img src={I3}/></div>

                <div className="tec-txt2"> 
                Animation in ReactJS app is a popular topic and there are many ways to create
different types of animations. Many developers create animation exclusively using
CSS and adding classes to HTML Tags. This is a great way and you should use it.
If you want to create complex animations you can pay attention to GreenSock.
GreenSock is the most powerful animation platform. There are also a lot of libraries,
components for creating animation in React.
<br/><br/><br/>
<b> Lets talk about them.</b>   
                </div>
                <div className="tec-img2"><img src={I4}/></div>

                <button>React</button>
                <button>Javascript</button>
                <button>Animation</button>

                <hr/>
                <div className="content-head">
                    <div className="headd-img "><img src={I1}/></div>
                    <div className="headd-txt ">
                        <p>Dmitry Nozhenko</p>
                        <span>Jan 28 2019 - 10 min read</span>
                    </div>
                </div>
                <hr/>
            </div>
        </div>

        <div className="tec-foot">
            <p className="foot-head">More from Siren</p>   
            <hr/>
            <div className="foot-imgtxt">
                <Card5  image={i30} heading="Yoga"/>
                <Card5 image={i31} heading="Meditation"/>
                <Card5 image={i32} heading="Running"/>
            </div> 
        </div>

        </>
  )
}

export default Fitness