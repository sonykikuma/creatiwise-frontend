import React from "react";
import webflow from "../assets/webflow.png";
import design from "../assets/design.png";
import developer from "../assets/developer.png";
import figma from "../assets/figma.png";

const Footer = () => {
  return (
    <footer
      className="py-5 text-white text-center"
      style={{ backgroundColor: "#0d0d0d" }}
    >
      <div className="d-flex justify-content-center align-items-center flex-nowrap overflow-auto gap-4 mb-5 fs-3 text-white-50">
        <span className="">
          <img src={webflow} alt="webflow" />
        </span>
        <span className="text-white">
          {" "}
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 0L17.5818 10.0968L24 2.14359L20.3215 11.6785L29.8564 8L21.9032 14.4182L32 16L21.9032 17.5818L29.8564 24L20.3215 20.3215L24 29.8564L17.5818 21.9032L16 32L14.4182 21.9032L8 29.8564L11.6785 20.3215L2.14359 24L10.0968 17.5818L0 16L10.0968 14.4182L2.14359 8L11.6785 11.6785L8 2.14359L14.4182 10.0968L16 0Z"
              fill="#CBCBCB"
            />
          </svg>{" "}
        </span>
        <span className="">
          <img src={figma} alt="figma" />
        </span>
        <span className="text-white">
          {" "}
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 0L17.5818 10.0968L24 2.14359L20.3215 11.6785L29.8564 8L21.9032 14.4182L32 16L21.9032 17.5818L29.8564 24L20.3215 20.3215L24 29.8564L17.5818 21.9032L16 32L14.4182 21.9032L8 29.8564L11.6785 20.3215L2.14359 24L10.0968 17.5818L0 16L10.0968 14.4182L2.14359 8L11.6785 11.6785L8 2.14359L14.4182 10.0968L16 0Z"
              fill="#CBCBCB"
            />
          </svg>{" "}
        </span>
        <span className="">
          <img src={design} alt="design" />
        </span>
        <span className="text-white">
          {" "}
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 0L17.5818 10.0968L24 2.14359L20.3215 11.6785L29.8564 8L21.9032 14.4182L32 16L21.9032 17.5818L29.8564 24L20.3215 20.3215L24 29.8564L17.5818 21.9032L16 32L14.4182 21.9032L8 29.8564L11.6785 20.3215L2.14359 24L10.0968 17.5818L0 16L10.0968 14.4182L2.14359 8L11.6785 11.6785L8 2.14359L14.4182 10.0968L16 0Z"
              fill="#CBCBCB"
            />
          </svg>{" "}
        </span>
        <span className="">
          <img src={developer} alt="developer" />
        </span>
      </div>

      <div className="mb-4">
        <h2 className="fs-1 fw-bold">LET'S TALK!</h2>
        <a
          href="mailto:rehanurrraihan@gmail.com"
          className="text-white-50 text-decoration-none fs-5"
        >
          rehanurrraihan@gmail.com ↗
        </a>
      </div>

      <div className="d-flex justify-content-between align-items-center px-4 mt-5 flex-wrap text-white small">
        <div>&copy; Rehan Raihan - 2023</div>
        <div className="d-flex gap-4">
          <a href="#" className="text-white text-decoration-none">
            Dribbble
          </a>
          <a href="#" className="text-white text-decoration-none">
            Behance
          </a>
          <a href="#" className="text-white text-decoration-none">
            Twitter
          </a>
          <a href="#" className="text-white text-decoration-none">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
