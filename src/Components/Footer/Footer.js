import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <h3> &#169; Alex McCaffrey</h3>
        <section className="social-icons">
          <a
            className="social-btn"
            href="https://github.com/amccaff20"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FontAwesomeIcon icon={faGithub} size="2x" />
            <i className="far fa-linkedin"></i>
          </a>
          <a
            className="btn btn-dark btn-social mx-2"
            href="https://github.com/alex-mccaffrey"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            className="social-btn"
            href="https://www.linkedin.com/in/alex-mccaffrey"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            className="social-btn"
            href="mailto:alexmccaffrey07@gmail.com"
            rel="noopener noreferrer"
          >
            {" "}
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
          <a
            className="social-btn"
            href="tel:781-336-8196"
            rel="noopener noreferrer"
          >
            {" "}
            <FontAwesomeIcon icon={faPhoneSquare} size="2x" />
          </a>
        </section>
        <a
          className="resume"
          href="https://drive.google.com/file/d/1L4j9lvzIZVlz6xJqB7FFzde3rAb6z62-/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          Check Out My Resume
        </a>
      </footer>
    );
  }
}

export default Footer;
