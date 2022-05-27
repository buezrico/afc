import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="inner">
        <div className="navbar-brand">
          <Image
            src="/imgs/afclogo.png"
            width="100%"
            height="100%"
            layout="responsive"
            unoptimized
            alt="brand-logo"
          />
        </div>

        <ul className="nav-items">
          <li className="nav-item">
            <Link href="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link href="about">About Us</Link>
          </li>
          <li className="nav-item">
            <Link href="#">Become a Member</Link>
          </li>
          <li className="nav-item">
            <Link href="#">Our Events</Link>
          </li>
          <li className="nav-item">
            <Link href="#">Contact Us</Link>
          </li>
        </ul>

        <div className="donate-btn">
          <button className="btn btn-secondary">DONATE</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
