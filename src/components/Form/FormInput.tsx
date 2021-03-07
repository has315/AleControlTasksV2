import React, { useContext } from 'react'
import { FormInputs, FormInputType } from '../../types/formTypes'
import FormContext from '../../context/FormContext'

export const FormInput = ({ type, name, placeHolder, required }: FormInputType) => {
    const context = useContext(FormContext);
    const currentState = context?.initialValues

    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        const splitName = name?.split('.');

        const traverse: any = (obj: FormInputs, keys: Array<string>) => {            
            if (keys.length === 1) {
                return { ...obj, [keys[0]]: e.currentTarget.value };
            } else {
                return { ...obj, [keys[0]]: traverse(obj[keys[0]], keys.splice(1)) };
            }
        };
        context?.onSubmit(traverse(currentState, splitName))
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