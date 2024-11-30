import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Contact() {
  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form data here
    console.log('Form submitted');
  };

  return (
    <Container fluid className="contact-section" id="contact">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={8} className="contact-description">
            <h1 style={{ fontSize: "2.6em" }}>
              GET IN <span className="purple">TOUCH</span>
            </h1>
            <p>
              Feel free to drop me a message. I am always open to discussing new
              projects, creative ideas, or opportunities.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6} style={{ margin: "auto", color:"purple"}}>
            <Form onSubmit={handleSubmit}>
              <Form.Group  className="mb-3" controlId="formName">
               
                <Form.Control style={{  color:"purple"}} type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
               
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Enter your message"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social" id="Contact">
            <h1>FIND ME ON</h1>
            
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Juhisingh22/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/juhi-singh-b50973221/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/juhii_singh_22"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
