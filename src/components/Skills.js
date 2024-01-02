import meter1 from "../assets/img/p1.svg";
import meter2 from "../assets/img/p2.svg";
import meter3 from "../assets/img/p3.svg";
import meter4 from "../assets/img/p4.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                {" "}
                My job is to build your website so that it is functional and
                user-friendly but at the same time attractive. I have experience
                on frontend web development and frameworks like reactjs ,
                Angular , Django , bootstrap and also good knowledge on version
                control (git & github).<br></br> I am eager to work, learn and
                gain skills with global communities..
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Angular</h5>
                </div>
                <div className="item">
                  <img src={meter4} alt="Image" />
                  <h5>React Js</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Django</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Data Analysis</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Figma</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
