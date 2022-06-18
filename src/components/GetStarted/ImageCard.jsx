import React from "react";

/**
 * @param {string} image
 * @param {string} title
 * @param {string} text
 * @param {string} alt
 * @returns {JSX.Element}
 * @author David M.
 * @description ImageCard component para la sección de Get Started
 * @version 1.0.0
 * @kind function
 * @name ImageCard
*/

function ImageCard({ image, title, text, alt }) {
  return (
    <>
      <div className="col-12 col-lg-4 col-md-4">
        <div className="">
          <div className="image-container-white">
            <img src={image} alt={alt || "someAlt"} />
          </div>
          <div className="step-content">
            <h6 className="fw-700">{title}</h6>
            <p className="color-dark">
              {text}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageCard;
