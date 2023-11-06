import { useEffect, useRef } from "react";
import PropTypes from 'prop-types';

const Fade = ({ children }) => {
    const elementRef = useRef(null);
  
    useEffect(() => {
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.7,
      };
  
      const observerCallback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.replace('fadeOut', 'fadeIn');
          } else {
            // Additional logic for fading out can go here
          }
        });
      };
  
      const observer = new IntersectionObserver(observerCallback, observerOptions);
  
      const element = elementRef.current;
  
      observer.observe(element);
  
      // Cleanup
      return () => {
        observer.unobserve(element);
      };
    }, []);
  
    return (
      <div ref={elementRef} className="fade">
        {children}
      </div>
    );
  };

  Fade.propTypes = {
    children: PropTypes.node.isRequired,
  };

  export default Fade;