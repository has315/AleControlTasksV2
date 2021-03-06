import React from "react"

// Input Types
export type FormInputs = {
    email: string,
    age: number,
    name: string,
    phone: {
        ext: string,
        number: string
    },
    [key: string]: any
}


//Form Types
export type FormProps = {
    initialValues: FormInputs,
    onSubmit: () => void,
    className: string,
    children?: React.ReactNode
}

//Input props types
export type FormInputType = {
    type: string,
    name: string,
    placeHolder: string,
    required: boolean,
}

export type FormContextType = {
    initialValues: FormInputs,
    onSubmit: (data: FormInputs) => void,

}

