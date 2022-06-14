import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import axios from "axios";
import PagesTop from "../components/PagesTop";

const Events = ({ events }) => {
  const [showPastEvents, setShowPastEvents] = useState(false);
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

      {/* <div className="inner">
        <div className="upcoming-events ">
          <h4 className="title fw-bold">UPCOMING EVENTS</h4>
          {events.data.length <= 0 ? (
            <h6 className="text-light">
              There are currently no upcoming events.
            </h6>
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
                          style={{ borderRadius: "8px 8px 0 0" }}
                          width={300}
                          height={300}
                          alt="event-pic"
                          unoptimized
                        />

                        <div className="event-date">
                          <p>{event.attributes.date}</p>
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

        <div
          className={
            showPastEvents ? "d-none" : "d-flex justify-content-center"
          }
          onClick={() => setShowPastEvents(true)}
        >
          <button className="btn btn-primary">View Past Events</button>
        </div>
        <div className={showPastEvents ? "d-block" : "d-none"}>
          <h4 className="title fw-bold">PAST EVENTS</h4>

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
      </div> */}
    </div>
  );
};

export default Events;

// export async function getStaticProps() {
//   const res = await fetch("http://localhost:1337/api/events/?populate=*", {
//     headers: {
//       Authorization: `bearer b5f5cfe5b0eebfef12d67622de219f789eac040e8442676e9ae1d78286d4a61836261551a3cc43b824a4616697507a5e25891e6a1313c64d9bacf8bfa15efa0a830645fcbe75b333efdad83a6612ef3720b36f7a62bd0a2148f1cda26433c237fc4dd8528e4a5e2a6697b5ccf9599981246b10c059b4d92282009629e46064f2`,
//     },
//   });
//   const events = await res.json();
//   return {
//     props: { events },
//   };
// }
