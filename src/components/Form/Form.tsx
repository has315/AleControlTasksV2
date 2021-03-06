import React, { useContext, useState } from 'react';
import { FormProps, FormInputs, FormContextType } from '../../types/FormTypes'
import FormContext from "../../context/FormContext";

export const Form: React.FC<FormProps> = ({ initialValues, className, onSubmit, children }: FormProps) => {


  // const saveState = ({ age, email, name, phone }: FormInputs) => {
  //   const newState: FormInputs = {
  //     email,
  //     age,
  //     name,
  //     phone
  //   }
  //   setState({ ...state, newState })
  // }


  return (
    <FormContext.Provider value={{ initialValues, onSubmit }}>
      <div className={className}>{children}</div>
    </FormContext.Provider>
  );
}