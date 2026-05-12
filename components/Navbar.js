"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => {
    return pathname === path;
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Professional WhatsApp Message
  const whatsappMsg = encodeURIComponent(
    "Dear Reservations Team,\n\nI would like to request a booking at Hotel Ananta Inn. Please provide details regarding room availability and rates.\n\nThank you!"
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4 px-lg-5 py-3 sticky-top">
      <div className="container-fluid d-flex align-items-center justify-content-between p-0">
        
        {/* Logo */}
        <Link
          href="/"
          className="navbar-brand fw-bold d-flex align-items-center m-0"
          style={{ letterSpacing: "2px" }}
          onClick={closeMenu}
        >
          <Image
            src="https://cdn-icons-png.flaticon.com/512/235/235889.png"
            alt="hotel logo"
            width={35}
            height={35}
            style={{ marginRight: "10px" }}
          />
          <div>
            <div style={{ fontSize: "14px", color: "#444", fontWeight: "700" }}>
              HOTEL ANANTA INN
            </div>
          </div>
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className={`navbar-toggler ${styles.customToggler}`}
          type="button"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="navbarNav"
          aria-label="Toggle navigation"
          style={{ padding: "8px 12px", minWidth: "44px", minHeight: "44px" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div
          className={`navbar-collapse ${isOpen ? "d-block" : "d-none"} d-lg-flex`}
          id="navbarNav"
          style={{ transition: "all 0.3s ease" }}
        >
          <ul className="navbar-nav mx-auto text-center mt-3 mt-lg-0">
            <li className="nav-item py-2 py-lg-0 px-lg-2">
              <Link href="/" className={`${styles.navLink} ${isActive("/") ? styles.activeLink : ""}`} onClick={closeMenu}>
                HOME
              </Link>
            </li>
            <li className="nav-item py-2 py-lg-0 px-lg-2">
              <Link href="/about" className={`${styles.navLink} ${isActive("/about") ? styles.activeLink : ""}`} onClick={closeMenu}>
                ABOUT
              </Link>
            </li>
            <li className="nav-item py-2 py-lg-0 px-lg-2">
              <Link href="/rooms" className={`${styles.navLink} ${isActive("/rooms") ? styles.activeLink : ""}`} onClick={closeMenu}>
                ROOMS
              </Link>
            </li>
            <li className="nav-item py-2 py-lg-0 px-lg-2">
              <Link href="/gallery" className={`${styles.navLink} ${isActive("/gallery") ? styles.activeLink : ""}`} onClick={closeMenu}>
                GALLERY
              </Link>
            </li>
            <li className="nav-item py-2 py-lg-0 px-lg-2">
              <Link href="/contact" className={`${styles.navLink} ${isActive("/contact") ? styles.activeLink : ""}`} onClick={closeMenu}>
                CONTACT
              </Link>
            </li>

            {/* Mobile Book Button */}
            <li className="nav-item d-lg-none mt-4">
              <a
                href={`https://wa.me/918130810918?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobileBookBtn}
                onClick={closeMenu}
              >
                BOOK NOW
              </a>
            </li>
          </ul>
        </div>

        {/* Desktop Button */}
        <Link href="/rooms" className={`btn px-4 d-none d-lg-inline-flex ${styles.customBtn}`}>
          Book Now
        </Link>
      </div>

      <style jsx>{`
        @media (max-width: 991px) {
          .navbar-collapse {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: white;
            box-shadow: 0 10px 20px rgba(0,0,0,0.05);
            padding: 20px 0;
            z-index: 1000;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;