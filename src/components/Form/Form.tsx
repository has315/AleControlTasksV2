import React from 'react';
import {FormProps} from '../../types/FormTypes'

export const Form: React.FC<FormProps> = ({ initialValues,className,onSubmit,children }: FormProps) => (
    <div>{children}</div>
  );