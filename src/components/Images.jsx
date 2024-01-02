import React from "react";
import { ref } from "firebase/storage";
import { stor } from "../firebaseConfig";
import { useState } from "react";
import { useEffect } from "react";
import { processImageList } from "../utils/imageList";
import "./Images.css";

export const Images = () => {
  const [imageurl, setImageUrl] = useState([]);
  const imagelistref = ref(stor, "images/");
  useEffect(() => {
    processImageList(imagelistref, setImageUrl);
  }, []);
  //console.log(imageurl);
  return (
    <div className="img-holder">
      {imageurl.map((url) => (
        <div key={url}>
            <img src={url} />
        </div>
      ))}
    </div>
  );
};
