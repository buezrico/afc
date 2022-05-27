import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="inner">
        <div className="contact">
          <div className="about">
            {/* <Image
              src="/imgs/afclogo.png"
              width="100%"
              height="100%"
              alt="logo"
            /> */}
            <p className="text-dark fw-bold">AWELGA FEMALE CONNECT</p>
          </div>

          <div className="contact-address contact-box">
            <p className="fw-bold">
              <i className="fas fa-map-marker-alt"></i> Adress:
            </p>
            <p className="contact-text">
              Ahoada West Local Government Council, Akinima Rivers State,
              Nigeria.
            </p>
          </div>
          <div className="contact-phone contact-box">
            <p className="fw-bold">
              <i className="fas fa-phone-alt"></i> Phone Number:
            </p>
            <p className="contact-text">+2348012345678</p>
          </div>
        </div>

        <div className="links">
          <h6 className="fw-bold">Quick Links</h6>

          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Make a Donation</li>
          </ul>
        </div>

        <div className="socials">
          <h6 className="fw-bold">Connect With Us</h6>

          <ul>
            <li>
              <i className="fab fa-facebook-f"></i>
            </li>
            <li>
              <i className="fab fa-instagram"></i>
            </li>
            <li>
              <i className="fab fa-whatsapp"></i>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
