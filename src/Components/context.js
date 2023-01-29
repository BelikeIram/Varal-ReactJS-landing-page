import { createContext, useContext, useState } from "react";
import React from "react";

const AppContext = createContext()
export const AppProvider = ({children})=>{
    const [IsSidebarOpen, setIsSidebarOpen] = useState(false)

    const openSidebar = ()=>{
        setIsSidebarOpen(true)
    }
    const closeSidebar = ()=>{
        setIsSidebarOpen(false)
    }
    return(
        <AppContext.Provider value={{openSidebar,closeSidebar, IsSidebarOpen}}>
          {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = ()=>{
    return useContext(AppContext);
}