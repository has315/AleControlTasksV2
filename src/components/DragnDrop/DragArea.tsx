import React from 'react'
import { DragProps } from '~/types/dragTypes'
import { DragContext } from '../../context/DragContext'

const DragArea: React.FC<DragProps> = ({ items, onChange, children }: DragProps) => {

    const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();

    }

    const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }

    return (
        <DragContext.Provider value={{ items, onChange }}>
            <div className="DragArea" onDragOver={onDragOver} onDrop={onDrop}>
                {children}
            </div>
        </DragContext.Provider>

    )
}

export default DragArea
