"use client";

import React from "react";
import Image from "next/image";

const About = () => {
  const hotelFeatures = [
    { title: "Grand Banquet Hall", img: "/images/banquet.jpg.png", desc: "Perfect banquet hall for corporate events." },
    { title: "Open Terrace", img: "/images/terace2.jpg.png", desc: "Experience the Jaipur skyline under the stars." },
    { title: "Waiting Lounge", img: "/images/waitinghall.jpg.png", desc: "A cozy space designed for your comfort." },
    { title: "Royal Reception", img: "/images/reception.jpg.png", desc: "Welcoming you with traditional Rajasthani warmth." }
  ];

  return (
    <div id="about" className="container-fluid py-5" style={{ backgroundColor: "white" }}>
      <div className="text-center mb-5">

        <p style={{ color: "#6d5114ff", letterSpacing: "15px", textTransform: "uppercase", fontSize: "36px" }}>
          THE INN EXPERIENCE
        </p>
        <div style={{ width: "40px", height: "2px", backgroundColor: "#b19470", margin: "20px auto" }}></div>
        <p style={{ fontSize: "16px", color: "#444", lineHeight: "1.8", textAlign: "center", maxWidth: "750px", margin: "25px auto 0" }}>
          Ananta Inn is a comfortable hotel in Lal Kothi Jaipur offering well-furnished rooms, modern amenities, and excellent hospitality.
        </p>
      </div>

      <div className="row g-4">
        {hotelFeatures.map((item, index) => (
          <div className="col-md-6 col-lg-3" key={index}>
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "15px",
                height: "400px",
                boxShadow: "0 10px 20px rgba(0,0,0,0.08)"
              }}
            >
              <Image
                src={item.img}
                alt={item.title}
                fill
                style={{ objectFit: "cover" }}
              />
              <div style={{
                position: "absolute",
                bottom: "0",
                left: "0",
                width: "100%",
                padding: "25px",
                background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
                color: "white"
              }}>
                <h4 style={{ fontWeight: "400", fontSize: "20px", marginBottom: "5px" }}>{item.title}</h4>
                <p style={{ fontSize: "13px", opacity: "0.8", fontWeight: "300", margin: "0" }}>{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;