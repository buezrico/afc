import Head from "next/head";
import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import PagesTop from "../components/PagesTop";
import axios from "axios";

const Register = () => {
  const publicKey = "pk_test_d70344584529bd104ad330d0c2b132138f20c1b7";

  //Live Account
  // const publicKey = "pk_live_c50f038ac6ef43a0e312c01981bfb938e3e933c9";
  const amount = 500;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const register = async (e) => {
    e.preventDefault();
  };

  //   const newMember = {
  //     name: name,
  //     email: email,
  //     phone: phone,
  //   };
  //   console.log(name);

  //   // await axios.post("http://localhost:1337/api/members/", {
  //   //   newMember,
  //   // });

  //   const response = await fetch("http://localhost:1337/api/members", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     // body: {
  //     //   name: name,
  //     //   email: email,
  //     //   phone: phone,
  //     // },
  //   });

  //   console.log(newMember);
  // };

  const componentProps = {
    email,
    name,
    phone,
    address,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Submit and Make Payment",
    // onSuccess: () =>
    //   alert("Thanks for doing business with us! Come back soon!!"),
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
            <form
              name="Members"
              onSubmit={register}
              method="POST"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="cMembers" />
              <h5 className="fw-bold text-secondary">
                Kindly fill the form below with your correct details
              </h5>
              <div className="custom-form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="tel"
                  id="phone"
                  placeholder="Phone Number"
                  onChange={(e) => setPhone(e.target.value)}
                />
                <input type="date" placeholder="Date of Birth" />
                <select name="" id="">
                  <option value="">Gender</option>
                  <option value="male">Male</option>
                  <option value="Female">Female</option>
                </select>
                <input
                  type="text"
                  placeholder="Contact Address"
                  onChange={(e) => setAddress(e.target.value)}
                />
                <input type="text" placeholder="State of Origin" />
                <input type="text" placeholder="LGA" />
                <input type="text" placeholder="Ward" />
                <input type="text" placeholder="Name of referee (optional)" />
                <select name="" id="">
                  <option value="">Educational Qualification </option>
                  <option value="male">Graduate</option>
                  <option value="Female">Undergraduate</option>
                </select>
                <input type="text" placeholder="Occupation" />
              </div>
              <div className="accept-terms">
                <input type="checkbox" name="acceptTerms" />
                <label htmlFor="acceptTerms">
                  I hereby affirm by the rules and regulations guiding this
                  organization.
                </label>
              </div>
              {/* <input type="submit" className="btn btn-secondary" /> */}
              <PaystackButton
                className="btn btn-primary w-100"
                {...componentProps}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
