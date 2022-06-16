import React from "react";

const PagesTop = (props) => {
  return (
    <div className="page-top">
      <div
        className="title "
        style={{
          background: `url("${props.bg}"), rgba(6, 4, 29, 0.7)`,
          backgroundAttachment: "fixed",
          backgroundSize: "center",
          backgroundBlendMode: "multiply",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="title-text">
          <h1>{props.title}</h1>
          <p>{props.about}</p>
        </div>
      </div>
    </div>
  );
};

export default PagesTop;
