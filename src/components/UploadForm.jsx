import React, { useState } from 'react'
import { ProgressBar } from './ProgressBar'

export const UploadForm = () => {

    const [file,setFile]=useState(null)
    const [error,setError]=useState(null)

    const types= ['image/png','image/jpeg']

const handleChange =(e)=>{
    let selected=e.target.files[0]
   

    if(selected && types.includes(selected.type)){
        setFile(selected);
        setError('');
    }else{
        setFile(null),
        setError('Kérlek válasz 1 képet (png/jpg)');
    }
}

  return (
    
    <form >
        <label>
        <input type="file" onChange={handleChange} />
        <span>+</span>
        </label>
        <div className='out'>
            {error && <div className='error'>{error}</div>}
            {file && <div>{file.name}</div>}
            {file && <ProgressBar  file={file} setFile={setFile}/>}
        </div>
    </form>
   
  )
}

