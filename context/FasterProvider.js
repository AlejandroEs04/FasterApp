'use client'
import { useState, useEffect, createContext } from "react";

const FasterContext = createContext()
const FasterProvider = ({children}) => {
    const [imagen, setImagen] = useState({})
    const [imageUrl, setImageUrl] = useState(null)

    const handleSaveItem = async() => {
        const formData = new FormData()
        formData.append('file', imagen)

        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData
        })

        const data = await response.json()
        setImageUrl(data.url)
    }

    return (
        <FasterContext.Provider
            value={{
                setImagen,
                imagen,
                imageUrl,
                setImageUrl,
                handleSaveItem
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

