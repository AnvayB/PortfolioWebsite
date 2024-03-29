import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/img/logo.svg";
import linkedin from "../../assets/img/linkedin.svg";
import github from "../../assets/img/github.svg";
import resume from "../../assets/img/resume.svg";
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="content">
          <Col size={12} sm={6}>
            <a href="#top"><img src={logo} alt="Logo" /></a>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/anvayb/"><img src={linkedin} alt="LinkedIn" /></a>
              <a href="https://github.com/AnvayB"><img src={github} alt="GitHub" /></a>
              <a href="https://anvayb.netlify.app/static/media/Anvay_Bhanap_Resume.f5eab86dd348779ff17a.pdf"><img src={resume} alt="Resume" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
