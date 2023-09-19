'use client'
import useModal from "@/hooks/useModal"
import Link from "next/link"
import { Offcanvas, Button, Nav } from "react-bootstrap"

function Navegacion() {

    const { show, handleChangeShow } = useModal()

    return (
        <>
            <Button onClick={handleChangeShow}>
                navegacion
            </Button>   

            <Offcanvas show={show} onHide={handleChangeShow} placement='end' >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Navegacion</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="align-items-end flex-grow-1 flex-column pe-3">
                        <Link onClick={handleChangeShow} href="/">Inicio</Link>
                        <Link onClick={handleChangeShow} href="/usuario">Usuario</Link>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>    
        </>


    )
}

export default Navegacion
