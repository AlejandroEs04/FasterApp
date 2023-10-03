import Link from "next/link"

const NavSimple = ({ links, bg }) => {
  return (
    <div className={`px-10 py-2 ${bg && 'bg-white'}`}>
        {links.map(link => (
            <Link href={`${link.link}`} className="text-xl text-gray-600 uppercase hover:text-gray-800 border-r-2 border-r-gray-500 last-of-type:border-none px-5">{link.name}</Link> 
        ))}
    </div>
  )
}

export default NavSimple
