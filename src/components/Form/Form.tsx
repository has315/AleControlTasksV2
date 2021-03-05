import React from 'react';
import {FormProps} from '../../types/FormTypes'

export const Form: React.FC<FormProps> = ({ children }) => (
    <div>{children}</div>
  );