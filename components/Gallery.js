"use client";

import React from "react";
import Image from "next/image";

const Gallery = () => {
  return (
    <div id="gallery" className="container-fluid py-5" style={{ backgroundColor: "white" }}>
      <div className="text-center mb-5">
        <span className="text-uppercase" style={{ letterSpacing: "3px", fontSize: "12px", color: "#caa86a", fontWeight: "bold" }}>VISUAL JOURNEY</span>
        <h1 className="mt-2" style={{ fontFamily: "'Playfair Display', serif", fontSize: "48px" }}>
          The <span style={{ fontStyle: "italic", color: "#caa86a" }}>Gallery</span>
        </h1>
        <div style={{ width: "60px", height: "1px", backgroundColor: "#caa86a", margin: "15px auto" }}></div>
      </div>

      <div className="container">
        <div className="row g-3">
          {/* Custom Collage Layout */}
          <div className="col-lg-4">
            <div className="position-relative mb-3" style={{ height: "400px" }}>
              <Image src="/images/Outside.jpg.png" alt="Exterior" fill style={{ objectFit: "cover", borderRadius: "4px" }} />
            </div>
            <div className="position-relative" style={{ height: "250px" }}>
              <Image src="/images/reception.jpg.png" alt="Reception" fill style={{ objectFit: "cover", borderRadius: "4px" }} />
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="position-relative mb-3" style={{ height: "250px" }}>
              <Image src="/images/restro.jpg.png" alt="Restaurant" fill style={{ objectFit: "cover", borderRadius: "4px" }} />
            </div>
            <div className="position-relative" style={{ height: "400px" }}>
              <Image src="/images/terace2.jpg.png" alt="Terrace" fill style={{ objectFit: "cover", borderRadius: "4px" }} />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="position-relative mb-3" style={{ height: "300px" }}>
              <Image src="/images/banquet.jpg.png" alt="Banquet" fill style={{ objectFit: "cover", borderRadius: "4px" }} />
            </div>
            <div className="position-relative" style={{ height: "350px" }}>
              <Image src="/images/waitinghall.jpg.png" alt="Lounge" fill style={{ objectFit: "cover", borderRadius: "4px" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
