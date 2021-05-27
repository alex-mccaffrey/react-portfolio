import React, { Component } from "react";
import SK9Pic from "../../Pics/sk9-landing.jpeg";
import WandererPic from "../../Pics/wanderer-home.jpeg";
import HikingAPI from "../../Pics/hiking-api-screenshot.jpeg";
import VailQuiz from "../../Pics/vail-quiz.jpeg";
import "./Projects.css";

export class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <section className="projects-intro">
          <h2>Recent Project</h2>
          <p>
            Here is a sample of some recent projects. For more projects and code
            files, please visit my GitHub through the link at the bottom of the
            page.
          </p>
        </section>

        <ul className="projects-list">
          <li className="project-item">
            <h3>Wanderer</h3>
            <h4>May 2021</h4>
            <p>
              Here is a link to the live app:{" "}
              <a
                href="https://wanderer.vercel.app/"
                className-="project-link"
                target="_blank"
                rel="noreferrer"
              >
                Wanderer App
              </a>
            </p>
            <p>
              Here is a link to the GitHub Repo:{" "}
              <a
                href="https://github.com/alex-mccaffrey/wanderer-client"
                target="_blank"
                rel="noreferrer"
              >
                Client
              </a>
              {", "}
              <a
                href="https://github.com/alex-mccaffrey/wanderer-api"
                target="_blank"
                rel="noreferrer"
              >
                API
              </a>
              
            </p>
            <a
              href="https://wanderer.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
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
            <p>
              Built with: React (hooks), Node.js, Express, PostgreSQL, Google
              Map API
            </p>
          </li>

          <li className="project-item">
            <h3>SK9</h3>
            <h4>March 2021</h4>
            <p>
              Here is a link to the live app:{" "}
              <a
                href="https://sk9.vercel.app/"
                className-="project-link"
                target="_blank"
                rel="noreferrer"
              >
                SK9 Dog Training
              </a>
            </p>
            <p>
              Here is a link to the GitHub Repo:{" "}
              <a
                href="https://github.com/alex-mccaffrey/sk9-client"
                target="_blank"
                rel="noreferrer"
              >
                Client
              </a>
              {", "}
              <a
                href="https://github.com/alex-mccaffrey/sk9-api"
                target="_blank"
                rel="noreferrer"
              >
                API
              </a>
            </p>
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
            <p>Built with: React, Node.js, Express, PostgreSQL</p>
          </li>

          <li className="project-item">
            <h3>Hiking Project</h3>
            <h4>December 2020</h4>
            <p>
              Here is a link to the live app:{" "}
              <a
                href="https://alex-mccaffrey.github.io/hiking-api-project/index.html"
                className-="project-link"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Hiking Trail Project
              </a>
            </p>
            <p>
              Here is a link to the GitHub Repo:{" "}
              <a
                href="https://github.com/alex-mccaffrey/hiking-api-project"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Repo
              </a>
            </p>
            <a
              href="https://alex-mccaffrey.github.io/hiking-api-project/index.html"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={HikingAPI}
                className="project-screenshot"
                alt="Hiking API Screenshot"
              ></img>
            </a>
            <p>
              I created this Hiking Trail Finder to provide a clean and simple
              way for users to quickly gather hiking trails options in their
              area. There are some basic filters that allow the user to declare
              a maximum number of results, the minimum length of the hike, and
              how to sort the hikes. In addition to this, current and future
              weather conditions are provided so the user can plan accordingly.
              The final feature is the map, where users can click on the
              coordinates for a certain trail and get a precise marker on the
              map for reference.
            </p>
            <p>Built with: HTML, CSS, Javascript, jQuery, and external API's</p>
          </li>

          <li className="project-item">
            <h3>Vail Quiz App</h3>
            <h4>November 2020</h4>
            <p>
              Here is a link to the live app:{" "}
              <a
                href="https://alex-mccaffrey.github.io/vail-quiz-app/"
                className-="project-link"
                target="_blank"
                rel="noreferrer"
              >
                Vail Quiz App
              </a>
            </p>
            <p>
              Here is a link to the GitHub Repo:{" "}
              <a
                href="https://github.com/alex-mccaffrey/vail-quiz-app"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Repo
              </a>
            </p>
            <a
              href="https://alex-mccaffrey.github.io/vail-quiz-app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={VailQuiz}
                className="project-screenshot"
                alt="Vail Quiz App Screenshot"
              ></img>
            </a>
            <p>
              This Quiz App was created using JavaScript as an introduction to
              utilizing the render method. It will keep track of your progress
              and provide a final score along with the ability to restart the
              quiz at the end.
            </p>
            <p>Built with: HTML, CSS, JavaScript</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Projects;
