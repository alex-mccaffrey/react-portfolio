import React, { Component } from "react";
import "./Contact.css";

export class Contact extends Component {

  render() {
    const contactSummary = "I would love to connect, feel free to reach out anytime. Additional contact methods are at the bottom of the page. You can call, text, email, or complete the form below."
    return (
      <div className="contact">
        <p>
         {contactSummary}
        </p>
        <form
          action="https://formspree.io/f/mzbkgaad"
          method="POST"
          className="contact-form"
        >
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Your email:
            <input type="text" name="_replyto" required />
          </label>
          <label>
            Your message:
            <textarea name="message"></textarea>
          </label>

          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

export default Contact;
