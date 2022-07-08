import Head from "next/head";
import React, { useRef, useState } from "react";
import { PaystackButton } from "react-paystack";
import PagesTop from "../components/PagesTop";
import axios from "axios";

const Register = () => {
  // const publicKey = "pk_test_d70344584529bd104ad330d0c2b132138f20c1b7";

  //Live Account
  const publicKey = "pk_live_c50f038ac6ef43a0e312c01981bfb938e3e933c9";
  const amount = 500;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [DOB, setDOB] = useState("");
  const [address, setAddress] = useState("");
  const [SOR, setSOR] = useState("");
  const [LGA, setLGA] = useState("");
  const [ward, setWard] = useState("");
  const [referee, setReferee] = useState("");
  const [EQ, setEQ] = useState("");
  const [occupation, setOccupation] = useState("");
  const [terms, setTerms] = useState("");

  const submitForm = useRef(null);

  const register = () => {
    submitForm.current.click();
  };

  const componentProps = {
    email,
    name,
    phone,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Submit and Make Payment",
    onSuccess: () => {
      register();
    },
    // onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  };

  return (
    <div className="register">
      <Head>
        <title>Become a Member</title>
        <meta
          name="description"
          content="Become a Member of Awelga Female Connect"
        />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <PagesTop
        bg="/imgs/registerbg.png"
        title="Become A Member"
        about="Join the Movement"
      />

      <div className="register-wrapper">
        <div className="inner">
          <div className="register-text">
            <p>
              Congratulations on your decision to join Ahoada West Local
              Government Area Female Connect (AFC)
            </p>

            <p>
              To be a <span className="fw-bold"> MEMBER</span>, you must be an
              Indigine of Ahoada West Local Government Area and
              <span className="fw-bold text-danger">
                {" "}
                MAKE PAYMENT OF ₦500{" "}
              </span>{" "}
              only.
            </p>
            <p>
              All the information you give will be treated confidentially and
              wouldn’t be used for any other purpose besides that of SCAHF.{" "}
            </p>
          </div>

          <div className="register-form">
            <form name="Members" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="Members" />
              <h5 className="fw-bold text-secondary">
                Kindly fill the form below with your correct details
              </h5>
              <div className="custom-form-group">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    maxLength="11"
                    minLength="11"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Date-of-Birth">Date of Birth</label>
                  <input
                    type="date"
                    placeholder="Date of Birth"
                    name="Date-of-Birth"
                    onChange={(e) => setDOB(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Gender">Gender</label>
                  <select name="Gender">
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    placeholder="Contact Address"
                    onChange={(e) => setAddress(e.target.value)}
                    name="address"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="state-of-origin">State of Origin</label>
                  <input
                    type="text"
                    placeholder="State of Origin"
                    name="state-of-origin"
                    onChange={(e) => setSOR(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="LGA">LGA</label>
                  <input
                    type="text"
                    placeholder="LGA"
                    name="LGA"
                    onChange={(e) => setLGA(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="ward">Ward</label>
                  <input
                    type="text"
                    placeholder="Ward (optional)"
                    name="ward"
                    onChange={(e) => setWard(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Educational-Qualification">
                    Educational Qualification
                  </label>
                  <select
                    name="Educational-Qualification"
                    onChange={(e) => setEQ(e.target.value)}
                  >
                    <option value="">Educational Qualification </option>
                    <option value="Graduate">Graduate</option>
                    <option value="Undergraduate">Undergraduate</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="name">Occupation</label>
                  <input
                    type="text"
                    name="occupation"
                    placeholder="Occupation"
                    onChange={(e) => setOccupation(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="referee">Referee</label>
                  <input
                    type="text"
                    placeholder="Name of referee (optional)"
                    name="referee"
                    onChange={(e) => setReferee(e.target.value)}
                  />
                </div>
              </div>
              <div className="accept-terms">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  required
                  onChange={(e) => setTerms(e.target.value)}
                />
                <label htmlFor="acceptTerms">
                  I hereby affirm by the rules and regulations guiding this
                  organization.
                </label>
              </div>
              <input type="submit" className="d-none" ref={submitForm} />
            </form>
            <button
              className={`btn btn-primary  w-100 ${
                !email ||
                !name ||
                !phone ||
                !DOB ||
                !address ||
                !SOR ||
                !LGA ||
                !EQ ||
                !occupation ||
                !terms
                  ? ""
                  : "d-none"
              }`}
              disabled={
                !email ||
                !name ||
                !phone ||
                !DOB ||
                !address ||
                !SOR ||
                !LGA ||
                !referee ||
                !EQ ||
                !occupation ||
                !terms
                  ? true
                  : false
              }
            >
              Submit and Make Payment
            </button>
            <PaystackButton
              className={`btn btn-primary  w-100 ${
                !email ||
                !name ||
                !phone ||
                !DOB ||
                !address ||
                !SOR ||
                !LGA ||
                !EQ ||
                !occupation ||
                !terms
                  ? "d-none"
                  : ""
              }`}
              {...componentProps}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
