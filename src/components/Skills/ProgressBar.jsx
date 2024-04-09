
import PropTypes from 'prop-types';

const ProgressBar = ({ bgcolor, progress, height }) => {

  const Parentdiv = {
    height: height,
    width: '60%',
    backgroundColor: 'whitesmoke',
    borderRadius: 40,
    margin: 50,
    // rotate: '-90deg'
  }

  const Childdiv = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: 'right'
  }

  // const progresstext = {
  // 	padding: 10,
  // 	color: 'black',
  // 	fontWeight: 900
  // }

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        {/* <span style={progresstext}>{`${progress}`}</span> */}
      </div>
    </div>
  )
}

export default ProgressBar;
ProgressBar.propTypes = {
  bgcolor: PropTypes.string,
  progress: PropTypes.number,
  height: PropTypes.number,
};