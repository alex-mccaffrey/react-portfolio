import React, { Component } from "react";
import SK9Pic from "../../Pics/sk9-landing.jpeg";
import WandererPic from "../../Pics/wanderer-home.jpeg";
import HikingAPI from "../../Pics/hiking-api-screenshot.jpeg"
import VailQuiz from "../../Pics/vail-quiz.jpeg"
import "./Projects.css";

export class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <section className="projects-intro">
        <h2>Recent Project</h2>
        <p>Here is a sample of some recent projects. For more projects and code files, please visit my GitHub through the link at the bottom of the page.</p>
        </section>

        <ul className="projects-list">

        <li className="project-item">
          <h3>Wanderer</h3>
              <p>May 2021</p>
              <p>Here is a link to the live app: <a href="https://wanderer.vercel.app/" className-="project-link" target="_blank" rel="noreferrer">Wanderer App</a></p>
              <p>Here is a link to the GitHub Repo: <a href="https://github.com/alex-mccaffrey/wanderer-client" target="_blank" rel="noreferrer">GitHub Repo</a></p>
              <a href="https://wanderer.vercel.app/" target="_blank" rel="noreferrer">
              <img
                src={WandererPic}
                className="project-screenshot"
                alt="Wanderer screenshot"
              ></img>
            </a>
            <p>
              Wanderer was developed to bridge the gap between safety and
              privacy. Location awareness of friends and family can be a great
              safety tool. But knowing their exact location at all times can
              sometimes be a breach of privacy. Wanderer allows users to decide
              when to share their location with others, leaving a trail of
              breadcrumbs with their whereabouts.
            </p>
          </li>

          <li className="project-item">
          <h3>SK9</h3>
              <p>March 2021</p>
              <p>Here is a link to the live app: <a href="https://sk9.vercel.app/" className-="project-link" target="_blank" rel="noreferrer">SK9 Dog Training</a></p>
              <p>Here is a link to the GitHub Repo: <a href="https://github.com/alex-mccaffrey/sk9-client" target="_blank" rel="noreferrer">GitHub Repo</a></p>
              <a href="https://sk9.vercel.app/" target="_blank" rel="noreferrer">
              <img
                src={SK9Pic}
                className="project-screenshot"
                alt="SK9 screenshot"
              ></img>
            </a>
            <p>
              SK9 provides a resource to track training sessions with your
              Search and Rescue dog. This helps focus training efforts and
              improve the quality of future training sessions and continued
              forward progress.
            </p>
          </li>

          <li className="project-item">  
              <h3>Hiking Project</h3>
              <p>December 2020</p>
              <p>Here is a link to the live app: <a href="https://alex-mccaffrey.github.io/hiking-api-project/index.html" className-="project-link" target="_blank" rel="noreferrer"> Hiking Trail Project</a></p>
              <p>Here is a link to the GitHub Repo: <a href="https://github.com/alex-mccaffrey/hiking-api-project" target="_blank" rel="noreferrer">GitHub Repo</a></p>
              <a href="https://alex-mccaffrey.github.io/hiking-api-project/index.html" target="_blank" rel="noreferrer">
              <img
                src={HikingAPI}
                className="project-screenshot"
                alt="Hiking API Screenshot"
              ></img>
            </a>
            <p>
              SK9 provides a resource to track training sessions with your
              Search and Rescue dog. This helps focus training efforts and
              improve the quality of future training sessions and continued
              forward progress.
            </p>
          </li>

          <li className="project-item">  
              <h3>Vail Quiz App</h3>
              <p>November 2020</p>
              <p>Here is a link to the live app: <a href="https://alex-mccaffrey.github.io/vail-quiz-app/" className-="project-link" target="_blank" rel="noreferrer">Vail Quiz App</a></p>
              <p>Here is a link to the GitHub Repo: <a href="https://github.com/alex-mccaffrey/vail-quiz-app" target="_blank" rel="noreferrer">GitHub Repo</a></p>
              <a href="https://alex-mccaffrey.github.io/vail-quiz-app/" target="_blank" rel="noreferrer">
              <img
                src={VailQuiz}
                className="project-screenshot"
                alt="Vail Quiz App Screenshot"
              ></img>
            </a>
            <p>
              SK9 provides a resource to track training sessions with your
              Search and Rescue dog. This helps focus training efforts and
              improve the quality of future training sessions and continued
              forward progress.
            </p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Projects;
