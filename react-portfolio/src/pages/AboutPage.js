import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Richard from '../assests/images/richard.png'

function AboutPage(props) {
    return (
       <div>
           <Hero title={props.title} />

           <Content>
               <div className="richard">
                   <img src={Richard} alt="Richard"/>
               </div>
               
               <p>
                   
                    Welcome! Thank you for taking the time out of your day to view my
                    progress so far. My name is Richard Biala, I am a father of 2 and
                    married to my beautiful wife for 15 years. I decided to in the middle
                    of my life that I needed a change of direction regarding my career and
                    wanted to challenge myself by entering the world of coding.
               </p>
               <p>
                    I've recently finished my coding classes at U.C. Davis and
                    persuing a career as a full stack web developer. Throughout my time with U.C Davis, I've gained experience on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Firebase, Node Js, MySQL, MongoDB, Express, Handelbars.js & ReactJS. Prior to to my
                    bootcamp experience I had little to no knowledge of any code, but with
                    my new found love for web development. I look forward to learning and
                    creating more for the world.
               </p>
           </Content>
       </div>
    )
}

export default AboutPage;
