import PropTypes from 'prop-types';
import { useState } from 'react';

const Modal = ({ isShowing, toggle, images }) => {

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
            className="fb-image"
            src={images[currentImageIndex]}
            alt="Project"
            width="400"
            height="820"
          />

        <button onClick={handlePrevious} className="button-prev">Previous</button>
        <button onClick={handleNext} className="button-prev">Next</button>

          <p className="modal-text">The UI interface and design for the mobile food delivery app FitBites.</p>
    </div>
  </div>
) : null;

}


Modal.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  children: PropTypes.node,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Modal;
