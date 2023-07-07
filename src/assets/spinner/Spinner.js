import React from 'react'
import spinnerImg from '../loading.gif'

const Spinner = () => {
  return (
    <>
      <div>
        <img 
        src={spinnerImg} 
        alt="loading" 
        className="d-block m-auto"
        style={{width:'200px'}}
        />
      </div>
    </>
  )
}

export default Spinner;