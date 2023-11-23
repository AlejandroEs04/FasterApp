'use client'
import { useContext } from "react";
import { VisibilityContext, Arrow } from "react-horizontal-scrolling-menu"

export const LeftArrow = () => {
    const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext)

    return (
        <div className="hidden md:flex items-center" >
            <button 
                disabled={isFirstItemVisible} 
                onClick={() => scrollPrev()}
                className="hover:scale-110 hover:bg-opacity-30 md:flex items-center h-20"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
        </div>
    )
}

export const RightArrow = () => {
    const { isLastItemVisible, scrollNext } = useContext(VisibilityContext)

    return (
        <div className="hidden md:flex items-center" >
            <button 
                disabled={isLastItemVisible} 
                onClick={() => scrollNext()}
                className="hover:scale-110 hover:bg-opacity-30 md:flex items-center h-20"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>
    )
}