import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './Contact.css'
import logo from "../../assets/img/logo.svg";
import linkedin from "../../assets/img/linkedin.svg";
import github from "../../assets/img/github.svg";
import resume from "../../assets/img/resume.svg";
// import './Footer.css'

function Contact() {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully' });
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.' });
    }
  };

  // const [hasAnimatedPortfolio, setHasAnimatedPortfolio] = useState(false);
  //  const [hasAnimatedProfile, setHasAnimatedProfile] = useState(false);

  //   const checkAnimationTriggered = (elementId) => {
  //     const hasAnimated = sessionStorage.getItem(`hasAnimated_${elementId}`);
  //     return hasAnimated;
  //   };

  //   useEffect(() => {
  //     setHasAnimatedPortfolio(checkAnimationTriggered('portfolio'));
  //     setHasAnimatedProfile(checkAnimationTriggered('contact'));
  //   }, []);

  //   useEffect(() => {
  //     if (hasAnimatedPortfolio) {
  //       sessionStorage.setItem('hasAnimated_portfolio', 'true');
  //     }
  //  }, [hasAnimatedProfile]);

  return (
    <section className="contact" id="connect">
      <Container className="connect">
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img
                  // className={isVisible ? "animate__animated animate__zoomIn" : ""} 
                  src={contactImg} alt="Contact Us"
                // onAnimationEnd={() => {
                //   sessionStorage.setItem('hasAnimated_portfolio', 'true');
                //   setHasAnimatedPortfolio(true);
                // }}
                />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div
                // className={isVisible ? "animate__animated animate__fadeIn" : ""} 
                // onAnimationEnd={() => {
                //   sessionStorage.setItem('hasAnimated_portfolio', 'true');
                //   setHasAnimatedPortfolio(true);
                // }}
                >
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      {
                        status.message &&
                        <Col>
                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                      }
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <footer className="footer">
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
    </footer> */}
    </section>
  )
}

export default Contact