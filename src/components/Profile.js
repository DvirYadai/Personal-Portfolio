import "../App.css";
import React from "react";
import cloud from "../images/cloud.png";
import mountain from "../images/mountain.png";
import { useTheme, useThemeUpdate } from "./ThemeContext";

export default function Profile() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "white",
    color: darkTheme ? "#ccc" : "#333",
  };

  return (
    <div style={themeStyles}>
      <div class="top-container">
        <button onClick={toggleTheme}>Dark theme toggler</button>
        <img class="top-cloud" src={cloud} alt="cloud-img" />
        <h1>I'm Dvir</h1>
        <h2>a programmer</h2>
        <img class="bottom-cloud" src={cloud} alt="cloud-img" />
        <img src={mountain} alt="mountain-img" />
      </div>

      <div class="middle-container">
        <div class="profile">
          <img
            class="user-img"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQGawYueJ7hzsg/profile-displayphoto-shrink_800_800/0/1616058137161?e=1623283200&v=beta&t=obf5mG1pd3xL7xOohlWp21pgXsS1c218oqaRe4HuTMs"
            alt="user-img"
          />
          <h2>Hello.</h2>
          <p>
            My name is Dvir Yadai and i'm a Junior full stack developer.
            <br /> Graduated the Cyber4s program by Scale-Up Velocity - 6 Month
            training based.
          </p>
        </div>
        <hr />
        <div class="skills">
          <h2>My Skills.</h2>
          <div class="skill-row">
            <img
              class="programming-img"
              src="https://www.flaticon.com/svg/static/icons/svg/1995/1995515.svg"
              alt="programming-img"
            />
            <h3>Developer</h3>
            <p>
              Full stack developer (MERN Stack) and other technologies: <br />
              HTML5, JS, jQuery, CSS, Bootstrap, NodeJS, Express, MongoDB,
              Mongoose, SQL, React.js, Next.js, jest, puppeteer and more..
            </p>
          </div>
          <div class="skill-row">
            <img
              class="guitar-img"
              src="https://www.flaticon.com/svg/vstatic/svg/921/921330.svg?token=exp=1617643907~hmac=d114c9084b033491ed7fe8f2dc49ac7b"
              alt="social-img"
            />
            <h3>Lorem ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam,
              blanditiis sint dolores officia culpa commodi nihil repellat quo
              debitis dignissimos deserunt iste aliquid aspernatur itaque, saepe
              veniam modi sed possimus!
            </p>
          </div>
        </div>
        <hr />
        <div class="contact-me">
          <h2>Get In Touch</h2>
          <h3>Please contact me via email for more...</h3>
          <a class="btn" href="mailto:dvir195@gmail.com">
            CONTACT ME
          </a>
        </div>
      </div>

      <div class="bottom-container">
        <a
          class="footer-link"
          href="https://www.linkedin.com/in/dvir-yadai-1053674a/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          class="footer-link"
          href="https://twitter.com/YadaiDvir"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
        <a
          class="footer-link"
          href="https://www.facebook.com/dvir.yadai.3"
          target="_blank"
          rel="noreferrer"
        >
          Facebook
        </a>
        <p>© 2021 Dvir Yadai.</p>
      </div>
    </div>
  );
}
