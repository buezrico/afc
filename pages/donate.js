import Head from "next/head";
import Image from "next/image";
import React from "react";
import PagesTop from "../components/PagesTop";

const Donate = () => {
  return (
    <div className="donation">
      <Head>
        <title>Make a Donation</title>
        <meta
          name="description"
          content="Make a Donation to Awelga Female Connect"
        />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <PagesTop
        bg="/imgs/donationbg.png"
        title="MAke A Donation"
        about="Your Donation will go a long way in supporting us towards providing for the resources needed to achieve more"
      />

      <div className="donation-wrapper">
        <div className="inner">
          <div className="donation-form">
            <h4 className="title fw-bold">Thank you for your Donation</h4>

            <form>
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Email Address" />
              <input type="text" placeholder="Phone Number" />
              <input type="text" placeholder="Amount" />
              <textarea
                name=""
                id=""
                cols="30"
                rows="3"
                placeholder="Additional Information (optional)"
                // maxLength="1024"
              ></textarea>
              <button className="btn btn-success">Donate Now</button>
            </form>
          </div>
          <div className="bank-details">
            <div className="top">
              <h4 className="title fw-bold">Bank Details</h4>
              <div className="bank-logo">
                <Image
                  src="/imgs/gtlogo.png"
                  width="100%"
                  height="100%"
                  alt="Gtbank-logo"
                />
              </div>
            </div>

            <div className="account-details">
              <div className="account-detail">
                <p>Account Number</p>
                <h6 className="fw-bold">0123456789</h6>
              </div>
              <div className="account-detail">
                <p>Account Name</p>
                <h6 className="fw-bold">Awelga Female Connect</h6>
              </div>
              <div className="account-detail">
                <p>Bank Name</p>
                <h6 className="fw-bold">GTCO</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
