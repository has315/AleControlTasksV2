import React, { useContext, useState } from 'react';
import { FormProps,FormInputs, FormContextType } from '../../types/FormTypes'
import FormContext from "./FormContext";

export const Form: React.FC<FormProps> = ({ initialValues, className, onSubmit, children }: FormProps) => {
  
    const [state, setState] = useState<FormInputs>(initialValues)

    const saveState = ({ age, email, name, phone }: FormInputs) => {
        const newState: FormInputs = {
            email,
            age,
            name,
            phone
        }
        setState({...state, newState})
    }

  //onsubmit setuje orig parent data
  //form context za child comp. 
  //

  // const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
  //   setFormData({
  //     ...formData,
  //     [e.currentTarget.id]: e.currentTarget.value,
  //   })
  // }


  return (
    <FormContext.Provider value={{state,saveState}}>
      <div className={className}>{children}</div>
    </FormContext.Provider>
  );
}