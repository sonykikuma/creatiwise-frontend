import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import env1 from "../assets/env1.png";
import env2 from "../assets/env2.png";
import env3 from "../assets/env3.png";

const works = [
  {
    title: "Analysis Application",
    description:
      "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
    image: env1,
    tags: ["FIGMA", "UX"],
    buttonLabel: "View Case Study",
  },
  {
    title: "Fortknox Application",
    description:
      "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
    image: env2,
    tags: ["MOBILE", "WEB"],
    buttonLabel: "View Case Study",
  },
  {
    title: "Zenocide Application",
    description:
      "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
    image: env3,
    tags: ["APP", "WEB"],
    buttonLabel: "View Case Study",
  },
];

const Works = () => {
  return (
    <section
      id="works"
      className="py-5 text-white"
      style={{ backgroundColor: "#0d0d0d" }}
    >
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h2 className=" fs-1 d-flex align-items-center gap-2">
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
            Works{" "}
          </h2>

          <Link to="#!" className="text-decoration-none text-white small ">
            <u> view all</u>
          </Link>
        </div>

        <Row className="g-4">
          {works.map((work, idx) => (
            <Col md={12} key={idx}>
              <div
                className="p-4 rounded-4 d-flex flex-column flex-md-row gap-4"
                style={{
                  background: "linear-gradient(to right, #1e1e1e, #2d2d2d)",
                }}
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="img-fluid rounded-4"
                  style={{ maxWidth: "300px", objectFit: "cover" }}
                />
                <div className="d-flex flex-column justify-content-between">
                  <div>
                    <h4 className="fw-semibold mb-2">{work.title}</h4>
                    <p className="text-secondary mb-3">{work.description}</p>
                    <div className="d-flex gap-2 flex-wrap mb-3">
                      {work.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="border border-secondary px-2 py-1 rounded-pill small text-uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button
                    variant="light"
                    className="rounded-pill px-4 py-1 fw-semibold text-dark align-self-start"
                  >
                    {work.buttonLabel}
                  </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Works;
