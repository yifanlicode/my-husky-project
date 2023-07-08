import { render, screen } from '@testing-library/react';
import HeroImage from './HeroImage';

describe('HeroImage Component', () => {
  it('should be visible', () => {
    const src = 'image.jpg';
    const alt = 'Image Alt Text';
    render(<HeroImage src={src} alt={alt} />);
    const heroImage = screen.getByAltText(alt);
    expect(heroImage).toBeVisible();
  });

  it('should change background color when disabled', () => {
    const src = 'image.jpg';
    const alt = 'Image Alt Text';
    render(<HeroImage src={src} alt={alt} disabled />);
    const heroImage = screen.getByAltText(alt);
    expect(heroImage).toHaveStyle('background-color: #f2f2f2');
  });
});
