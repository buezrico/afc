import Head from "next/head";
import React from "react";
import PagesTop from "../components/PagesTop";

const Contact = () => {
  return (
    <div className="contact">
      <Head>
        <title>Contact Us</title>
        <meta
          name="description"
          content="Get in touch with Awelga Female Connect"
        />
        <link rel="icon" href="/logo.ico" />

        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=optional"
          rel="stylesheet"
        />
      </Head>

      <PagesTop
        bg="/imgs/contactbg.png"
        title="Contact Us"
        about="Get In Touch With Us.."
      />

      <div className="contact-wrapper">
        <div className="inner">
          <div className="contact-message">
            <h4 className="title fw-bold">Get In Touch</h4>

            <form>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
              <textarea
                name=""
                id=""
                cols="30"
                rows="3"
                placeholder="Your Message"
                // maxLength="1024"
              ></textarea>
              <button className="btn btn-secondary">Send Message</button>
            </form>
          </div>
          <div className="contact-address">
            <h4 className="title fw-bold">Contact Us</h4>

            <div className="contact-details">
              <div className="contact-detail">
                <h6 className="fw-bold">Address</h6>
                <p>
                  <i className="fas fa-map-marker-alt"></i>
                  Ahoada West Local Government Council, Akinima, Rivers State,
                  Nigeria.
                </p>
              </div>
              <div className="contact-detail">
                <h6 className="fw-bold">Phone Number</h6>
                <p>
                  <i className="fas fa-phone-alt"></i>
                  +234 812 3456 789
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
