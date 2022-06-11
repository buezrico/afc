import Head from "next/head";
import React from "react";
import PagesTop from "../components/PagesTop";

const Register = () => {
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
            <form>
              <h5 className="fw-bold text-secondary">
                Kindly fill the form below with your correct details
              </h5>
              <div className="custom-form-group">
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email Address" />
                <input type="tel" placeholder="Phone Number" />
                <input type="date" placeholder="Date of Birth" />
                <select name="" id="">
                  <option value="">Gender</option>
                  <option value="male">Male</option>
                  <option value="Female">Female</option>
                </select>
                <input type="text" placeholder="Contact Address" />
                <input type="text" placeholder="State of Origin" />
                <input type="text" placeholder="LGA" />
                <input type="text" placeholder="Ward " />
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

              <button className="btn btn-secondary">
                Submit and Make Payment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
