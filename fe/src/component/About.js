import React from 'react'
import aboutme from "./images/aboutme.jpg"

const About = () => {
  return (
    <div className="about-container">
      <hr />
      <h1 className='heading-about'>About me</h1>
      <hr />

      <div className='about'>
        <div className="about-item text">
        Welcome to ExploreWithAlex! I'm Alex Johnson, the voice behind this blog where I share my passion for travel and adventure. With a love for discovering hidden gems and exploring new cultures, I aim to offer insightful and engaging content that resonates with fellow wanderlust enthusiasts. My journey into blogging began with a desire to connect, inspire, and provide value through my experiences and tips on travel destinations. I hope you find my posts both informative and enjoyable. Feel free to connect with me on Instagram or drop me a line at alex.johnson@example.com. Thanks for stopping by!
        </div>
        <div className="about-item aboutme-img">
          <img src={aboutme} alt="" className='img-aboutme'/>
        </div>
      </div>
      
    </div>

  )
}

export default About
