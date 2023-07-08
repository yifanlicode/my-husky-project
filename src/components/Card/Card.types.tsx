import { ReactNode } from 'react';

export interface CardProps {
  children: ReactNode;

  /**
   * Whether the card is disabled
   * @default false
   * */
  disabled?: boolean;

  /**
   * The background color of the card
   * @default "white"
   * */
  backgroundColor?: string;

  /**
   * The text color of the card
   * @default "black"
   * */
  textColor?: string;

  
}

export default CardProps;
