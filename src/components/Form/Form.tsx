import React, { useContext, useState } from 'react';
import { FormProps, FormInputs, FormContextType } from '../../types/FormTypes'
import FormContext from "../../context/FormContext";

export const Form: React.FC<FormProps> = ({ initialValues, className, onSubmit, children }: FormProps) => {
  
  return (
    <FormContext.Provider value={{ initialValues, onSubmit }}>
      <div className={className}>{children}</div>
    </FormContext.Provider>
  );
}