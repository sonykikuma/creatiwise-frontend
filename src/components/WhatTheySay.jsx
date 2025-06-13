import React, { useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import testimonial from "../assets/testimonial.png";

const testimonials = [
  {
    name: "Floyd Miles",
    company: "eBay",
    feedback:
      "Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.",
    image: testimonial,
  },
];

const WhatTheySay = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-5 text-white" style={{ backgroundColor: "#0d0d0d" }}>
      <Container>
        <h2 className=" fs-1 d-flex align-items-center gap-2 mb-5">
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
          What they say
        </h2>
        <Row className="align-items-center">
          <Col md={4} className="mb-4 mb-md-0">
            <Image
              src={testimonials[index].image}
              roundedCircle
              width={80}
              height={80}
              className="mb-3"
              style={{ objectFit: "cover" }}
              alt={testimonials[index].name}
            />
            <h5>{testimonials[index].name}</h5>
            <small className="text-muted">{testimonials[index].company}</small>
          </Col>

          <Col md={8} className="position-relative">
            <div
              className="position-absolute"
              style={{
                fontSize: "8rem",
                color: "#4b5563",
                top: "-100px",
                left: "0",
              }}
            >
              <svg
                width="75"
                height="65"
                viewBox="0 0 113 97"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M53.6465 90.8538L5.64648 90.8538L5.64648 49.7765C5.64648 31.4066 15.105 18.3095 34.0222 10.4852C37.7349 8.9544 41.978 7.50862 46.7515 6.14788L53.5139 19.9253C42.641 23.5823 36.0553 28.3024 33.757 34.0855C32.6962 36.6369 32.1658 39.6985 32.1658 43.2705L53.6465 43.2705L53.6465 90.8538Z"
                  fill="#CBCBCB"
                  fill-opacity="0.48"
                />
                <path
                  d="M107.293 90.8538L59.293 90.8538L59.293 49.7765C59.293 31.4066 68.7515 18.3095 87.6687 10.4852C91.3814 8.9544 95.6245 7.50862 100.398 6.14788L107.16 19.9253C96.2874 23.5823 89.7018 28.3024 87.4035 34.0855C86.3427 36.6369 85.8123 39.6985 85.8123 43.2705L107.293 43.2705L107.293 90.8538Z"
                  fill="#CBCBCB"
                  fill-opacity="0.48"
                />
              </svg>
            </div>
            <p className="fs-4">{testimonials[index].feedback}</p>

            <div className="d-flex ms-5 mt-4 gap-3">
              <Button
                variant="light"
                className="rounded-circle shadow"
                style={{ width: "40px", height: "40px" }}
                onClick={handlePrev}
              >
                ←
              </Button>
              <Button
                variant="light"
                className="rounded-circle shadow"
                style={{ width: "40px", height: "40px" }}
                onClick={handleNext}
              >
                →
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhatTheySay;
