import React from "react";
import { useState} from "react";
import { stor } from "../firebaseConfig";
import './Home.css'
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { v4 } from "uuid";
import { Header } from "./Header";
import { Images } from "./Images2";
import {signOut} from 'firebase/auth'
import {auth} from '../firebaseConfig'

import {QueryClient,QueryClientProvider} from 'react-query'
import { useNavigate } from "react-router-dom";
const queryClient=new QueryClient()

export const Home = () => {
  const [image, setImage] = useState(null)
  const [hiba, setHiba]=useState(null)

  const [isUploaded,setIsUploaded]=useState(false)
 const  navigate=useNavigate()
 
 const types = ['image/png', 'image/jpeg'];

 const handleChange = (e) => {
  let selected = e.target.files[0];

  if (selected && types.includes(selected.type)) {
    setImage(selected);
    setHiba(null)
  } else {

    setImage(null)
    setHiba('Kérlek válasz megfelelő file típust (png vagy jpg)')
  }
}


  const uploadFile = () => {
    setIsUploaded(false)
    if (image == null) return;
    const imageRef = ref(stor, `images/${image.name + v4()}`);
    uploadBytes(imageRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        console.log("image uploaded successfully:", url);
        setIsUploaded(true)
      });
    });
  };

  const handleLogout =()=>{
    signOut(auth)
    localStorage.removeItem('email')
    navigate("/")

}
  
  console.log(isUploaded)
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <div className="App">
        
        <div className="input-holder">
        <input
          type="file"
          name=""
          id=""
          onChange={handleChange}
          
        />
        <p>Válasz egy képet</p>
        </div>
        { hiba && <div className="error">{ hiba }</div>}
        { image && <div className="ok">{ image.name }</div> }
        
        <button onClick={uploadFile}>Upload The Image</button>
   
        <Images isUploaded={isUploaded} setIsUploaded={setIsUploaded}/>
    
        <button onClick={handleLogout}>
            Kijeletkezés
        </button>
      </div>
    </QueryClientProvider>
  );
};
