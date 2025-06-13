import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import env1 from "../assets/env1.png";
import env2 from "../assets/env2.png";
import env3 from "../assets/env3.png";

const blogPosts = [
  {
    title: "How UX works in web",
    date: "Nov 9, 2023",
    tags: ["UI", "UX"],
    image: env1,
  },
  {
    title: "Case study - Analysis Application.",
    date: "Aug 18, 2023",
    tags: ["Case Study", "UI"],
    image: env2,
  },
  {
    title: "3 ways to develop your skill",
    date: "Feb 10, 2023",
    tags: ["Skill", "Design"],
    image: env3,
  },
];

const Blog = () => {
  return (
    <section
      id="blog"
      className="py-5 text-white"
      style={{ backgroundColor: "#0d0d0d" }}
    >
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-4">
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
            Blog
          </h2>
          <a href="#" className="text-white text-decoration-underline">
            view all
          </a>
        </div>

        <Row className="g-4">
          {blogPosts.map((post, index) => (
            <Col md={12} key={index}>
              <div
                className="d-flex align-items-center p-3 rounded-4"
                style={{ backgroundColor: "#1c1c1c" }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="rounded-3 me-3"
                  style={{
                    width: "120px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
                <div className="flex-grow-1">
                  <small className="text-secondary d-block mb-1">
                    {post.date}
                  </small>
                  <h5 className="text-white fw-semibold mb-2">{post.title}</h5>
                  <div className="d-flex flex-wrap gap-2">
                    {post.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 rounded-pill border border-secondary text-white small"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <Button
                  variant="light"
                  size="sm"
                  className="ms-3 rounded-pill fw-semibold"
                >
                  Read
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Blog;
