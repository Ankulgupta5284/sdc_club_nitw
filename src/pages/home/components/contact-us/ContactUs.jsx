import { LinkedIn, Instagram, Mail } from "../../../../asset/icons/icons";
import "./contact-us.css";

function ContactUs() {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
      </div>
      <div className="contact-content">
        <div className="icon-list">
          <a href="#linkedin" className="link">
            <div className="circle">
              <LinkedIn className="icon" />
            </div>
            <span>LinkedIn</span>
          </a>
          <a href="#Instagram" className="link">
            <div className="circle">
              <Instagram className="icon" />
            </div>
            <span>Instagram</span>
          </a>
          <a href="#Gmail" className="link">
            <div className="circle">
              <Mail className="icon" />
            </div>
            <span>Gmail</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
