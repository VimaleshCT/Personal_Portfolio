import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import p1 from "../assets/img/project_1.jpeg";
import p2 from "../assets/img/project_2.png";
import p3 from "../assets/img/project_3.png";
import p4 from "../assets/img/project_4.png";
import p5 from "../assets/img/project_5.png";
import p6 from "../assets/img/project_6.png";
import p7 from "../assets/img/project_7.png";
import p8 from "../assets/img/project_8.png";
import p9 from "../assets/img/project_9.png";
import p10 from "../assets/img/project_9.jpeg";
import p11 from "../assets/img/project_10.png";
import p12 from "../assets/img/project_11.png";
import p13 from "../assets/img/project_12.png";
import p14 from "../assets/img/project_13.png";
import c1 from "../assets/img/cert1.jpg";
import c2 from "../assets/img/cert2.png";
import c3 from "../assets/img/cert3.png";
import c4 from "../assets/img/cert4.png";
import c5 from "../assets/img/cert5.png";
import c6 from "../assets/img/cert6.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "STARFLIX",
      description: "Movie Suggestion Website (Java,HTML,CSS)",
      imgUrl: p3,
    },
    {
      title: "Weather",
      description: "Realtime Weather App (React,HTML,CSS)",
      imgUrl: p12,
    },
    {
      title: "CT_Chat",
      description: "Realtime Chat App (React,Socker.io,node js)",
      imgUrl: p13,
    },
    {
      title: "Caterpillar Game",
      description: "Game Development (Python)",
      imgUrl: p2,
    },
    {
      title: "Drum kit",
      description: "Music instrument Development (JS,HTML,CSS)",
      imgUrl: p4,
    },
    {
      title: "V_Vote",
      description: "Voting app (Django)",
      imgUrl: p11,
    },
    {
      title: "Sentimental Analysis",
      description: "Sentimental Analysis using NLP (Flask,HTML)",
      imgUrl: p9,
    },
    {
      title: "Todo",
      description: "Todo App (Angular)",
      imgUrl: p8,
    },
    {
      title: "Guess My Number",
      description: "Number game (JS,HTML,CSS) ",
      imgUrl: p5,
    },
    {
      title: "Calci",
      description: "Calculator App (React)",
      imgUrl: p7,
    },
    {
      title: " MovieLand",
      description: "Landing page for a movie search website(React,HTML,CSS)",
      imgUrl: p14,
    },
    {
      title: "Numeralogy",
      description: "numeralogical Name prediction (Python)",
      imgUrl: p10,
    },
    {
      title: "ATM ",
      description: "ATM card Validation (Python) ",
      imgUrl: p1,
    },
    {
      title: "Dice",
      description: "Dice game (JS,HTML,CSS)",
      imgUrl: p6,
    },
  ];
  const certificate = [
    {
      title: "Sentiment Analysis with NLP using Python and Flask",
      Issuedby: " UDEMY ",
      imgUrl: c1,
    },
    {
      title: "Python - Data Analytics - Real World Hands-on Projects",
      Issuedby: " UDEMY ",
      imgUrl: c2,
    },
    {
      title: "React jS for Be inners",
      Issuedby: " Simplilearn ",
      imgUrl: c3,
    },
    {
      title: "Python And Django Framework For Beginners Complete Course",
      Issuedby: " UDEMY ",
      imgUrl: c4,
    },
    {
      title: "Command Line Interface (CLI) With Golang From Infosys",
      Issuedby: " Coursera ",
      imgUrl: c5,
    },
    {
      title: "The Complete JavaScript Course 2023: From Zero to Expert!",
      Issuedby: " UDEMY ",
      imgUrl: c6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <h2>Projects</h2>
                        <p>
                          Learning enthusiastic, passionate about technology and
                          innovation, eager to engage myself with tech events,
                          workshops and projects. Looking forward to enhancing
                          my skills, explore new challenges, and grow
                          professionally.
                          <br></br>I have a great passion to do programming,
                          develop web apps, and websites . My goal is to utilize
                          my skills for the development and growth of my
                          organization with the help of new technologies.
                          Looking forward to enhancing my skills, explore new
                          challenges, and grow professionally.
                        </p>
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <h2>Certificates</h2>
                        <p>
                          In pursuit of expanding my expertise in the realm of
                          technology and programming, I have completed several
                          significant certifications. These include
                          certifications in fields such as web development,
                          where I obtained a certificate in Django,
                          demonstrating my proficiency in building robust web
                          applications using Python. Additionally, I have
                          acquired a certificate in Angular, showcasing my
                          skills in developing dynamic and responsive front-end
                          applications.<br></br> To further enhance my skills, I
                          have also completed certifications in React, which
                          highlight my ability to create interactive user
                          interfaces efficiently. These certifications not only
                          validate my technical knowledge but also reflect my
                          commitment to staying updated with the latest
                          technologies and best practices in the industry. I am
                          dedicated to leveraging these skills to contribute
                          effectively to any project or team I am a part of.
                        </p>
                        <Row>
                          {certificate.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          I am interested in <strong>internship</strong>{" "}
                          opportunities - especially in ambitious startups.
                          However, if you have other request or question, don't
                          hesitate to contact me using the form below.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
