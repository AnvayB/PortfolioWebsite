import { Col } from "react-bootstrap";
import PropTypes from "prop-types";


function ProjectCard({ title, description, imgUrl, duration, link }) {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="proj-imgbx">
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            <p>{duration}</p>
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
  imgUrl: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};