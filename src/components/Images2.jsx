import React from "react";
import { getImageList } from "../utils/imageList";
import "./Images.css";
import {motion} from 'framer-motion'
import { useQuery, useQueryClient } from "react-query";

export const Images = ({ isUploaded, setIsUploaded }) => {
  const { data, status, isLoading, isError } = useQuery("images", getImageList);
  const clientQuery = useQueryClient();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data!</div>;
  }
  status == "success" && console.log(data);

  if (isUploaded) {
    clientQuery.invalidateQueries("images"); //frissit
    setIsUploaded(false);
  }

  return (
    <div className="img-holder">
      {status == "success" &&
        data.map((url) => (
          <motion.div key={url}>
            <motion.img key={url} src={url}
            whileHover={{scale:1.5}}
             />
             
          </motion.div>
        ))}
    </div>
  );
};
