
//Form Types
export type FormProps = {
    initialValues: any,
    onSubmit: any,
    className: string,
    children?: React.ReactNode
}


// Input Types
export interface FormInputs {
    email: string,
    age: number,
    name: string,
    phone: {
        ext: string,
        number: string
    }
}

//Input props types
export interface FormInput {
    type: string,
    name: string,
    placeHolder: string,
    required: boolean,
    onChange: React.FormEvent<HTMLInputElement>
}

