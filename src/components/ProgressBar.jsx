import React from 'react'
import { useStorage } from '../utils/useStorage'

export const ProgressBar = ({file,setFile}) => {
    const {url}=useStorage(file)
   
    

  return (
    <div className='progress-bar'>
                progress
    </div>
  )
}
