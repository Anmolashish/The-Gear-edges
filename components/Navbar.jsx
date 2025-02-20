"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const categoryDropdown = () => {
    document.querySelector(".dropdown-categories").classList.toggle("hide");
  };

  const sidebar = () => {
    document.querySelector(".side-navbar").classList.toggle("open-navbar");
  };

  return (
    <nav className="navbar flex align-center justify center">
      <div className="navbar-main-content width-100">
        <div className="upper-navbar-part flex justify-space-between align-center ">
          {/* Navbar logo here */}
          <div className="navbar-logo">
            <Link href={"/"}>
              <Image
                width={200}
                height={200}
                src="/Images/gearlogo-removebg-preview.png"
                alt="The Gear Man Edges"
                className="logo-image"
              />
            </Link>
          </div>

          {/* Navbar routes */}
          <div className="navbar-links flex align-center justify-space-evenly">
            <div className="navbar-link">
              <Link className="no-decoration" href={"/"}>
                Home
              </Link>
            </div>
            <div className="navbar-link">
              <Link className="no-decoration" href={"/about"}>
                About
              </Link>
            </div>
            <div className="navbar-link">
              <Link className="no-decoration" href={"/products"}>
                Products
              </Link>
            </div>

            {/* <div className="navbar-link">
              <Link className="no-decoration" href={"/infrastructure"}>
                Infrastructure
              </Link>
            </div> */}

            <div className="navbar-link">
              <Link className="no-decoration" href={"/contact"}>
                Contact
              </Link>
            </div>
            {/* <div className="navbar-link">
              <Link className="no-decoration" href={"/"}>
                Blog
              </Link>
            </div> */}
          </div>

          <a
            href="mailto:sales@thegearedges.com"
            className="navbar-phone-section no-decoration"
          >
            <div className="phone-number flex justify-center align-center text-center">
              <p>Mail: sales@thegearedges.com</p>
            </div>
          </a>

          <div className="hamburger" onClick={sidebar}>
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-filled/50/FFFFFF/menu--v1.png"
              alt="menu--v1"
            />
          </div>

          <div className="side-navbar flex-column justify-space-between">
            <div className="side-navbar-tabs">
              <div className="navbar-tab">
                <Link className="no-decoration" href={"/"} onClick={sidebar}>
                  Home
                </Link>
              </div>
              <div className="navbar-tab">
                <Link
                  className="no-decoration"
                  href={"/about"}
                  onClick={sidebar}
                >
                  About
                </Link>
              </div>
              <div className="navbar-tab">
                <Link
                  className="no-decoration"
                  href={"/products"}
                  onClick={sidebar}
                >
                  Products
                </Link>
              </div>
              <div className="navbar-tab">
                <Link
                  className="no-decoration"
                  href={"/contact"}
                  onClick={sidebar}
                >
                  Contact
                </Link>
              </div>
              {/* <div className="navbar-tab">
                <Link className="no-decoration" href={"/"}>
                  Blogs
                </Link>
              </div> */}
            </div>
            <div className="lower-side-navbar flex justify-center align-center">
              <a
                href="mailto:sales@thegearedges.com"
                className="navbar-phone-section no-decoration justify-center"
                style={{ display: "flex", width: "80%" }}
              >
                <div className="phone-number flex justify-center align-center text-center">
                  <p>Mail: sales@thegearedges.com</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
