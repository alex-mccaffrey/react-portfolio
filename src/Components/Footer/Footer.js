import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneSquare } from "@fortawesome/free-solid-svg-icons"
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <h3> &#169; Alex McCaffrey</h3>
        <section className="social-icons">
          <a
            class="social-btn"
            href="https://github.com/amccaff20"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FontAwesomeIcon icon={faGithub} size="2x"/>
            <i class="far fa-linkedin"></i>
          </a>
          <a class="btn btn-dark btn-social mx-2" href="https://github.com/amccaff20" target="_blank"><i class="fab fa-github"></i></a>
          <a
            class="social-btn"
            href="https://www.linkedin.com/in/alex-mccaffrey"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FontAwesomeIcon icon={faLinkedin} size="2x"/>
          </a>
          <a
            class="social-btn"
            href="mailto:alexmccaffrey07@gmail.com"
            //target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FontAwesomeIcon icon={faEnvelope} size="2x"/>
          </a>
          <a
            class="social-btn"
            href="tel:781-336-8196"
            //target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FontAwesomeIcon icon={faPhoneSquare} size="2x"/>
          </a>
        </section>
      </footer>
    );
  }
}

export default Footer;
