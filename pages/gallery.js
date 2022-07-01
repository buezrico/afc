import Head from "next/head";
import React, { lazy } from "react";
import ImageGallery from "react-image-gallery";

const URL = process.env.STRAPIBASEURL;

const MyGallery = ({ images }) => {
  const mappedImages = [
    images.data.map((image) => {
      return {
        original: `https://conservative-mountie-47338.herokuapp.com${image.attributes.img.data.attributes.url}`,
        thumbnail: `https://conservative-mountie-47338.herokuapp.com${image.attributes.img.data.attributes.formats.thumbnail.url}`,
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

      <ImageGallery items={mappedImages[0]} loading={lazy} infinite={false} />
    </div>
  );
};
export default MyGallery;

export async function getServerSideProps() {
  const res = await fetch(
    "https://conservative-mountie-47338.herokuapp.com/api/images/?populate=*"
  );
  const images = await res.json();
  return {
    props: { images },
  };
}
