/*import React from "react";

function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}*/
import React from 'react';
import { username, city } from '../data/user'; // Importing username and city variables

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Username: {username}</p>
      <p>City: {city}</p>
    </div>
  );
};

export default Home;

