import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
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

      let divElement = document.getElementById("imgTest");
      divElement.innerHTML = "";
      divElement.appendChild(newImage);
    };
    fileReader.readAsDataURL(filesUploaded.files[0]);
  }
  return (
    <div>
      <label>Upload your image from below</label>
      <input id="imageUploader" type="file" onChange={() => showConsole()} />
      <div id="imgTest"></div>
    </div>
  );
}

export default App;
