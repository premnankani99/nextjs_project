"use client";

import React from "react";
import 'remixicon/fonts/remixicon.css';
const Footer = () => {
  return (
    <footer className="py-5" style={{ background: "LightSeaGreen", color: "white" }}>
      <div className="container">
        <div className="row align-items-center">
          
         
          <div className="col-md-4 text-center text-md-start">
            <h2 style={{ letterSpacing: "6px", fontWeight: "300", margin: "0", color: "white" }}>
              ANANTA INN
            </h2>
            <p style={{ fontSize: "12px", letterSpacing: "2px", opacity: "0.9", marginTop: "5px", textTransform: "uppercase" }}>
              The Luxury Heritage stay
            </p>
          </div>

       
          <div className="col-md-4 text-center">
            <div style={{ fontSize: "14px", fontWeight: "400", color: "rgba(255,255,255,0.9)" }}>
              <p className="mb-1 fw-semibold">Lal Kothi, Tonk Road Near Motisons Jewllers showroom, Jaipur</p>
              <p className="mb-1 fw-semibold">yashhotels2020@gmail.com</p>
              <p className="mb-0 fw-semibold">+91 8130810918</p>
            </div>
          </div>

          
          <div className="col-md-4 text-center text-md-end mt-4 mt-md-0">
            <div style={{ display: "flex", justifyContent: "center", gap: "20px", justifyContent: "md-end" }}>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                <i className="ri-facebook-fill" style={iconStyle}></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                <i className="ri-instagram-line" style={iconStyle}></i>
              </a>
              <a href="https://wa.me/918130810918" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                <i className="ri-whatsapp-line" style={iconStyle}></i>
              </a>
            </div>
          </div>

        </div>

      
        <div className="mt-5 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.2)", display: "flex", justifyContent: "space-between", fontSize: "11px", color: "rgba(255,255,255,0.7)", letterSpacing: "1px" }}>
          <span>© 2026 ANANTA INN</span>
          <span style={{ textTransform: "uppercase" }}>Handcrafted Experience</span>
        </div>
      </div>
    </footer>
  );
};


const iconStyle = {
  fontSize: "20px",
  color: "LightSeaGreen",
  background: "white",
  padding: "10px",
  borderRadius: "50%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "40px",
  height: "40px",
  transition: "all 0.3s ease",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
};

export default Footer;