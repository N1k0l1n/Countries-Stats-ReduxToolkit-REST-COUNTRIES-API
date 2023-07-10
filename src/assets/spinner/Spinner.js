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
        <p>If this keeps loading, try again later</p>
      </div>
    </>
  )
}

export default Spinner;