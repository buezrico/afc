import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [menuBtn, setMenuBtn] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 5) {
      setMenuBtn(true);
    } else if (scrolled <= 5) {
      setMenuBtn(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", toggleMenu);
  }

  return (
    <div className="navbar">
      <div className={`mobile-menu ${showMenu ? "show-menu" : ""}`}>
        <div className="first-wrapper">
          <div className="second-wrapper">
            <ul className="nav-links">
              <Link href="/">
                <li onClick={() => setShowMenu(!showMenu)} className="nav-item">
                  Home
                </li>
              </Link>
              <Link href="/about">
                <li onClick={() => setShowMenu(!showMenu)} className="nav-item">
                  About Us
                </li>
              </Link>
              <Link href="/register">
                <li onClick={() => setShowMenu(!showMenu)} className="nav-item">
                  Become a Member
                </li>
              </Link>
              <Link href="/events">
                <li onClick={() => setShowMenu(!showMenu)} className="nav-item">
                  Our Events
                </li>
              </Link>{" "}
              <Link href="/gallery">
                <li onClick={() => setShowMenu(!showMenu)} className="nav-item">
                  Our Gallery
                </li>
              </Link>
              <Link href="/contact">
                <li onClick={() => setShowMenu(!showMenu)} className="nav-item">
                  Contact Us
                </li>
              </Link>
              <Link href="/donate">
                <div
                  className="donate-btn"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  <button className="btn btn-secondary">DONATE</button>
                </div>
              </Link>
            </ul>
          </div>
        </div>

        <div className="close-btn">
          <i
            className="fas fa-times-circle"
            onClick={() => setShowMenu(!showMenu)}
          ></i>
        </div>
      </div>

      <div className="inner">
        <Link href="/">
          <div className="navbar-brand">
            <div className="img">
              <Image
                src="/imgs/afclogo.png"
                width={50}
                height={50}
                layout="responsive"
                unoptimized
                alt="brand-logo"
              />
            </div>
          </div>
        </Link>

        <ul className="nav-items">
          <Link href="/">
            <li className="nav-item">Home</li>
          </Link>
          <Link href="/about">
            <li className="nav-item">About Us</li>
          </Link>
          <Link href="/register">
            <li className="nav-item">Register</li>
          </Link>
          <Link href="/events">
            <li className="nav-item">Events</li>
          </Link>
          <Link href="/gallery">
            <li className="nav-item">Gallery</li>
          </Link>
          <Link href="/contact">
            <li className="nav-item">Contact Us</li>
          </Link>
        </ul>

        <Link href="/donate">
          <div className="donate-btn">
            <button className="btn btn-secondary">DONATE</button>
          </div>
        </Link>
        <div className="nav-menu-btn" onClick={() => setShowMenu(!showMenu)}>
          <div
            className={`menu-btn ${menuBtn ? "show-menu-btn" : ""} ${
              showMenu ? "menu-btn-close" : ""
            }`}
            onClick={() => setShowMenu(!showMenu)}
          >
            <div className="menu-wrapper">
              <div className="menu-btn-box">
                <div className="box box1"></div>
                <div className="box box2"></div>
                <div className="box box3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
