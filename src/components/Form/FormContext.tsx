import React from "react";
import { createContext } from "react";
import { FormContextProps } from '../../types/FormTypes'


// storing it inside Form as it's context specific for Form

export const FormContexts: React.Context<any> = createContext(null)

export const FormContext: React.FC<React.ReactNode> = ({children}) => {

    return (
        <FormContexts.Provider value={null}>
            <div>{children}</div>
        </FormContexts.Provider>
    );
  }