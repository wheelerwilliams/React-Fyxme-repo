import React from "react";

/**
 * @param {string} image
 * @param {string} title
 * @param {string} text
 * @param {string} alt
 * @returns {JSX.Element}
 * @author David M.
 * @description ImageCard component para la sección de How it works
 * @version 1.0.0
*/

function ImageCard({ image, title, text, alt }) {
  return (
    <>
      <div className="col-lg-6 col-md-6 col-xl-6">
        <div className="media">
          <div className="media-body">
            <img src={image} alt={alt || "someAltText"} />
            <p>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageCard;
