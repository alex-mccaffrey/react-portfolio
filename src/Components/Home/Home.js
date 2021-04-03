import React, { Component } from "react";
import ProfilePic from "../../Pics/profile-pic.jpeg";
import "./Home.css";

export class Home extends Component {
  render() {
    return (
      <>
        <section className="home-page">
          <img
            src={ProfilePic}
            className="profile-pic"
            id="profile-pic"
            alt="profile of alex"
          />
          <p className="summary">
          I am a full stack developer passionate about combining skills from past experiences with knowledge of relevant skills and languages, including React, Node.js, JavaScript, HTML, CSS, and PostgreSQL.
          </p>
        </section>
      </>
    );
  }
}

export default Home;
