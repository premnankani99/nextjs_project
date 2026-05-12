"use client";

import React from "react";
import Image from "next/image";

const Amenities = () => {
  const amenityList = [
    { title: "Toiletries", img: "https://cdn-icons-png.flaticon.com/512/8171/8171061.png", desc: "Premium toiletries for your comfort and hygiene." },
    { title: "Coffee Kit", img: "https://cdn-icons-png.flaticon.com/512/2935/2935307.png", desc: "Enjoy complimentary tea and coffee anytime." },
    { title: "Tissue Box", img: "https://cdn-icons-png.flaticon.com/512/2740/2740039.png", desc: "Clean and hygienic tissue boxes available in every room." },
    { title: "Rooftop Banquet Hall", img: "https://cdn-icons-png.flaticon.com/512/10278/10278351.png", desc: "Elegant rooftop banquet hall for parties and special occasions." },
    { title: "Breakfast & Lunch", img: "https://cdn-icons-png.flaticon.com/512/17542/17542275.png", desc: "Enjoy freshly prepared breakfast, lunch and dinner with a variety of tasty dishes." },
    { title: "CCTV Security", img: "https://cdn-icons-png.flaticon.com/512/2642/2642651.png", desc: "Enhanced security with 24/7 CCTV monitoring." },
    { title: "Fire Safety", img: "https://cdn-icons-png.flaticon.com/512/1973/1973044.png", desc: "Modern fire safety system for emergency protection." },
    { title: "Rooftop Projector", img: "https://cdn-icons-png.flaticon.com/512/18091/18091294.png", desc: "Enjoy stunning views with our rooftop projector." },
    { title: "Free WiFi", img: "https://cdn-icons-png.flaticon.com/512/93/93158.png", desc: "Enjoy fast and reliable WiFi access throughout your stay." },
  ];

  return (
    <div id="amenities" className="container py-5">
      <h2 className="text-center mb-5" style={{ letterSpacing: "3px", fontWeight: "500" }}>Our Hotel Amenities</h2>
      <p style={{ 
        fontSize: "15px", 
        color: "#555", 
        textAlign: "center", 
        maxWidth: "750px", 
        margin: "0 auto 30px" 
      }}>
        Ananta Inn offers modern hotel amenities in Lal Kothi Jaipur including free WiFi, 
        comfortable rooms, 24/7 security, and premium facilities to ensure a relaxing stay.
      </p>
      
      <div className="row text-center">
        {amenityList.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="p-4 shadow rounded bg-light amenity-card h-100">
              <div className="d-flex justify-content-center mb-3">
                <Image 
                  src={item.img} 
                  alt={item.title} 
                  width={50} 
                  height={50} 
                />
              </div>
              <h5 style={{ color: "black" }}>{item.title}</h5>
              <p className="text-muted small">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .amenity-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .amenity-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
        }
      `}</style>
    </div>
  );
};

export default Amenities;