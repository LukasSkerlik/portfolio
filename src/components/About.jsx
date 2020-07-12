import React from "react";
import dude from './images/dude.jpg'; // Tell webpack this JS file uses this image


function About() {

  return (
      <div class="About" id="About">
        <img class="profile" src={dude} alt="Lukas-Skerlik" />
        <div>
          <h2>Hi, my name is </h2>
          <h1>Lukas Skerlik</h1>
        </div>
        <div class="smallerDiv">
          <h3>I'm a full stack web developer with a focus on frontend.</h3>
          <h4>I primarily use the MERN stack, however I'm always keen on learning new technologies</h4>
          <p>My resume is available for download here</p>
        </div>
      </div>
  );
}

export default About;
