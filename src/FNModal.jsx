import PropTypes from 'prop-types';
import { useState } from 'react';

const FNModal = ({ isShowing, toggle, images }) => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1)
    }
  };

  const handlePrevious = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

return isShowing ? (
  <div className="modal">
    <div className="modal-content">
        <button className="close-button" onClick={toggle}>Close</button>
        <img
            className="fn-image"
            src={images[currentImageIndex]}
            alt="Project"
            width="800"
            height="415"
          />

      <div className="btn-container">
        <button onClick={handlePrevious} className="button-prev">Previous</button>
        <button onClick={handleNext} className="button-prev">Next</button>
      </div>

          <p className="modal-text">The UI and front-end for FileNexus, a full-stack file sharing web application.</p>
    </div>
  </div>
) : null;

}


FNModal.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  children: PropTypes.node,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FNModal;
