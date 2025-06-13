import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const experiences = [
  {
    title: "Lead Product Designer",
    company: "Fortknox",
    duration: "Jul 2022 – Oct 2023",
    description:
      "Led design initiatives for the company’s core financial intelligence platform, collaborating closely with developers and stakeholders.",
  },
  {
    title: "Senior UI/UX Designer",
    company: "Wave Design",
    duration: "Mar 2021 – Jun 2022",
    description:
      "Focused on user experience design, creating intuitive web and mobile interfaces for SaaS products.",
  },
  {
    title: "Web Designer",
    company: "Siloila",
    duration: "Jan 2020 – Feb 2021",
    description:
      "Developed and maintained client websites, balancing creative branding with performance and accessibility standards.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-5 text-white"
      style={{ backgroundColor: "#0d0d0d" }}
    >
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
          Experience
        </h2>
        {experiences.map((exp, index) => (
          <>
            <Row key={index} className=" align-items-center mb-0">
              <Col md={8}>
                <h5 className="mb-0">{exp.title}</h5>
              </Col>
              <Col md={4} className="text-md-end">
                <p className="fw-semibold mb-0">{exp.company}</p>
                <p className="text-white small mb-0">{exp.duration}</p>
              </Col>
            </Row>
            <hr />
          </>
        ))}
      </Container>
    </section>
  );
};

export default Experience;
