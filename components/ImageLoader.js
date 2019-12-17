/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';

const ImageLoader = ({ onLoad, onError, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const handleLoad = useCallback(() => {
    setIsLoaded(true);

    if (typeof onLoad === 'function') {
      onLoad();
    }
  }, [onLoad]);
  const handleError = useCallback(() => {
    setIsLoaded(true);

    if (typeof onError === 'function') {
      onError();
    }
  }, [onError]);
  const imageRef = useRef();

  useEffect(() => {
    const loaded =
      imageRef.current &&
      imageRef.current.currentSrc &&
      imageRef.current.complete;

    if (loaded) {
      setIsLoaded(true);
    }
  }, []);

  return (
    <>
      <img onLoad={handleLoad} onError={handleError} {...props} />
      {!isLoaded && props.skeleton && props.skeleton}
      <style jsx>{`
        img {
          opacity: ${isLoaded ? 1 : 0};
          transition: opacity 0.3s ease;
        }
      `}</style>
    </>
  );
};

ImageLoader.propTypes = {
  skeleton: PropTypes.node,
  onLoad: PropTypes.func,
  onError: PropTypes.func
};

export default ImageLoader;
