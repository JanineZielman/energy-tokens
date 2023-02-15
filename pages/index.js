import React, {useEffect, useState} from "react"

const Index = () => {

  return (
    <div className="floating-nfts">
      <div className="gradient"></div>
      <video id="bgVideo" preload="true" autoPlay loop muted>
        <source src="/nfts.mp4" type="video/mp4" /> 
      </video>
      <div className="step1">
        <h1>START <br/>JOURNEY</h1>
        <p>Fill in your email to create a wallet to collect your digital artwork:</p>
        <input
          type="email"
          placeholder="Your Email Address"
        />
        <div className="login-link">
          <img src="/triangle.svg"/>
        </div>
      </div>
    </div>
  )
}

export default Index
