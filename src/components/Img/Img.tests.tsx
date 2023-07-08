import { render, screen } from '@testing-library/react';
import Img from './Img';

describe('Img Component', () => {
  it('should be visible', () => {
    const src = 'Img.jpg';
    const alt = 'Img Alt Text';
    render(<Img src={src} alt={alt} />);
    const ImgElement = screen.getByAltText(alt);
    expect(ImgElement).toBeVisible();
  });

  it('should change background color when disabled', () => {
    const src = 'Img.jpg';
    const alt = 'Img Alt Text';
    render(<Img src={src} alt={alt} disabled />);
    const heroImage = screen.getByAltText(alt);
    expect(heroImage).toHaveStyle('background-color: #f2f2f2');
  });
});
