import React from "react";
import AWS from "aws-sdk";

AWS.config.region = "us-west-2";
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: "us-west-2:b40fb3fc-3d9b-4f46-a875-91faf89008e6",
});
const s3 = new AWS.S3({
  apiVersion: "2006-03-01",
  params: { Bucket: "fyxme-images" },
});
let imagesContainer;

//lead from azure
//https://fyxme.com/Gallery?f=9227ad0b-87d1-47a9-b31f-c76491580597&i=4aca6ee7-55d7-4136-8ca9-03182f0078b5-w640.jpg

//lead from AWS
//https://www.fyxme.com/Gallery?l=2b807e80-fa5b-11e9-803c-61d73801a483&i=ef67aae0-fa5a-11e9-803c-61d73801a483.jpeg||f725a1b0-fa5a-11e9-803c-61d73801a483.jpeg

const processPicture = (picture, success) => {
  s3.getSignedUrl(
    "getObject",
    { Bucket: "fyxme-images", Key: picture },
    (err, data) => {
      if (err) {
        console.log(err);
        alert("Error occurred while fetching the image \r\n" + picture);
      }

      success(data);
    }
  );
};

const processPictureAzure = (folder, image, success) => {
  success(
    `https://fyxmecstprdsto.blob.core.windows.net/tech/${folder}/${image}`
  );
};

export default class GalleryPage extends React.Component {
  state = {
    count: 0,
  };

  showImage = (url) => {
    let imageElement = document.createElement("img");
    imageElement.src = url;
    imageElement.setAttribute("style", "padding:20px;");

    imagesContainer.appendChild(imageElement);
  };

  componentDidMount = () => {
    let querystring = window.location.search;
    let lead, images;
    imagesContainer = document.getElementById("images");
    imagesContainer.setAttribute("style", "padding:10px;");

    const isAzure = querystring.indexOf("?f=") === 0;

    querystring = window.decodeURI(querystring);
    if (querystring) {
      // separator = window.encodeURI("||");
      lead = querystring.split("&")[0].replace(isAzure ? "?f=" : "?l=", "");
      images = querystring.split("&")[1].replace("i=", "").split("||");
      this.setState({ count: images.length, lead: lead });

      images.forEach((imageKey) => {
        if (!isAzure) processPicture(imageKey, this.showImage);
        else processPictureAzure(lead, imageKey, this.showImage);
      });
    }
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          backgroundColor: "#66bcf4",
          flexDirection: "column",
          padding: "4%",
          flexWrap: "wrap",
        }}
      >
        <p>Gallery</p>
        <p>Images Submitted: {this.state.count}</p>
        <p>Lead ID {this.state.lead}</p>
        <div id="images" />
      </div>
    );
  }
}
