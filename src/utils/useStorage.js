import { useState,useEffect } from "react";
import {stor,db} from '../firebaseConfig'
import {ref,getDownloadURL,uploadBytes,} from 'firebase/storage'

import{collection} from 'firebase/firestore'

export const useStorage = (file)=>{
    const [url,setUrl]=useState(null)
   
    useEffect(()=>{
        const storageRef= ref(stor,file.name)
        const collectionRef = collection(db,'images')
        uploadBytes(storageRef,file)
        getDownloadURL(storageRef)
            
            setUrl(url)
            

           
 
            
       
        
      

    },[file])

    
    console.log(url)
  

    return {url}
}