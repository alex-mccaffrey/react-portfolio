import React, { Component } from "react";
import "./About.css";

export class About extends Component {
  render() {
    return (
      <div className="about">
        <section className="about-section">
          <h2>About Me</h2>
          <p>
            I am a Massachusetts native that relocated to Colorado in 2009 to
            start my college journey. After completing my degree in Natural
            Resource Tourism at Colorado State University, I began my journey
            with the Vail Ski Patrol.
          </p>
          <p>
            During my time on Patrol, I learned the importance of working as a
            cohesive unit, adapting to sudden changes and
            unexpected events. I have adapted this skill into all aspects of my
            life, including web development.
          </p>
          <p>
            I tend to succeed through sheer grit and determination to be the
            best that I can. I made the decision to finally fulfill a dream of
            becoming a software developer and prove to myself and others that I
            can accomplish anything I put my mind to. After 7 months in a
            full-stack software engineering program, I now have the skills and
            knowledge to succeed as a developer. This program built a foundation
            in HTML, CSS, JavaScript, React, Node.js, Express, and SQL.
          </p>

          <p>
            If you have a passion for the outdoors, helping others, or exploring
            unchartered territory, I would love to work with you.
          </p>
        </section>

        <hr />

        {/* <section className="experience-section">
          <h2>My Experience</h2>
          <h3>Vacasa: Admin Specialist</h3>
          <article className="job">
            <ul className="job-duties">
              <li>
                Reconcile unpaid and overcharged reservations Confirm guests are
                in compliance with local COVID regulations through the use of
                legal forms
              </li>
              <li>Track and register guests for certain HOA’s and Resorts</li>
              <li>
                Act as liaison for the Admin team to support collaboration with
                other departments
              </li>
              <li>
                Direct access to the payment processor to manually process
                refunds
              </li>
            </ul>
          </article>

          <h3>Vail Ski Patrol</h3>
          <article className="job">
            <ul className="job-duties">
              <li>
                Developed and directed the Junior Ski Patrol program introducing
                teenagers to responsibilities of Ski Patrol.
              </li>
              <li>
                Awarded Rookie Patroller of the Year in 2013 as well as
                Patroller of the Month multiple times.
              </li>
              <li>
                Completed Leadership Essentials training in communication
                techniques, conflict resolution, and empathy.
              </li>
              <li>
                Provided medical care for guests and avalanche mitigation work
                that included explosive handling.
              </li>
            </ul>
          </article>

          <h3>TECTONIC MVMT: Founder</h3>
          <article className="job">
            <ul className="job-duties">
              <li>
                Founded TECTONIC MVMT - a mountain lifestyle brand seeking to
                unite those with a passion for the outdoors
              </li>
              <li>
                Created graphic design elements, website management, and expense
                tracking
              </li>
            </ul>
          </article>
        </section>

        <hr />

        <section className="education-section">
          <h2>Education</h2>
          <h3>Thinkful: Software Engineering</h3>
          <article className="school">
            <p>
              Full-stack program teaching modern front-end, back-end, and
              industry best practices.
            </p>
            <p>
              Built, tested, and deployed front-end and back-end services to
              create functional full-stack web applications
            </p>
            <p>
              Collaborated with a group of other developers throughout the
              program to debug, share resources, and brainstorm ideas
            </p>
          </article>

          <h3>Colorado State University</h3>
          <article className="school">
            <p>Master of Tourism Management; Cumulative GPA: 3.85/4.00</p>
            <p>Certificate - Ski Area Management</p>
            <p>
              Bachelor of Science - Natural Resource Tourism; Minor in Business
              Management
            </p>
          </article>
        </section> */}
      </div>
    );
  }
}

export default About;
