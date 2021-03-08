import React from "react";
import { DragContextType } from "~/types/dragTypes";


export const DragContext = React.createContext<DragContextType | null>(null);

export default DragContext