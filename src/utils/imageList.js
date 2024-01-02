import {getDownloadURL, listAll,ref } from "firebase/storage";
import { stor } from "../firebaseConfig";

export const processImageList=async (imagelistref,callback)=>{
    try {
      const response = await listAll(imagelistref);
      
      for (const item of response.items) {
        const url = await getDownloadURL(item);
        callback((prev) => [...prev, url]);
      }
    } catch (error) {
      console.error("Hiba történt:", error);
    }
  }


  export const getImageList=async ()=>{
    const imagelistref = ref(stor, "images/");
    try {
      const response = await listAll(imagelistref);
      let urls=[]
      for (const item of response.items) {
        const url = await getDownloadURL(item);
        urls.push(url)
      }
      return urls
    } catch (error) {
      console.error("Hiba történt:", error);
    }
  }