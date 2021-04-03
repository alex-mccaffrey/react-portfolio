import React, { Component } from "react";

export class About extends Component {
  render() {
    return (
      <div>
        <section>
          <h2>About Me</h2>
          <p>
            I am a Massachusettes native that transplanted to Colorado in 2009
            to start my college career. After completing my degree in Natural
            Resoruce Tourism at Colorado State University, I began my journey
            with the Vail Ski Patrol.
          </p>
          <p>
            During my time on Patrol, I learned the importance of working as a
            cohesive unit at all times, and adapting to sudden changes and
            plans. I have adapted this skill into all aspects of my life, and
            web development is no different.
          </p>
          <p>
            I tend to suceed through sheer grit and determination to be the best
            that I can. If you have a passion for the outdoors, helping others,
            or exploring unchartered territory, I would love to work with you.
          </p>
        </section>

        <section>
          <h2>My Experience</h2>
          <h3>Vacasa: Admin Specialist</h3>
          <ul>
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
              Direct access to the payment processor to manually process refunds
            </li>
          </ul>

          <h3>Vail Ski Patrol</h3>
          <ul>
            <li>
              Developed and directed the Junior Ski Patrol program introducing
              teenagers to responsibilities of Ski Patrol and provided basic
              medical training.
            </li>
            <li>
              Led a group of 15-20 students with 3-4 assistant patrollers.
            </li>
            <li>
              Awarded Rookie Patroller of the Year in 2013 as well as Patroller
              of the Month multiple times
            </li>
            <li>
              Completed Leadership Essentials training consisting of proper
              communication techniques, conflict resolution, and empathy
              training
            </li>
            <li>
              Provided medical care for guests and avalanche mitigation work
              that included explosive handling
            </li>
          </ul>

          <h3>TECTONIC MVMT: Founder</h3>
          <ul>
            <li>
              Founded TECTONIC MVMT - a mountain lifestyle brand seeking to
              unite those with a passion for the outdoors
            </li>
            <li>
              Created graphic design elements, website management, and expense
              tracking
            </li>
          </ul>
        </section>

        <section>
          <h2>Education</h2>
          <h3>Thinkful: Software Engineering</h3>
          <p>
            Full-stack program teaching modern front-end, back-end, and industry
            best practices.
          </p>

          <h3>Colorado State University</h3>
          <p>Master of Tourism Management; Cumulative GPA: 3.85/4.00</p>
          <p>Certificate - Ski Area Management</p>
          <p>
            Bachelor of Science - Natural Resource Tourism; Minor in Business
            Management
          </p>
        </section>
      </div>
    );
  }
}

export default About;
