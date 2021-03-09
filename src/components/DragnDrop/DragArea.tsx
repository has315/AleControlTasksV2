import React, { useState } from 'react'
import { DragProps } from '~/types/dragTypes'
import { DragContext } from '../../context/DragContext'

const DragArea: React.FC<DragProps> = ({ items, onChange, children }: DragProps) => {

    const [draggedItem, setDraggedItem] = useState(0)
    const [draggedOverItem, setDraggedOverItem] = useState(0)

    const swapIndex = (arr: any, index1: number, index2: number) => {
        console.log(`Swap: ${index1} ${index2}`)
        let tmp = arr[index2];
        arr[index2] = arr[index1];
        arr[index1] = tmp
        
        // return [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
        return [...arr]
    }

    const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        console.log(draggedItem);
        onChange(swapIndex(items, draggedItem, draggedOverItem))
    }

    const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }

    return (
        <DragContext.Provider value={{ setDraggedItem, setDraggedOverItem }}>
            <div className="" onDrop={onDrop} onDragOver={onDragOver}>
                {children}
            </div>
        </DragContext.Provider>

    )
}

export default DragArea
