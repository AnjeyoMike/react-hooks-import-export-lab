/*import React from "react";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={image} alt="I made this" />
    </div>
  );
}*/
import React from 'react';
import { image } from '../data/user'; // Importing the image variable

const About = () => {
  return (
    <div id="about">
      <h2>About</h2>
      <img src={image} alt="Profile" />
    </div>
  );
};

export default About;

