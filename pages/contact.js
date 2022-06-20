import Head from "next/head";
import React from "react";
import PagesTop from "../components/PagesTop";

import { NetlifyForm, Honeypot } from "react-netlify-forms";

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
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap"
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

            <NetlifyForm
              name="Contact"
              action="/thanks"
              honeypotName="bot-field"
            >
              {({ handleChange, success, error }) => (
                <>
                  <Honeypot />
                  {success && <p>Thanks for contacting us!</p>}
                  {error && (
                    <p>
                      Sorry, we could not reach our servers. Please try again
                      later.
                    </p>
                  )}
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                  />
                  <textarea
                    name="message"
                    id=""
                    cols="30"
                    rows="3"
                    placeholder="Your Message"
                    onChange={handleChange}
                    // maxLength="1024"
                  ></textarea>
                  <button className="btn btn-secondary" type="submit">
                    Send Message
                  </button>
                </>
              )}
            </NetlifyForm>
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
