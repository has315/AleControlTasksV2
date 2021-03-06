import React, { useState } from 'react';
import { FormProps } from '../../types/FormTypes'

export const Form: React.FC<FormProps> = ({ initialValues, className, onSubmit, children }: FormProps) => {

  // onSubmit(should provide child input values) // SET INFO AT PARENT
  console.log(initialValues)

  const [userValues, setUserValues] = useState(initialValues)

  return (
    <div className={className}>{children}</div>
  );
}