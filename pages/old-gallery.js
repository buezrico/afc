import Head from "next/head";
import Image from "next/image";
import React from "react";
import PagesTop from "../components/PagesTop";

const Gallery = ({ images }) => {
  const getImg = (attributes) => {
    const x = 10;
  };

  return (
    <div className="gallery">
      <Head>
        <title>Our Gallery</title>
        <meta name="description" content="Awelga Female Connect Gallery" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      {/* <PagesTop
        bg="/imgs/eventsbg.png"
        title="Our Gallery"
        about="We create amazing memories through pictures"
      /> */}

      <div className="inner">
        {/* <h6 className="fw-bold text-secondary">
          Awelga Female Connect in pictures
        </h6> */}

        <div className="gallery-wrapper">
          <div className="view-box"></div>
          <div className="imgs-box">
            {images.data
              //   .sort(
              //     (a, b) =>
              //       new Date(b.attributes.img.data.attributes.createdAt) -
              //       new Date(a.attributes.img.data.attributes.createdAt)
              //   )
              .map((image) => {
                return (
                  <div
                    className="gallery-img"
                    key={image.id}
                    onClick={() =>
                      getImg(image.attributes.img.data.attributes.url)
                    }
                  >
                    {/* <Image
                  src={`http://localhost:1337${image.attributes.img.data.attributes.url}`}
                  // width={image.attributes.img.data.attributes.width}
                  // height={image.attributes.img.data.attributes.height}
                  width="100%"
                  height="100%"
                  layout="fill"
                  // height={300}
                  alt="gallery-img"
                  objectFit="cover"
                /> */}

                    <img
                      src={`http://localhost:1337${image.attributes.img.data.attributes.url}`}
                      alt=""
                      //   style={{ width: "100%" }}
                      loading="lazy"
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:1337/api/images/?populate=*");
  const images = await res.json();
  return {
    props: { images },
  };
}
