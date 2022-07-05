import React from 'react';

import { ButtonBack, ButtonFront } from './index';

function Button({
  alt, form, disabled, children, onClick,
}) {
  return (
    <ButtonBack alt={alt} form={form} disabled={disabled}>
      {children}
      <ButtonFront alt={alt} onClick={onClick} disabled={disabled}>
        {children}
      </ButtonFront>
    </ButtonBack>
  );
}

export default Button;
