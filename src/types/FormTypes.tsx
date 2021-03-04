// Component Nesting
type WithChildren<T = {} > = T & {children?: React.ReactNode}


//Form Types
type FormProps = WithChildren<{
    initialValues: any,
    onSubmit: any,
    className: string
}>


// Input Types
type FormInputs = {
    email: string,
    age: number,
    name: string,
    phone: {
        ext: string,
        number: string
    }
}

//Input props types
type FormInput = {
    type: string,
    name: string,
    placeHolder: string,
    required: boolean,
    onChange: React.FormEvent<HTMLInputElement>
}

export * from "./FormTypes";