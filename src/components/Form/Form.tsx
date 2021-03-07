import React, { useContext, useState } from 'react';
import { FormProps, FormInputs, FormContextType } from '../../types/formTypes'
import FormContext from "../../context/FormContext";

export const Form: React.FC<FormProps> = ({ initialValues, className, onSubmit, children }: FormProps) => {
  
  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(initialValues)
  }

  return (
    <FormContext.Provider value={{ initialValues, onSubmit }}>
      <form onSubmit={onFormSubmit} className={className}>{children}</form>
    </FormContext.Provider>
  );
}