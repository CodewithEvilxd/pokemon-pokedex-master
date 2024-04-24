import React from "react";
import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/evilxd.jpg";
import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <img src={avatarImage} alt="" className="profile-image" />
      <h1 className="profile-text">Hi I am Nishant Gaurav</h1>
      <h2 className="profile-text">The creator of this awesome pokedex</h2>
      <h4 className="profile-text">
        This project is created for Fun
      </h4>
      <div className="profile-links">
        <a href="https://github.com/codewithEvilxd">
          <FaGithub />
        </a>
        <a href="https://www.youtube.com/c/codewithevilxd">
          <FaYoutube />
        </a>
        <a href="https://www.linkedin.com/in/nishantgaurav">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);
