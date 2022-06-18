import React from "react";
import AWS from "aws-sdk";
import { AppContext } from "./ContextProvider";
import ReactGA from "react-ga";
ReactGA.initialize("UA-69662644-1");

const uuidv1 = require("uuid/v1");
AWS.config.region = "us-west-2";
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: "us-west-2:b40fb3fc-3d9b-4f46-a875-91faf89008e6",
});
var apigClientFactory = require("aws-api-gateway-client").default;
const config = {
  invokeUrl:
    "https://mwniono2j8.execute-api.us-west-2.amazonaws.com/Development",
};

//THIS SHOULD BE MOVED TO A COMPONENTS FOLDER

function openFileDialog() {
  document.getElementById("fileInput").click();
}

const ImageUploaderTrigger = () => {
  return (
    <div className="step1Link" onClick={openFileDialog}>
      <img src="images/image-add-button.png" alt="add-btn" />
      CLICK HERE TO ADD PICTURES
    </div>
  );
};

const ImageUploader = ({ processPicture }) => {
  return (
    <div style={{ height: 0, overflow: "hidden" }}>
      <input
        type="file"
        multiple
        id="fileInput"
        name="fileInput"
        onChange={processPicture}
        accept="image/*"
      />
    </div>
  );
};

class ImagesComponent extends React.Component {
  static contextType = AppContext;

  processPicture = (capture) => {
    const addPicture = (picName) => {
      let newPictures = this.context.state.pictures;
      newPictures.push(picName);
      this.context.setPictures(newPictures);
      ReactGA.event({
        category: "event",
        action: `form_uploaded_picture`,
      });
    };

    const removePicture = (picName) => {
      let newPictures = this.context.state.pictures;
      newPictures = newPictures.filter((picture) => picture !== picName);
      this.context.setPictures(newPictures);
    };

    Object.values(capture.target.files).forEach((plainFile) => {
      const type = plainFile.type;
      const reader = new FileReader();
      const uuid = uuidv1();
      console.log(uuid);

      reader.readAsDataURL(plainFile);
      reader.onload = function () {
        let thumbnailContainer = document.getElementById("thumbnails");

        if (
          thumbnailContainer.childNodes[0].id === "demo" &&
          thumbnailContainer.children[0].style.display !== "none"
        )
          thumbnailContainer.children[0].style.display = "none";

        let thumbnail = document.createElement("img");
        let thumbnailDisplay = document.createElement("div");
        let thumbnailCloseButton = document.createElement("span");

        thumbnailDisplay.className = "thumbnailDisplay";

        thumbnailCloseButton.className = "thumbnailCloseButton";
        thumbnailCloseButton.innerText = "x";
        thumbnailCloseButton.onclick = () => {
          thumbnailDisplay.remove();
          removePicture(uuid + "." + type.replace("image/", ""));

          if (
            thumbnailContainer.childNodes.length === 1 &&
            thumbnailContainer.childNodes[0].id === "demo"
          ) {
            document.getElementById("continuePhotos").classList.add("disabled");
            thumbnailContainer.children[0].style.display = "block";
          }
        };

        thumbnail.className = "thumbnail";
        thumbnail.src = reader.result;

        thumbnailDisplay.appendChild(thumbnailCloseButton);
        thumbnailDisplay.appendChild(thumbnail);
        thumbnailContainer.appendChild(thumbnailDisplay);

        const apigClient = apigClientFactory.newClient(config);
        const parameters = {
          Accept: "application/json",
          "Content-Type": type,
          "Access-Control-Allow-Origin": "*",
        };

        const body = {};
        body["operation"] = "resize";
        body["base64Image"] = reader.result.split(",")[1];
        body["outputExtension"] = type.replace("image/", "");
        body["uuid"] = uuid;

        document.getElementById("continuePhotos").classList.remove("disabled");

        apigClient
          .invokeApi(null, "/", "POST", parameters, body)
          .then((response) => {
            if (thumbnailDisplay) thumbnail.style.outline = "solid green 2px";
            addPicture(uuid + "." + body.outputExtension);
          })
          .catch((error) => {
            if (thumbnailDisplay) thumbnail.style.outline = "solid red 2px";

            ReactGA.event({
              category: "event",
              action: `form_uploaded_picture_failed`,
            });
          });
      };

      reader.onerror = function () {
        console.log("Error ");
      };
    });
  };

  render() {
    return (
      <div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div id="thumbnails" className="thumbnailsContainer">
            <div id="demo" className="demo">
              <img
                src="images/photo.png"
                className="instructionsImage"
                onClick={openFileDialog}
                alt="photos"
              />
            </div>
          </div>
          <ImageUploader processPicture={this.processPicture} />
        </div>
        <ImageUploaderTrigger />
      </div>
    );
  }
}

export default ImagesComponent;
