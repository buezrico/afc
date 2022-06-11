import Head from "next/head";
import Image from "next/image";
import React from "react";
import axios from "axios";
import PagesTop from "../components/PagesTop";

const Events = ({ events }) => {
  return (
    <div className="events-page">
      <Head>
        <title>Our Events</title>
        <meta name="description" content="Awelga Female Connect Events" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <PagesTop
        bg="/imgs/eventsbg.png"
        title="Our Events"
        about="Stay Updated"
      />

      <div className="inner">
        <div className="upcoming-events ">
          <h4 className="title fw-bold text-secondary">UPCOMING EVENTS</h4>
          {events.data.length <= 0 ? (
            <h6>There are currently no upcoming events.</h6>
          ) : (
            <div className="events">
              {events.data
                .sort(
                  (a, b) =>
                    new Date(a.attributes.date) - new Date(b.attributes.date)
                )
                .filter((event) => {
                  const today = Date.now();
                  const currentDate = new Date(today);
                  const eventDate = new Date(event.attributes.date);

                  // console.log(currentDate.toLocaleDateString());
                  // console.log(eventDate.toLocaleDateString());

                  if (eventDate > currentDate) {
                    return event;
                  }
                })
                .map((event) => {
                  return (
                    <div className="event" key={event.id}>
                      <div className="event-img">
                        <Image
                          src={`http://localhost:1337${event.attributes.image.data.attributes.url}`}
                          // layout="fill"
                          style={{ borderRadius: "8px 8px 0 0" }}
                          width={300}
                          height={300}
                          alt="event-pic"
                          unoptimized
                        />

                        <div className="event-date">
                          <p>{event.attributes.date}</p>
                          {/* <p>{event.attributes.date.slice(8, 10)}</p>

                      <p>{event.attributes.date.slice(5, 7)}</p>

                      <p>{event.attributes.date.slice(0, 4)}</p> */}
                        </div>
                      </div>

                      <div className="event-details">
                        <h6 className="text-secondary">
                          {event.attributes.title}
                        </h6>

                        <div className="event-venue">
                          <small>
                            <i className="fas fa-map-marker-alt"></i>{" "}
                            {event.attributes.venue}
                          </small>
                          <small>
                            <i className="fas fa-clock"></i>{" "}
                            {event.attributes.time.slice(0, 5)}
                          </small>
                        </div>
                        <div className="event-description">
                          <p>{event.attributes.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
        <div className="past-events ">
          <h4 className="title fw-bold text-secondary">PAST EVENTS</h4>

          <div className="events">
            {events.data
              .sort(
                (a, b) =>
                  new Date(b.attributes.date) - new Date(a.attributes.date)
              )

              .filter((event) => {
                const today = Date.now();
                const currentDate = new Date(today);
                const eventDate = new Date(event.attributes.date);

                // console.log(currentDate.toLocaleDateString());
                // console.log(eventDate.toLocaleDateString());

                if (eventDate < currentDate) {
                  return event;
                }
              })
              .map((event) => {
                return (
                  <div className="event" key={event.id}>
                    <div className="event-img">
                      <Image
                        src={`http://localhost:1337${event.attributes.image.data.attributes.url}`}
                        // layout="fill"
                        style={{ borderRadius: "8px 8px 0 0" }}
                        width={300}
                        height={300}
                        alt="event-pic"
                        unoptimized
                      />

                      <div className="event-date">
                        <p>{event.attributes.date}</p>
                        {/* <p>{event.attributes.date.slice(8, 10)}</p>

                      <p>{event.attributes.date.slice(5, 7)}</p>

                      <p>{event.attributes.date.slice(0, 4)}</p> */}
                      </div>
                    </div>

                    <div className="event-details">
                      <h6 className="text-secondary">
                        {event.attributes.title}
                      </h6>

                      <div className="event-venue">
                        <small>
                          <i className="fas fa-map-marker-alt"></i>{" "}
                          {event.attributes.venue}
                        </small>
                        <small>
                          <i className="fas fa-clock"></i>{" "}
                          {event.attributes.time?.slice(0, 5)}
                        </small>
                      </div>
                      <div className="event-description">
                        <p>{event.attributes.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;

export async function getStaticProps() {
  const res = await fetch("http://localhost:1337/api/events/?populate=*");
  const events = await res.json();
  return {
    props: { events },
  };
}
