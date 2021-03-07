import React from 'react';
import FormContext from "../../context/FormContext";
import { FormProps } from "~/types/formTypes";

const Form: React.FC<FormProps> = ({ initialValues, className, onSubmit, children }: FormProps) => {
  
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

export default Form