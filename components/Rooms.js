"use client";

import React, { useState } from "react";
import Image from "next/image";

const rooms = "/images/delux-room.jpg.png";
const rooms1 = "/images/delux-room2.jpg.png";
const rooms2 = "/images/delux-room3.jpg.png";
const rooms3 = "/images/delux-room4.jpg.png";
const rooms4 = "/images/non-deluxroom.jpg.png";
const rooms5 = "/images/non-deluxroom2.jpg.png";
const rooms6 = "/images/non-deluxroom3.jpg.png";
const Tripplebed1 = "/images/tripplebed.jpg.png";

/**
 * @param {{ limit?: number | null }} props
 */
const Rooms = ({ limit = null }) => {
  const [filter, setFilter] = useState("All");

  const roomData = [
    { title: "Double Bed Room", price: "1500", type: "Double", img: rooms },
    { title: "Double Bed Room", price: "1500", type: "Double", img: rooms1 },
    { title: "Double Bed Room - Single", price: "1800", type: "Single", img: rooms2 },
    { title: "Double Bed Room - Single", price: "1800", type: "Single", img: rooms3 },
    { title: "Double + Double", price: "2300", type: "Combo", img: rooms4 },
    { title: "Double + Double", price: "2300", type: "Combo", img: rooms5 },
    { title: "Family Room", price: "2800", type: "Family", img: Tripplebed1 },
    { title: "Family Room", price: "2800", type: "Family", img: rooms },
    { title: "Family Room", price: "2800", type: "Family", img: rooms1 },
  ];

  const filteredRooms = filter === "All"
    ? (limit ? roomData.slice(0, limit) : roomData)
    : roomData.filter(room => room.type === filter);

  return (
    <div id="rooms" className="container-fluid py-5" style={{ background: "white", color: "black" }}>
      <div className="text-center mb-4">
        <h1 style={{ letterSpacing: "8px", fontWeight: "300" }}>ROOMS & SUITES</h1>
        <div style={{ width: "50px", height: "1px", backgroundColor: "#caa86a", margin: "15px auto" }}></div>

        <div className="d-flex justify-content-center flex-wrap gap-2 mt-4">
          {["All", "Double", "Single", "Combo", "Family"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                background: filter === cat ? "#caa86a" : "transparent",
                color: filter === cat ? "black" : "#caa86a",
                border: "1px solid #caa86a",
                padding: "8px 20px",
                fontSize: "12px",
                letterSpacing: "2px",
                transition: "0.3s",
                textTransform: "uppercase",
                cursor: "pointer"
              }}
            >
              {cat === "Combo" ? "Double + Double" : cat === "Single" ? "Double - Single" : cat}
            </button>
          ))}
        </div>
      </div>

      <div className="container mt-5">
        <div className="row g-4 justify-content-center">
          {filteredRooms.map((room, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div
                className="card bg-white border-0 shadow-lg"
                style={{ borderRadius: "15px", overflow: "hidden", transition: "all 0.3s ease" }}
              >
                {/* Image Container with Zoom Effect */}
                <div style={{ height: "220px", position: "relative", overflow: "hidden" }}>
                  <Image
                    src={room.img}
                    alt={`${room.title} at Ananta Inn hotel in Lal Kothi Jaipur`}
                    fill
                    style={{
                      objectFit: "cover",
                      transition: "transform 0.5s ease"
                    }}
                    className="hover-zoom"
                  />
                </div>

                <div className="card-body p-4 text-center">
                  <h5 style={{ fontWeight: "500", fontSize: "18px", color: "#333" }}>{room.title}</h5>
                  <p style={{ fontSize: "12px", color: "#777" }}>
                    Comfortable stay in Lal Kothi Jaipur
                  </p>
                  <p style={{ color: "#caa86a", fontWeight: "bold", fontSize: "16px" }}>₹{room.price} / Night</p>

                  <div className="small text-muted mb-3 d-flex justify-content-center gap-2">
                    <span>• WiFi</span>
                    <span>• AC</span>
                    <span>• Service</span>
                  </div>

                  <a
                    href={`https://wa.me/918130810918?text=${encodeURIComponent(
                      `Dear Reservations Team,\n\nI would like to request a booking for the ${room.title}. Please let me know the availability for my stay. Thank you!`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm w-100 book-btn"
                    style={{
                      border: "1px solid #caa86a",
                      color: "#caa86a",
                      borderRadius: "0",
                      fontWeight: "500",
                      transition: "0.3s",
                      display: "block",
                      textDecoration: "none"
                    }}
                  >
                    BOOK NOW
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .hover-zoom:hover {
          transform: scale(1.1);
        }
        .book-btn:hover {
          background-color: #caa86a !important;
          color: white !important;
        }
      `}</style>
    </div>
  );
};

export default Rooms;