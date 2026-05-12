"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path;
  };

  // WhatsApp Message
  const whatsappMsg = encodeURIComponent(
    "Dear Reservations Team,\n\nI would like to request a booking at Hotel Ananta Inn. Please provide details regarding room availability and rates.\n\nThank you!"
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4 px-lg-5 py-3 sticky-top">
      
      {/* Logo */}
      <Link
        href="/"
        className="navbar-brand fw-bold d-flex align-items-center"
        style={{ letterSpacing: "2px" }}
      >
        <Image
          src="https://cdn-icons-png.flaticon.com/512/235/235889.png"
          alt="hotel logo"
          width={35}
          height={35}
          style={{ marginRight: "10px" }}
        />

        <div>
          <div
            className="text-muted"
            style={{ fontSize: "14px" }}
          >
            HOTEL ANANTA INN
          </div>
        </div>
      </Link>

      {/* Mobile Toggle */}
      <button
        className={`navbar-toggler ${styles.customToggler}`}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navbar Links */}
      {/* Removed "collapse" temporarily */}
      <div
        className={`navbar-collapse ${styles.navbarCollapse}`}
        id="navbarNav"
      >
        <ul className="navbar-nav mx-auto text-center mt-3 mt-lg-0">

          <li className="nav-item py-2 py-lg-0 px-lg-2">
            <Link
              href="/"
              className={`${styles.navLink} ${
                isActive("/") ? styles.activeLink : ""
              }`}
            >
              HOME
            </Link>
          </li>

          <li className="nav-item py-2 py-lg-0 px-lg-2">
            <Link
              href="/about"
              className={`${styles.navLink} ${
                isActive("/about") ? styles.activeLink : ""
              }`}
            >
              ABOUT
            </Link>
          </li>

          <li className="nav-item py-2 py-lg-0 px-lg-2">
            <Link
              href="/rooms"
              className={`${styles.navLink} ${
                isActive("/rooms") ? styles.activeLink : ""
              }`}
            >
              ROOMS
            </Link>
          </li>

          <li className="nav-item py-2 py-lg-0 px-lg-2">
            <Link
              href="/gallery"
              className={`${styles.navLink} ${
                isActive("/gallery") ? styles.activeLink : ""
              }`}
            >
              GALLERY
            </Link>
          </li>

          <li className="nav-item py-2 py-lg-0 px-lg-2">
            <Link
              href="/contact"
              className={`${styles.navLink} ${
                isActive("/contact") ? styles.activeLink : ""
              }`}
            >
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
            >
              BOOK NOW
            </a>
          </li>
        </ul>
      </div>

      {/* Desktop Button */}
      <Link
        href="/rooms"
        className={`btn px-4 d-none d-lg-inline-flex ms-auto ${styles.customBtn}`}
      >
        Book Now
      </Link>
    </nav>
  );
};

export default Navbar;