import React, { useState } from "react";
import { createContext } from "react";
import { FormInputs, FormInputType, FormContextType } from '../../types/FormTypes'

export const FormContext = React.createContext<FormContextType | null>(null);

export default FormContext
