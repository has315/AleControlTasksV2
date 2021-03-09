import React from "react"

export type DragProps = {
    items: {},
    onChange: (data: any) => void
    children?: React.ReactNode
}

export type DragItemProps = {
    children?: React.ReactNode
    index: number
}

export type DragContextType = {
    // onDragOver: (e: React.DragEvent<HTMLDivElement>) => void
    // onDrop: (e: React.DragEvent<HTMLDivElement>) => void
    setDraggedItem: (data: any) => void
    setDraggedOverItem: (data: any) => void

}
