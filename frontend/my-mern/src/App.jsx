import { useState, useEffect } from "react";

import "./App.css";
// import * as connectDB from "../../../backend/MongoDB/connection.database";
// import * as imageModel from "../../../backend/Model/image.model";
import connectDB from "./connect.db";
import imageModel from "./image.model";

function App() {
  const [imageInfo, setImageInfo] = useState();
  const [show, setShow] = useState(false);
  const [Sec, setSec] = useState();

  const [base64, setBase64] = useState(undefined);

  function showConsole() {
    var filesUploaded = document.getElementById("imageUploader");
    console.log(filesUploaded.files[0]);

    var fileReader = new FileReader();

    fileReader.onload = function (loadEvent) {
      console.log("The log is : " + loadEvent.target.result);
      var srcData = loadEvent.target.result; // <--- data: base64

      var newImage = document.createElement("img");
      newImage.src = srcData;
      newImage.width = 400;
      newImage.height = 400;
      newImage.marginTop = 20;
      setBase64(srcData);

      let divElement = document.getElementById("imgTest");
      divElement.innerHTML = "";
      divElement.appendChild(newImage);
    };
    fileReader.readAsDataURL(filesUploaded.files[0]);
  }

  const fetData = async () => {
    console.log(Sec);
    try {
      const response = await fetch(`http://localhost:8080/api/images`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();

      // console.log(data);
      const images = Object.values(data);
      console.log(images[0][0].imagebase);
      setImageInfo(images);
      console.log(typeof images);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setImageInfo([]);
    }
  };

  const start = async () => {
    const imageJson = {
      imagebase: base64,
      contentType: "image/png",
    };
    // await connectDB();
    // await imageModel.create(imageJson);

    try {
      const response = await fetch(`http://localhost:8080/api/images`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(imageJson),
      });

      if (!response.ok) {
        throw new Error("Failed to send data");
      }

      console.log("Image data successfully sent to the API");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const Operation = async () => {
      await fetData();
    };
    Operation();
  }, []);

  return (
    <div>
      <p>Hello world</p>

      <button onClick={() => setShow(true)}>Show Data</button>

      <div>
        {show &&
          imageInfo[0].map((eachData) => <img src={`${eachData.imagebase}`} />)}
      </div>

      <div>
        <label>Upload your image from below</label>
        <input id="imageUploader" type="file" onChange={() => showConsole()} />
        <div id="imgTest"></div>

        <button
          style={{ backgroundColor: "red", marginTop: "10px" }}
          onClick={start}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
