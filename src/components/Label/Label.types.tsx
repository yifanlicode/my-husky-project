import React from 'react';

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  disabled?: boolean;
}

export default LabelProps;
