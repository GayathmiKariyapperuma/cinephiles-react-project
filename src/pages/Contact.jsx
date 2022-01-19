import React from "react";
import { GrContact } from "react-icons/gr";

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      We'd love to hear from you .... <GrContact /> <br />
      <div className="contactContainer">
        <form>
          <div class="info">
            <input
              class="fname"
              type="text"
              name="name"
              placeholder="Full name"
            />
            <br />
            <br />
            <input type="text" name="name" placeholder="Email" />
            <br />
            <br />
            <input type="text" name="name" placeholder="Phone number" />
          </div>
          <p>Message</p>
          <div>
            <textarea rows="4"></textarea>
          </div>
          <button className="formButton" type="submit" href="/">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
