import Head from "next/head";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { PaystackButton } from "react-paystack";
import PagesTop from "../components/PagesTop";

const Donate = () => {
  // const publicKey = "pk_test_d70344584529bd104ad330d0c2b132138f20c1b7";

  //Live Account
  const publicKey = "pk_live_c50f038ac6ef43a0e312c01981bfb938e3e933c9";
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [info, setInfo] = useState("");

  const [canSubmit, setCanSubmit] = useState(false);

  const newAmount = amount + "00";

  const submitForm = useRef(null);

  const register = () => {
    submitForm.current.click();
  };

  const componentProps = {
    email,
    name,
    phone,
    amount: newAmount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Donate Now",
    onSuccess: () => {
      register();
    },
    // onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  };
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
        about="Support Us"
      />

      <div className="donation-wrapper">
        <div className="inner">
          <div className="donation-form">
            <h4 className="title fw-bold">Make a Donation Today!</h4>

            <form name="Donation" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="Donation" />
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Email Address"
                name="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Phone Number"
                name="phone"
                required
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                type="text"
                placeholder="Amount"
                name="amount"
                required
                onChange={(e) => setAmount(e.target.value)}
              />
              <textarea
                name="info"
                id=""
                cols="30"
                rows="3"
                placeholder="Additional Information (optional)"
                onChange={(e) => setInfo(e.target.value)}
                // maxLength="1024"
              ></textarea>
              <input type="submit" className="d-none" ref={submitForm} />
            </form>
            <button
              className={`btn btn-success w-100 ${
                !email || !name || !phone || !amount ? "" : "d-none"
              }`}
              disabled={!email || !name || !phone || !amount ? true : false}
            >
              Donate Now
            </button>
            <PaystackButton
              className={`btn btn-success w-100 ${
                !email || !name || !phone || !amount ? "d-none" : ""
              }`}
              {...componentProps}
            />
          </div>

          <div className="donate-pic">
            <h4 className="title fw-bold">Your Support Matters</h4>
            <p>
              Your Donation will go a long way in supporting us towards
              providing for the resources needed to achieve more
            </p>
            <Image
              src="/imgs/donate.svg"
              width={300}
              height={300}
              alt="become-a-meber"
              unoptimized
            />
          </div>

          {/* <div className="bank-details">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Donate;
