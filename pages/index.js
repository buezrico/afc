import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Awelga Female Connect</title>
        <meta name="description" content="Awelga Female Connect Website" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <header>
        <div className="inner">
          <h1>
            We are <span>A.F.C</span>, coming out stronger together for a better
            tomorrow
          </h1>
          <small>
            A Man’s face is his autobiography, A Woman’s face is her work for
            fiction, Keep your heel head and Standard High.
          </small>

          <div className="header-btns">
            <Link href="/donate">
              <button className="btn btn-primary">Donate</button>
            </Link>
            <Link href="/register">
              <button className="btn btn-outline-light">
                Join the Movement
              </button>
            </Link>
          </div>
        </div>

        <Link href="#who-we-are">
          <div className="scrolldown">
            <p>
              scroll <br /> down
            </p>
            <i className="fas fa-long-arrow-alt-down"></i>
          </div>
        </Link>
      </header>
      <section className="who-we-are" id="who-we-are">
        <div className="inner ">
          <div className="about-content">
            <h3>WHO WE ARE</h3>
            <p>
              <span>Awelga Female Connect</span> is non-governmental and
              apolitical organization made up of female youth from the Ahoada
              West Local Government Area, Rivers State, Nigeria, which was
              founded in May 2021 by Uyi Eunice Umashime.
            </p>
            <div className="objectives">
              <p>
                We are driven by 3 core objectives:
                <br /> - To provide a responsive, supportive, and innovative
                service. <br /> - To be a catalyst for community development.
                <br /> - To grow and sustain an effective organization
              </p>
              <div className="about-pic-alt">
                <Image
                  src="/imgs/about.svg"
                  width={200}
                  height={200}
                  alt="about-picture"
                  unoptimized
                />
              </div>
            </div>

            <Link href="/about">
              <p className="read-more mt-4">Read More...</p>
            </Link>
          </div>

          <div className="about-pic">
            <Image
              src="/imgs/about.svg"
              width={350}
              height={380}
              alt="about-picture"
              unoptimized
            />
          </div>
        </div>
      </section>
      <section className="principles">
        <div className="inner">
          <div className="mission principle">
            <i className="fas fa-gem"></i>

            <h6>OUR VALUES</h6>
            <p>
              Integrity, Honesty, and Recognition of Women&apos;s Unique
              Contribution.
            </p>
          </div>
          <div className="mission principle">
            <i className="fas fa-bullseye"></i>
            <h6>OUR MISSION</h6>

            <p>
              To support women’s professional and personal development through
              education and training to realize individual potential.
            </p>
          </div>
          <div className="mission principle">
            <i className="fas fa-eye"></i>
            <h6>OUR VISION</h6>

            <p>
              To mold confident women empowered to participate in and influence
              the society they live in.
            </p>
          </div>
        </div>
      </section>
      <section className="impact">
        <div className="inner">
          <div className="impact-content">
            <div className="impact-content-text">
              <h3 className="text-success fw-bold">OUR IMPACT</h3>

              <h2 className="text-secondary fw-bold">JOURNEY SO FAR...</h2>

              <div className="impact-text">
                <p>
                  In 1 year, we have been able to achieve so much and create an
                  impact through our innovative programes for all our members.
                </p>

                <p>
                  Our aim is that in the next few years, we would be 10X bigger
                  and reach more people than we have done in this one year.
                </p>
              </div>
            </div>

            <div className="impacts">
              <div className="impact-box">
                <div className="inner">
                  <p>
                    15 AFC members are beneficiaries of the Rivers State ICT
                    Training sponsored by the Ahoada West Local Government
                    Council.
                  </p>
                </div>

                <div className="bottom"></div>
              </div>
              <div className="impact-box">
                <div className="inner">
                  <p>
                    2 AFC members are beneficiaries of the Rivers State Fashion,
                    Design, and Cosmetics training sponsored by the Ahoada Local
                    Government Council.
                  </p>
                </div>

                <div className="bottom"></div>
              </div>
              <div className="impact-box">
                <div className="inner">
                  <p>
                    Visitation of 3 schools which cuts across the 3 Clusters in
                    Ahoada West LGA and distribution of writing materials and
                    pads to students, pep talks on Personal hygiene.
                  </p>
                </div>

                <div className="bottom"></div>
              </div>
            </div>
          </div>

          <div className="impact-pic"></div>
        </div>
      </section>
      <section className="member">
        <div className="inner">
          <div className="member-content">
            <p className="fw-bold">Get Involved</p>
            <h2 className="fw-bold">
              BECOME A <span className="text-primary">MEMBER</span>
            </h2>
            <p>
              We have more to do and welcome you to join us to achieve more.
            </p>
            <div className="bottom">
              <Link href="/register">
                <button className="btn btn-outline-light">Join Us Today</button>
              </Link>
              <div className="bottom-img">
                <Image
                  src="/imgs/member.svg"
                  width="100%"
                  height="100%"
                  alt="become-a-meber"
                  unoptimized
                  className="img"
                />
              </div>
            </div>
          </div>

          <div className="member-pic">
            <Image
              src="/imgs/member.svg"
              width={300}
              height={300}
              alt="become-a-meber"
              unoptimized
            />
          </div>
        </div>
      </section>{" "}
      <section className="events">
        <div className="inner">
          <div className="event-content">
            {/* <i className="fas fa-calendar-alt"></i> */}
            <p className="">
              One <span className="fw-bold text-success">MEETING</span> can
              change it all.
            </p>
            <h2 className="fw-bold text-primary ">OUR EVENTS</h2>
            <p>
              We have more to do and welcome you to join us to achieve more.
            </p>
            <div className="bottom">
              <Link href="/events">
                <button className="btn btn-primary">View Events</button>
              </Link>
              <div className="bottom-img">
                <Image
                  src="/imgs/event.svg"
                  width="100%"
                  height="100%"
                  alt="become-a-meber"
                  unoptimized
                  className="img"
                />
              </div>
            </div>
          </div>

          <div className="event-pic">
            <Image
              src="/imgs/event.svg"
              width={300}
              height={300}
              alt="become-a-meber"
              unoptimized
            />
          </div>
        </div>
      </section>
      {/* <section className="events">
        <div className="inner">
          <div className="content">
            <i className="fas fa-calendar-alt"></i>
            <h6 className="fw-bold text-secondary">OUR EVENTS</h6>
            <p>
              Every year we have series of events scheduled to hold at different
              times of the year.{" "}
            </p>
            <Link href="/events">
              <button className="btn btn-primary">View Events</button>
            </Link>
          </div>

          <div className="member-pic">
            <Image
              src="/imgs/member.svg"
              width={300}
              height={300}
              alt="become-a-meber"
              unoptimized
            />
          </div>

          <hr />
          <div className="content">
            <i className="fas fa-images"></i>
            <h6 className="fw-bold text-secondary">OUR GALLERY</h6>
            <p>
              All our events are captured for all the right reasons. Visit our
              Media Gallery to see highlights of all events.
            </p>
            <Link href="/gallery">
              <button className="btn btn-primary">View Gallery</button>
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
}
