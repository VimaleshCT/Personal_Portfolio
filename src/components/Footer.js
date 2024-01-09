import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/ct.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/git1.svg";
import navIcon3 from "../assets/img/hac.svg";
import navIcon4 from "../assets/img/lc.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <br></br>
          <br></br>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/vimalesh-c-t/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://github.com/VimaleshCT">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://www.hackerrank.com/profile/pranovvimal30">
                <img src={navIcon3} alt="Icon" />
              </a>
              <a href="https://leetcode.com/Vimalesh26/">
                <img src={navIcon4} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
