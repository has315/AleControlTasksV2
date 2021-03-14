import React, { useContext } from 'react'
import { DragContext } from '../../context/DragContext'
import { DragItemProps } from '~/types/dragTypes'


const DragItem: React.FC<DragItemProps> = ({ children, index }) => {

    const context = useContext(DragContext)


    const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        // e.preventDefault();
        context?.setDraggedItem(index)

    }

    const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        // e.preventDefault();
        context?.setDraggedOverItem(index)
    }


    return (
        <div
        draggable
            className={''}
            style={{margin: 10, padding: 30, border: "1px solid red"}}
            onDragStart={onDragStart}
            onDragOver={onDragOver}
        >
            {children}
        </div>
    )
}

export default DragItem
