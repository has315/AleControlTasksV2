import React from 'react'
import { FormInputTypes } from '../../types/FormTypes'
export const FormInput = ({type,name,placeHolder, required, onChange}: FormInputTypes) => {
    return (
        <>
            <label></label>
            <br />
            <input
            type={type}
            name={name}
            placeholder={placeHolder}
            required={required}
            onChange={onChange}
            />
        </>
    )
}