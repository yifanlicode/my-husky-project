import React from 'react';
import styled from 'styled-components';

interface ImgProps {
  src: string;
  alt: string;
  disabled?: boolean;
}

const StyledImg = styled.img<ImgProps>`
  width: 100%;
  height: auto;
  background-color: ${(props) => (props.disabled ? "#f2f2f2" : "#ffffff")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  transition: opacity 0.3s ease;
  `;

const Img: React.FC<ImgProps> = ({ src, alt, disabled }) => {
  return <StyledImg src={src} alt={alt} disabled={disabled} />;
};

export default Img;
