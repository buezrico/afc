import Head from "next/head";
import Image from "next/image";
import React from "react";
import PagesTop from "../components/PagesTop";

const About = () => {
  return (
    <div className="about">
      <Head>
        <title>About Us</title>
        <meta name="description" content="About Awelga Female Connect" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <PagesTop
        bg="/imgs/aboutbg.png"
        title="About Us"
        about="Get to know Us better.."
      />

      <section className="about-intro">
        <div className="about-intro-text-alt">
          <p>
            We are driven by 3 core objectives:
            <br /> - To provide a responsive, supportive, and innovative
            service. <br /> - To be a catalyst for community development.
            <br /> - To grow and sustain an effective organization
          </p>
        </div>
        <div className="about-intro-img">
          <Image
            src="/imgs/about.svg"
            width={300}
            height={300}
            alt="who-we-are"
            unoptimized
            // layout="responsive"
          />
        </div>

        <div className="about-intro-text">
          <p>
            <span className="fw-bold">Awelga Female Connect</span> is a
            non-governmental and apolitical organization made up of female
            youths from the Ahoada West Local Government Area.
          </p>
          <p>It was founded in May 2021.</p>

          <p className="text3">
            We are driven by 3 core objectives:
            <br /> - To provide a responsive, supportive, and innovative
            service. <br /> - To be a catalyst for community development.
            <br /> - To grow and sustain an effective organization
          </p>
        </div>
      </section>

      <section className="about-objectives">
        <h3 className="title fw-bold text-secondary">OUR OBJECTIVES</h3>

        <ul className="objectives">
          <li className="objective">
            <i className="fas fa-bullseye"></i>
            <p>
              Deliver and expand a variety and range of training to meet
              identified needs.
            </p>
          </li>
          <li className="objective">
            <i className="fas fa-bullseye"></i>
            <p>
              Seek opportunities to maintain and develop intra and
              inter-community interaction in Ahoada West and beyond.
            </p>
          </li>
          <li className="objective">
            <i className="fas fa-bullseye"></i>
            <p>
              Build sustainable revenue through a variety of restricted and
              unrestricted income streams
            </p>
          </li>
          <li className="objective">
            <i className="fas fa-bullseye"></i>
            <p>
              Increase professional and personal development opportunities
              through the provision of support services.
            </p>
          </li>
          <li className="objective">
            <i className="fas fa-bullseye"></i>
            <p>
              Engage with existing and develop strategic networks and
              opportunities for collaborative working.
            </p>
          </li>
          <li className="objective">
            <i className="fas fa-bullseye"></i>
            <p>
              Ensure sound organizational governance through an appropriately
              skilled Board of Directors
            </p>
          </li>
          <li className="objective">
            <i className="fas fa-bullseye"></i>
            <p>
              Increase access to services and service effectiveness through
              strategic promotion, networking, and collaboration.
            </p>
          </li>
          <li className="objective">
            <i className="fas fa-bullseye"></i>
            <p>
              Promote and share AFC best practices with relevant community,
              voluntary and statutory sectors
            </p>
          </li>
          <li className="objective">
            <i className="fas fa-bullseye"></i>
            <p>
              Recognize and value members and volunteer expertise and provide
              opportunities for continued professional development.
            </p>
          </li>
          <li className="objective">
            <i className="fas fa-bullseye"></i>
            <p>
              Provide a safe, secured, and fit for purpose learning and working
              environment
            </p>
          </li>
          <li className="objective">
            <i className="fas fa-bullseye"></i>
            <p>
              Maintain and promote AFC as a recognized quality assured
              organization.
            </p>
          </li>
          <li className="objective">
            <i className="fas fa-bullseye"></i>
            <p>
              Maximize organizational effectiveness through actively seeking
              collaborative working opportunities.
            </p>
          </li>
        </ul>
      </section>

      <section className="about-targets">
        <div className="inner">
          <div className="top">
            <h4 className="fw-bold title text-light">OUR TARGETS</h4>
            <ul className="targets">
              <li className="target">
                <i className="fas fa-crosshairs"></i>
                <p>
                  Increase our membership drive by organizing skills acquisition
                  programs.
                </p>
              </li>
              <li className="target">
                <i className="fas fa-crosshairs"></i>
                <p>Support 3 members in business</p>
              </li>
              <li className="target">
                <i className="fas fa-crosshairs"></i>
                <p>Register 20 AFC members in JAMB</p>
              </li>
              <li className="target">
                <i className="fas fa-crosshairs"></i>
                <p>Enhancing Leadership development amongst AFC members.</p>
              </li>
            </ul>
          </div>
          <div className="member-pic">
            <Image
              src="/imgs/target.svg"
              width={300}
              height={300}
              alt="become-a-meber"
              unoptimized
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
