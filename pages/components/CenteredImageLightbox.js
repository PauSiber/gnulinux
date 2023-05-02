import React, { useState } from 'react';
import Lightbox from 'react-awesome-lightbox';
import 'react-awesome-lightbox/build/style.css';

const CenteredImageLightbox = ({ src, alt, width, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div style={{ textAlign: 'center' }} onClick={handleClick}>
        <img src={src} alt={alt} width={width} {...rest} style={{ cursor: 'pointer' }} />
      </div>
      {isOpen && (
        <Lightbox
          image={src}
          alt={alt}
          title={alt}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default CenteredImageLightbox;