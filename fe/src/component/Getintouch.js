import React from 'react'
import gitimg from "./images/island.jpg"; // Importing video


const Getintouch = () => {
  return (
    <div style={{ position: 'relative', height: '80vh', width: '100vw', backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
      
      <img src={gitimg} alt="" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '80vh',
        width: '100vw',
        objectFit: 'cover',
        zIndex: -1
      }} />

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}
      >
        <hr />
        <div>
          <h1 className='heading-git'>Get In Touch</h1>
          <p className='sub-heading-git'>Feel free to contact me if you have travel questions, comments, or suggestions!
            I'll try to get back to you!</p>
            
        </div>
      </div>
      
    </div>
  )
}

export default Getintouch
