import React from "react"

export type DragProps = {
    items: {},
    onChange: () => {}
    children?: React.ReactNode
}

export type DragItemProps = {
    children?: React.ReactNode
}

export type DragContextType = {
    items: any,
    onChange: (data: any) => {}    
}
