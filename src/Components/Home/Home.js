import React, { Component } from "react";
import ProfilePic from "../../Pics/profile-pic1.jpeg";
import PondSkim from "../../Pics/pondskim.jpeg";
import DogHole from "../../Pics/ski-patrol-doghole.jpeg";
import "./Home.css";

export class Home extends Component {
  render() {
    return (
      <>
        <section className="home-page">
          <p className="summary">
            I am a full-stack web developer, passionate about applying my skills
            to help create clean and efficient code. My developer background
            includes building full stack applications from the ground up,
            updating code to add features and fix bugs, and creating useful
            tools that benefit the users.
            <br />
            <br />
            I strive to combine these skills with the knowledge I've gained in
            other industries, including effectively working in high-stress
            situations, being friendly and approachable, and thinking outside
            the box.
            <br />
            <br />I would love to contribute to a team with great programmers.
            If you would like to join forces and conquer the world, please don't
            hesitate to reach out via email, phone, or LinkedIn.
          </p>
          <section className="pics">
            <img
              src={ProfilePic}
              className="profile-pics"
              id="profile-pics"
              alt="profile of alex"
            />
            <img
              src={PondSkim}
              className="profile-pics"
              id="profile-pics"
              alt="pond skimming ski pic"
            />
            <img
              src={DogHole}
              className="profile-pics"
              id="profile-pics"
              alt="ski patroller digging dog hole"
            />
          </section>
        </section>
      </>
    );
  }
}

export default Home;
