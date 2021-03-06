import React, { useContext } from 'react'
import { FormInputType } from '../../types/FormTypes'
import FormContext from './FormContext'

export const FormInput = ({ type, name, placeHolder, required }: FormInputType) => {
    const context = useContext(FormContext);

    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        const currentState = context?.state

        const traverse: any = (obj: any, keys: string[]) => {
            if (keys.length === 1) {
                return { ...obj, [keys[0]]: e.currentTarget.value };
            } else {
                return { ...obj, [keys[0]]: traverse(obj[keys[0]], keys.splice(1)) };
            }
        };

        context?.saveState(traverse(currentState, name))
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