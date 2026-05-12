"use client";

import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div
      id="home"
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        overflow: "hidden"
      }}
    >
      <Image
        src="/images/terace.jpg.png"
        alt="Hotel Ananta Inn Terrace"
        fill
        priority
        style={{ objectFit: "cover", zIndex: -1 }}
      />
      <div 
        style={{ 
          position: "absolute", 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 0
        }}
      />
      
      <div style={{ padding: "20px", position: "relative", zIndex: 1 }}> 
        <h1 
          style={{ 
            fontSize: "51px", 
            letterSpacing: "6px", 
            textTransform: "uppercase",
            fontWeight: "bold",
            margin: "0 0 10px 0",
            lineHeight: "1.3" 
          }}
        >
          Luxury Stay at Ananta Inn Jaipur<br/>
        </h1>
        <p 
          style={{ 
            fontSize: "21px", 
            letterSpacing: "3px",
            textTransform: "uppercase",
            fontWeight: "250", 
            opacity: "0.7" 
          }}
        >
          Modern rooms, warm hospitality, unforgettable experience
        </p>
      </div>
    </div>
  );
};

export default Hero;