import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const expertiseItems = [
  {
    title: "Branding",
    description:
      "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.",
  },
  {
    title: "UI Design",
    description:
      "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.",
  },
  {
    title: "UX Design",
    description:
      "I comprehend and resolve digital product issues using a user-focused methodology. Investigation, compassion, and visual conveyance are a few techniques I apply to captivate and involve your users while fulfilling your business requirements.",
  },
  {
    title: "Development",
    description:
      "I create user-friendly, adaptive, engaging websites. No cookie-cutters. No cumbersome, complex coding. Webflow forms the foundation of my development approach. I employ it to produce safe, top-notch personalized websites.",
  },
];

const Expertise = () => {
  return (
    <section
      id="expertise"
      className="py-5 text-white"
      style={{ backgroundColor: "#0d0d0d" }}
    >
      <Container>
        <h2 className="mb-5 fs-1 d-flex align-items-center gap-2">
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
          </svg>
          <span className="fw-bold">Expertise</span>
        </h2>
        <Row xs={1} md={2} className="g-4">
          {expertiseItems.map((item, index) => (
            <Col key={index}>
              <h5 className="fw-semibold">▪ {item.title}</h5>
              <p className="text-secondary">{item.description}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Expertise;
