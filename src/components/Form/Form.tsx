import React, { useContext } from 'react';
import { FormProps } from '../../types/FormTypes'

export const Form: React.FC<FormProps> = ({ initialValues, className, onSubmit, children }: FormProps) => {


  return (
    <div className={className}>{children}</div>
  );
}