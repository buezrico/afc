import Head from "next/head";
import React, { lazy } from "react";
import ImageGallery from "react-image-gallery";
import PagesTop from "../components/PagesTop";

const URL = process.env.STRAPIBASEURL;

const MyGallery = ({ images }) => {
  const mappedImages = [
    images.data
      .sort((a, b) => b.id - a.id)
      .map((image) => {
        return {
          original: `${image.attributes.img.data.attributes.url}`,
          thumbnail: `${image.attributes.img.data.attributes.formats.thumbnail.url}`,
        };
      }),
  ];

  console.log(mappedImages);
  return (
    <div className="gallery">
      <Head>
        <title>Awelga Female Connect</title>
        <meta name="description" content="Awelga Female Connect Gallery" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <PagesTop
        bg="/imgs/aboutbg.png"
        title="Our Gallery"
        about="We create amazing memories through pictures.."
      />

      <div className="inner">
        <ImageGallery
          items={mappedImages[0]}
          lazyLoading={true}
          autoPlay={true}
          showBullets={true}
          onErrorImageURL="/imgs/afclogo.png"
        />
      </div>
    </div>
  );
};
export default MyGallery;

export async function getServerSideProps() {
  const res = await fetch(
    "https://afc-admin.herokuapp.com/api/images/?populate=*"
  );
  const images = await res.json();
  return {
    props: { images },
  };
}
