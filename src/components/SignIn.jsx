import React from 'react'
import {auth,provider} from '../firebaseConfig'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import {FcGoogle} from 'react-icons/fc'
import './SingIn.css'
import { useState ,useEffect} from 'react'
import { CiFacebook } from "react-icons/ci";
import { FaSquareGithub } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";

export const SignIn = () => {
const navigate=useNavigate()
const [isanimated,setIsAnimated]=useState(false)


const handleClick =async()=>{
   try{ 
   const result = await signInWithPopup(auth,provider)
        localStorage.setItem("email",result.user.email)
        navigate("/home")
    }catch(error){
            console.log(error)
    }

    
}
useEffect(()=>{
  const id=setTimeout(()=>{
      setIsAnimated(true)
  },500)
  return ()=>{
      clearTimeout(id)
  }

},[])

const animatedStyle={
  opacity: isanimated ? 1 : 0,
  position:'absolute',
  bottom:'70%',
  left:'50%',
  transform: `translate(-50%, -50%) ${isanimated ? 'translateX(0)' : 'translateX(-100)'}`,
  transition: 'opacity 1s, transform 1s'

}



  return (
    <>
    <div className='button-holder'>
        <h1 style={animatedStyle} className='text-gradient'>Kérlek jelentkezz be Google fiókoddal!</h1>
        <button onClick={handleClick}><FcGoogle />
            Google bejelentkezés
        </button>
       
        
        
        </div>
        <div className='social'>
        <span><a href="https://www.facebook.com/andris.torma" target='_blank'><CiFacebook className='fa' /></a></span>
            <span><a href="https://github.com/papafourteen" target='_blank'><FaSquareGithub className='fa'/></a></span>
            <span><a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fandristorma%3Figsh%3DMWpvMDVyYXl3MnVweQ%253D%253D%26utm_source%3Dqr%26fbclid%3DIwAR1lhD4sQsybjlzCvY6dMGHaBu_x6O3s5gC1VURQkHR4yfX0b5560yRBn6U&h=AT0tcO3gUcd8fQ2Vr4o3VJn08q9qaBWAecE9pHqEJ_DJG8CDp6HEQLndY3LuOeTnKkC7pB5ChyKpyf7IAgQKqRkrbjjxEr9sI4SloBwZvD0WuoaSdH_zgjX9JPfHUBNTvP88_b4At2Jd4lRFy5uS5Q" target='_blank'><BsInstagram className='fa'/></a></span>
        </div>
        </>
  )
}
