import React from "react"

export type DragProps = {
    items: {},
    onChange: () => void
    children?: React.ReactNode
}

export type DragItemProps = {
    children?: React.ReactNode
}

export type DragContextType = {

    SetDraggedItem: (data: any) => void
}
