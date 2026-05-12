"use client";

import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <div id="contact" style={{ backgroundColor: "white" }}>
      {/* Branded Section Header */}
      <div className="text-center pt-5 mb-4">
        <h1 style={{ letterSpacing: "8px", fontWeight: "300" }}>CONTACT US</h1>
        <div style={{ width: "50px", height: "1px", backgroundColor: "#caa86a", margin: "15px auto" }}></div>
      </div>

      <div className="container pb-5">
        <div className="row g-0 shadow-lg rounded overflow-hidden" style={{ border: "1px solid #eee" }}>
          {/* Map Column */}
          <div className="col-lg-6">
            <div style={{ height: "450px" }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.410769399435!2d75.8017993752236!3d26.89045087665977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db4272f9e1efd%3A0xc1a279eecf93c768!2sHotel%20Ananta%20Inn!5e0!3m2!1sen!2sin!4v1715482306789!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Info Column */}
          <div className="col-lg-6" style={{ backgroundColor: "#20b2aa", color: "white" }}>
            <div className="p-5">
              <h4 className="mb-5 fw-bold border-bottom pb-3" style={{ borderBottomColor: "rgba(255,255,255,0.2) !important" }}>Contact Info</h4>
              
              <div className="d-flex mb-4">
                <div 
                  className="rounded-circle bg-dark d-flex align-items-center justify-content-center" 
                  style={{ width: "40px", height: "40px", flexShrink: 0 }}
                >
                  <i className="ri-phone-fill text-white"></i>
                </div>
                <div className="ms-3">
                  <p className="mb-0 fw-bold">Phone</p>
                  <p className="mb-0 small">+91 81308 10918</p>
                  <p className="mb-0 small">+91 90018 91900</p>
                </div>
              </div>

              <div className="d-flex mb-4">
                <div 
                  className="rounded-circle bg-dark d-flex align-items-center justify-content-center" 
                  style={{ width: "40px", height: "40px", flexShrink: 0 }}
                >
                  <i className="ri-mail-fill text-white"></i>
                </div>
                <div className="ms-3">
                  <p className="mb-0 fw-bold">Email</p>
                  <p className="mb-0 small">booking@hotelanantainnjaipur.online</p>
                </div>
              </div>

              <div className="d-flex mb-4">
                <div 
                  className="rounded-circle bg-dark d-flex align-items-center justify-content-center" 
                  style={{ width: "40px", height: "40px", flexShrink: 0 }}
                >
                  <i className="ri-map-pin-2-fill text-white"></i>
                </div>
                <div className="ms-3">
                  <p className="mb-0 fw-bold">Address</p>
                  <p className="mb-0 small">
                    Plot No. 1-A, Everest Colony, Lalkothi, <br />
                    Near Motisons Jewellers, Tonk Road, <br />
                    Jaipur, Rajasthan 302015
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
