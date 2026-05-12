"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import 'remixicon/fonts/remixicon.css';

const amerfort = "/images/AmerFort.jpg.png";
const nahargarh = "/images/NargarhFort.jpg.png";
const jalMahal = "/images/JalMahel.jpg.png";
const hawaMahal = "/images/HawaMahel.jpg.png";
const cityPalace = "/images/CityPalace.jpg.png";
const albertHall = "/images/Alberthall.jpg.png";
const jantarMantar = "/images/JantarMantar.jpg.png";
const birlaMandir = "/images/BirlaMandir.jpg.png";
const sisodiaRani = "/images/SisodiyaRaniBagh.jpg.png";

const Places = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const places = [
    { title: "Amer Fort", img: amerfort, dist: "11.5 km", desc: "A majestic UNESCO World Heritage site known for its artistic Hindu style elements." },
    { title: "Nahargarh Fort", img: nahargarh, dist: "14.2 km", desc: "Perched on the edge of the Aravalli Hills, offering breathtaking panoramic views." },
    { title: "Jal Mahal", img: jalMahal, dist: "9.8 km", desc: "An architectural marvel appearing to float in the center of Man Sagar Lake." },
    { title: "Hawa Mahal", img: hawaMahal, dist: "5.2 km", desc: "The iconic 'Palace of Winds' featuring 953 intricate windows for royal ladies." },
    { title: "City Palace", img: cityPalace, dist: "4.8 km", desc: "The historic seat of the Maharaja of Jaipur, blending Mughal and Rajput architecture." },
    { title: "Albert Hall", img: albertHall, dist: "3.5 km", desc: "The oldest museum of Rajasthan, a fine example of Indo-Saracenic architecture." },
    { title: "Jantar Mantar", img: jantarMantar, dist: "4.9 km", desc: "An astronomical observatory featuring the world’s largest stone sundial." },
    { title: "Birla Mandir", img: birlaMandir, dist: "2.1 km", desc: "A stunning white marble temple dedicated to Lord Vishnu and Goddess Lakshmi." },
    { title: "Sisodia Rani Bagh", img: sisodiaRani, dist: "8.5 km", desc: "A beautiful multi-tiered garden retreat featuring cascading fountains." }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        return prevIndex >= places.length - 3 ? 0 : prevIndex + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [places.length]);

  return (
    <>
      <style jsx>{`
        .places-section { 
          background-color: #ffffff; 
          padding: 60px 0; 
          overflow: hidden; 
        }

        .places-slider-container {
          width: 100%;
          overflow: hidden;
          position: relative;
          padding: 20px 0;
        }

        .places-header {
          margin-bottom: 50px;
          position: relative;
        }

        .places-header .subtitle {
          color: #8b6e40;
          text-transform: uppercase;
          letter-spacing: 6px; 
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 12px;
          display: block;
        }

        .places-header h2 { 
          font-family: serif;
          font-size: 3rem;
          font-weight: 700; 
          color: #1a1a1a; 
          text-transform: capitalize;
          letter-spacing: 1px;
          margin-bottom: 0;
        }

        .places-header h2 span {
          font-style: italic;
          color: #8b6e40;
          font-weight: 500;
          margin-left: 10px;
        }

        .gold-divider { 
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin: 25px auto;
        }

        .gold-divider::before,
        .gold-divider::after {
          content: '';
          width: 80px;
          height: 1px;
          background: #8b6e40;
        }

        .gold-divider i {
          color: #8b6e40;
          font-size: 20px;
        }

        .places-header p.description { 
          color: #444; 
          letter-spacing: 1px; 
          font-size: 16px; 
          max-width: 650px;
          margin: 0 auto;
          font-style: italic;
          line-height: 1.6;
          font-weight: 400;
        }

        .places-track {
          display: flex;
          width: calc(300px * 18);
          transition: transform 0.8s ease;
        }

        .place-card-wrapper {
          width: 300px;
          padding: 10px;
          flex-shrink: 0;
        }

        .place-card { 
          position: relative; 
          height: 400px; 
          border-radius: 15px; 
          overflow: hidden; 
          border: 1px solid rgba(139, 110, 64, 0.2); 
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
          transition: all 0.5s ease;
        }

        .place-card:hover { 
          border-color: #8b6e40;
          box-shadow: 0 15px 30px rgba(139, 110, 64, 0.2);
        }

        .distance-tag { 
          position: absolute; 
          top: 15px; 
          left: 15px; 
          background: white; 
          padding: 5px 12px; 
          border-radius: 5px; 
          font-size: 11px; 
          font-weight: 700; 
          color: #1a1a1a; 
          z-index: 5; 
          border: 1px solid #8b6e40;
        }

        .place-overlay { 
          position: absolute; 
          bottom: 0; 
          left: 0; 
          width: 100%; 
          padding: 20px; 
          background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%); 
          color: white; 
          z-index: 2;
        }

        .place-overlay h4 { 
          font-size: 18px; 
          font-weight: 600; 
          margin: 0; 
          letter-spacing: 1px; 
          color: white;
        }
      `}</style>

      <section id="places" className="places-section">
        <div className="container">

          <div className="text-center mb-5 places-header">
            <span className="subtitle">Heritage & Culture</span>

            <h2>
              Nearby <span>Attractions</span>
            </h2>

            <div className="gold-divider">
              <i className="ri-shining-2-fill" aria-hidden="true"></i>
            </div>

            <p className="description">
              "Experience the timeless heritage of Jaipur, just a short drive from the comfort of Ananta Inn."
            </p>
          </div>

          <div className="position-relative">
            <div className="places-slider-container">

              <div
                className="places-track"
                style={{
                  transform: `translateX(-${currentIndex * 300}px)`
                }}
              >
                {places.map((place, index) => (
                  <div className="place-card-wrapper" key={index}>

                    <div className="place-card">

                      <div className="distance-tag">
                        <i className="ri-map-pin-2-fill" aria-hidden="true"></i> {place.dist}
                      </div>

                      <Image
                        src={place.img}
                        alt={`Visit ${place.title} near Hotel Ananta Inn Jaipur`}
                        fill
                        sizes="300px"
                        style={{ objectFit: "cover" }}
                      />

                      <div className="place-overlay">
                        <h4>{place.title}</h4>
                        <p style={{ fontSize: "12px", opacity: 0.9, margin: 0 }}>{place.desc}</p>
                      </div>

                    </div>

                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Places;