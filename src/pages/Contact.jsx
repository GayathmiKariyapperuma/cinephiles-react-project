import React from "react";
import { GrContact } from "react-icons/gr";
import { GiSmartphone } from "react-icons/gi";
import { BsEnvelope } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";

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
      <div className="contactContainer1">
        <div className="contactText">
          <GiSmartphone className="icon1" /> <br />
          (+94)75 2784122 / (+94)332234715 <br />
          <br />
          <BsEnvelope className="icon2" /> <br />
          No:182, Ihalagama, Gampaha, Sri Lanka <br />
          <br />
          <MdOutlineAlternateEmail className="icon3" /> <br />
          gayathmikariyapperuma@gmail.com <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default Contact;
