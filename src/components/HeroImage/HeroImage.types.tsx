
export interface HeroImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  disabled?: boolean;
}

export default HeroImageProps;
