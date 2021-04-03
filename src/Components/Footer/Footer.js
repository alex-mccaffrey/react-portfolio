import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import "./Footer.css"

class Footer extends Component {
  render() {
    return (
      <footer>
        <h3> &#169; Alex McCaffrey</h3>
        <a
          class="btn btn-dark btn-social mx-2"
          href="https://github.com/amccaff20"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-github"></i>
        </a>
        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
        <a
          class="social-btn"
          href="https://www.linkedin.com/in/alex-mccaffrey"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a
          class="btn btn-dark btn-social mx-2"
          href="mailto:alexmccaffrey07@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <i class="far fa-envelope"></i>
        </a>
      </footer>
    );
  }
}


export default Footer;