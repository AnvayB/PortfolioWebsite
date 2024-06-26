import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import profile from '../../assets/img/profile.png'
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './Banner.css'


function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200);
  const [index, setIndex] = useState(1);
  const toRotate = ["Software Engineer", "Frontend Engineer", "Web Developer"];
  const period = 2000;
  const [hasAnimatedPortfolio, setHasAnimatedPortfolio] = useState(false);
  const [hasAnimatedProfile, setHasAnimatedProfile] = useState(false);

  const checkAnimationTriggered = (elementId) => {
    const hasAnimated = sessionStorage.getItem(`hasAnimated_${elementId}`);
    return hasAnimated;
  };

  useEffect(() => {
    setHasAnimatedPortfolio(checkAnimationTriggered('portfolio'));
    setHasAnimatedProfile(checkAnimationTriggered('profile'));
  }, []);
  // 


  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }



  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible && !hasAnimatedPortfolio ? "animate__animated animate__fadeIn" : ""} onAnimationEnd={() => {
                  sessionStorage.setItem('hasAnimated_portfolio', 'true');
                  setHasAnimatedPortfolio(true);
                }}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi! I'm Anvay Bhanap`} <br />
                    <h3 className="txt-rotate" dataperiod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></h3>
                  </h1>
                  <p>I’m a software engineer from San Jose State University with a passion for developing engaging applications. Since graduating, I’ve completed freelance work primarily focused in Frontend and Web Development. I'm constantly driven to explore cutting-edge technologies and frameworks to enhance user experiences and deliver genuinely enjoyable and fulfilling interactions. I’m currently upgrading my skills in Full-Stack through various certifications with an active interest in securing job opportunities and eagerly seeking projects to further develop my expertise.</p>
                  <a href="#connect" style={{ textDecoration: "none" }}>
                    <button onClick={() => console.log('connect')}>Let&apos;s Connect <ArrowRightCircle size={25} /></button>
                  </a>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible && !hasAnimatedProfile ? "animate__animated animate__zoomIn" : ""} onAnimationEnd={() => {
                  sessionStorage.setItem('hasAnimated_profile', 'true');
                  setHasAnimatedProfile(true);
                }}>
                  <img src={profile} alt="" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Banner