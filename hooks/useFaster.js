'use client'
import FasterContext from "../context/FasterProvider"
import { useContext } from "react"

const useFaster = () => {
    return useContext(FasterContext)
}

export default useFaster