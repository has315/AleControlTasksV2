import React, { useContext } from 'react'
import { DragContext } from '../../context/DragContext'
import { DragItemProps } from '~/types/dragTypes'


const DragItem: React.FC<DragItemProps> = ({ children }) => {

    const context = useContext(DragContext)


    const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        console.log(e.currentTarget.innerText)

        // context?.SetDraggedItem(e.currentTarget)
    }

    return (
        <div
            draggable
            className={''}
            onDragStart={onDragStart}
        >
            
            {children}
        </div>
    )
}

export default DragItem
