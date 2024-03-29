import { Col } from "react-bootstrap";
import PropTypes from "prop-types";


function ProjectCard({ title, description, image, duration, link, stack, readmore, linkedin, recs }) {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="proj-imgbx">
          <img src={image} />
          <div className="proj-txtx">
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <h4>{title}</h4>
            </a>
            <br />
            <span><i>{description}</i> 
            <br />
              <sub>{stack}</sub>
            </span>
            <p>{duration}</p>
            <a className="read" href={recs} target="_blank" rel="noopener noreferrer">
              <h3>{readmore}</h3>
            </a>
          </div>
        </div>
      </a>
    </Col>
  )
}

export default ProjectCard

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  stack: PropTypes.string.isRequired,
  readmore: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  recs: PropTypes.string.isRequired,


};