'use client'
import axios from "axios";
import { useState, useEffect, createContext } from "react";

const FasterContext = createContext()

const FasterProvider = ({children}) => {

    


    return (
        <FasterContext.Provider
            value={{

            }}
        >
            {children}
        </FasterContext.Provider>
    )
}

export {
    FasterProvider
}

export default FasterContext

