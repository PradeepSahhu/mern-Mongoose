import { useState } from "react";
import "./App.css";
import connectDB from "./connection.mongoose";
import imageSchema from "./mongoose.schema";

function App() {
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
      setBase64(srcData);

      let divElement = document.getElementById("imgTest");
      divElement.innerHTML = "";
      divElement.appendChild(newImage);
    };
    fileReader.readAsDataURL(filesUploaded.files[0]);
  }

  const start = async () => {
    try {
      await connectDB();
      // await imageSchema.deleteMany();
      console.log("Connection Establised");
      await imageSchema.create(base64);
      console.log("Successfully pushed data to the Mongoose Atlas");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <label>Upload your image from below</label>
      <input id="imageUploader" type="file" onChange={() => showConsole()} />
      <div id="imgTest"></div>

      <button onClick={start}>Submit</button>
    </div>
  );
}

export default App;
