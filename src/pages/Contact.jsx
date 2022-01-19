import React from "react";

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      We'd love to hear from you
      <div className="ContactContainer">
        <form>
          <div class="info">
            <input
              class="fname"
              type="text"
              name="name"
              placeholder="Full name"
            />
            <input type="text" name="name" placeholder="Email" />
            <input type="text" name="name" placeholder="Phone number" />
          </div>
          <p>Message</p>
          <div>
            <textarea rows="4"></textarea>
          </div>
          <button type="submit" href="/">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
