import React, { useContext } from 'react'
import { DragContext } from '../../context/DragContext'
import { DragItemProps } from '~/types/dragTypes'


const DragItem: React.FC<DragItemProps> = ({children}) => {

    const items = useContext(DragContext)

    
    const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        console.log(e.currentTarget.innerText)        
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
