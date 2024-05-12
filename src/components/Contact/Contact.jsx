import { useRef } from "react";
import "./contact.css";
import walmart from "../../assets/walmart.png";
import adobe from "../../assets/adobe.png";
import microsoft from "../../assets/microsoft.png";
import facebook from "../../assets/facebook.png";
import facebookIcon from "../../assets/facebook-icon.png";
import instagramIcon from "../../assets/instagram.png";
import twitterIcon from "../../assets/twitter.png";
import youtubeIcon from "../../assets/youtube.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_xfm2ylx", "template_2w61f53", form.current, {
        publicKey: "REd2YveYe0XT5-tCUTmdx",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert("Email Sent!");
        },

        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div id="contactPage">
      <div className="clients">
        <h2>My Clients</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
          voluptate, atque rem modi autem iste possimus vel eius earum
          architecto, molestias nemo reprehenderit illum perferendis quos
          consectetur, dignissimos ab neque?
        </p>
        <div className="contactPageImg">
          <img src={walmart} alt="" />
          <img src={adobe} alt="" />
          <img src={microsoft} alt="" />
          <img src={facebook} alt="" />
        </div>
      </div>
      {/* ref={form} onSubmit={sendEmail} */}
      <div className="contact">
        <div className="contactPara">
          <h2>Contact Me</h2>
          <p>Please fill the contact below to discuss any work opportunity.</p>
        </div>
        <form className="contactForm" onSubmit={sendEmail} ref={form}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="user_name"
          />
          <input
            type="text"
            className="email"
            placeholder="Your Email"
            name="user_email"
          />
          <textarea
            name="message"
            className="msg"
            rows="8"
            placeholder="Your Message"
          ></textarea>
          <button className="submitButton" type="submit" value="Send">
            Submit
          </button>
          <div className="links">
            <img src={facebookIcon} alt="" />
            <img src={instagramIcon} alt="" />
            <img src={twitterIcon} alt="" />
            <img src={youtubeIcon} alt="" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
