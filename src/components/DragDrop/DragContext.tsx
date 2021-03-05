import React from 'react';
// import {FormProps} from '../../types/FormTypes'

export const DragContext: React.FC = ({ children }: any) => {
    const DragContextx = React.createContext<any>(null)

    return (
        <>
        <DragContextx.Provider value={null}> 
            <div>{children}</div>;
        </DragContextx.Provider>
        </>
    )
}