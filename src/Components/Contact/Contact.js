import React, { Component } from 'react'

export class Contact extends Component {
    render() {
        return (
            <div>
                <h2>call text email me never</h2>
                <form
              action="https://formspree.io/f/mzbkgaad"
              method="POST">
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
        )
    }
}

export default Contact
