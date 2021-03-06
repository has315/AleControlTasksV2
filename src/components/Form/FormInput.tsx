import React from 'react'
import { FormInputTypes } from '../../types/FormTypes'

export const FormInput = ({type,name,placeHolder, onSubmit, required}: FormInputTypes) => {

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       
      }

    return (
        <>
            <label htmlFor={name}>{name}</label>
            <br />
            <input
            type={type}
            name={name}
            placeholder={placeHolder}
            required={required}
            onChange={onChange}
            />
             <br />
        </>
    )
}