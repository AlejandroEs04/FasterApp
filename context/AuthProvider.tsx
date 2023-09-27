'use client'
import React, { ReactNode, useState } from "react"
import { SessionProvider } from 'next-auth/react'

interface Props {
    children: ReactNode
}

const Providers = ({children}: Props) => {
    return (
        <SessionProvider>{children}</SessionProvider>
    )
}

export default Providers