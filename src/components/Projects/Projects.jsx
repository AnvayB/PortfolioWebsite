import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import cmlogo from '../../assets/img/cmlogo.png'
import fclogo from "../../assets/img/fclogo.png";
import rm from "../../assets/img/rm.png";
import slc from "../../assets/img/successLC.png";
import prismatic from "../../assets/img/prismatic.png";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './Projects.css'

function Projects() {

  const workexp = [
    {
      title: "CHYK West",
      description: "Lead Developer",
      imgUrl: cmlogo,
      duration: "Jun. 2023 - Present",
      link: "https://chykwest.org/"
    },
    {
      title: "FiduciaryChat",
      description: "WordPress Developer",
      imgUrl: fclogo,
      duration: "May 2023 - Aug. 2023",
      link: "https://anvayb.github.io/FiduciaryChat/"
    },
    {
      title: "Prismatic Softwares",
      description: "Web Development Intern",
      imgUrl: prismatic,
      duration: "Jun. 2022 - Aug. 2022",
      link: "https://www.prissoft.net/"
    },
    {
      title: "RippleMatch",
      description: "Leadership Development Intern",
      imgUrl: rm,
      duration: "Jan. 2021 - Apr. 2021",
      link: "https://ripplematch.com/"
    },
    {
      title: "Success Learning Center",
      description: "Math and English Tutor",
      imgUrl: slc,
      duration: "Jan. 2018 - Jun. 2018",
      link: "http://cliveden.com/"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Work Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Testimonials</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="third">Tab 4</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          workexp.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, 3ligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

export default Projects