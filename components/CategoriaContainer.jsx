import Image from "next/image"
import Link from "next/link"

const CategoriaContainer = ({ categoria }) => {
  return (
    <Link href={`/categorias/${categoria.id}`} className="flex flex-col gap-4 items-center hover:scale-110">
      <Image src={categoria.icono} alt={`Imagen de categoria ${categoria.nombre}`} width={35} height={35} className="h-20 w-auto" />
      <p className="font-bold text-3xl">{categoria.nombre}</p>
    </Link>
  )
}

export default CategoriaContainer
