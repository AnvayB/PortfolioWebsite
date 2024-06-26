import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../../assets/img/color-sharp.png"
import colorSharp2 from "../../assets/img/color-sharp2.png"
import ProgressBar from "./ProgressBar";
import './Skills.css'

function Skills() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <br />
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <ProgressBar
                    className="bar"
                    bgcolor="green"
                    progress="85"
                    height={30}
                  />
                  <h5>React</h5>
                  <p>+ HTML, CSS, JavaScript</p>
                </div>
                <div className="item">
                  <ProgressBar
                    className="bar"
                    bgcolor="#d1e231"
                    progress="75"
                    height={30}
                  />
                  <h5>MERN Stack </h5>
                  <p> MongoDB, Express, React, Node </p>
                </div>
                <div className="item">
                  <ProgressBar
                    className="bar"
                    bgcolor="#d1e231"
                    progress="60"
                    height={30}
                  />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <ProgressBar
                    className="bar"
                    bgcolor="green"
                    progress="85"
                    height={30}
                  />
                  <h5>Git/GitHub</h5>
                </div>
                <div className="item">
                  <ProgressBar
                    className="bar"
                    bgcolor="#d1e231"
                    progress="65"
                    height={30}
                  />
                  <h5>Postman<br />& Insomnia</h5>
                </div>
                <div className="item">
                  <ProgressBar
                    className="bar"
                    bgcolor="green"
                    progress="83"
                    height={30}
                  />
                  <h5>WordPress</h5>
                  <p>+ Plugin Integrations</p>
                </div>
                <div className="item">
                  <ProgressBar
                    className="bar"
                    bgcolor="green"
                    progress="80"
                    height={30}
                  />
                  <h5>Adobe Photoshop <br />& Lightroom</h5>
                </div>
                <div className="item">
                  <ProgressBar
                    className="bar"
                    bgcolor="green"
                    progress="80"
                    height={30}
                  />
                  <h5>Responsive Design <br />& Accessibility</h5>
                </div>
                <div className="item">
                  <ProgressBar
                    className="bar"
                    bgcolor="green"
                    progress="90"
                    height={30}
                  />
                  <h5>Communcation <br />& Teamwork</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp}
        alt="Image" />
      <img className="background-image-right" src={colorSharp2} alt='img2' />
    </section>
  )
}

export default Skills