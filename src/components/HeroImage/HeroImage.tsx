import React from 'react';
import styled from 'styled-components';

interface HeroImageProps {
  src: string;
  alt: string;
  disabled?: boolean;
  className?: string;
}

const StyledHeroImage = styled.img<{ disabled?: boolean }>`
  /* Styles for the hero image */
  width: 100%;
  height: auto;
  background-color: ${(props) => (props.disabled ? '#f2f2f2' : '#ffffff')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  transition: opacity 0.3s ease;
`;

const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  disabled,
  className,
}) => {
  return (
    <StyledHeroImage
      src={src}
      alt={alt}
      disabled={disabled}
      className={className}
    />
  );
};

export default HeroImage;
