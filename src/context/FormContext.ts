import React from "react";
import { FormContextType } from "~/types/formTypes";

export const FormContext = React.createContext<FormContextType | null>(null);

export default FormContext
