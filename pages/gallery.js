import React, { lazy } from "react";
import ImageGallery from "react-image-gallery";

const MyGallery = ({ images }) => {
  const mappedImages = [
    images.data.map((image) => {
      return {
        original: `http://localhost:1337${image.attributes.img.data.attributes.url}`,
        thumbnail: `http://localhost:1337${image.attributes.img.data.attributes.formats.thumbnail.url}`,
      };
    }),
  ];

  console.log(mappedImages);
  return (
    <div className="gallery">
      <ImageGallery items={mappedImages[0]} loading={lazy} infinite={false} />
    </div>
  );
};
export default MyGallery;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:1337/api/images/?populate=*");
  const images = await res.json();
  return {
    props: { images },
  };
}
