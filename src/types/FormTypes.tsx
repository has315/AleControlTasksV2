
//Form Types
export type FormProps = {
    initialValues: any,
    onSubmit: any,
    className: string,
    children?: React.ReactNode
}


// Input Types
export type FormInputsTypes ={
    email: string,
    age: number,
    name: string,
    phone: {
        ext: string,
        number: string
    }
}

//Input props types
export type FormInputTypes = {
    type: string,
    name: string,
    placeHolder: string,
    required: boolean,
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined
}

