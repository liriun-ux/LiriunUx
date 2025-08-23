'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export function WoodFurnitureNavItem (props:{name:string,href:string})
{
    const currentPath = usePathname();

    return (
        <div>
<Link 
  href={props.href} 
  className={`block py-1 px-2  underline-offset-4
             hover:bg-amber-800
             hover:text-white
             rounded-lg
             hover:skew-x-12 transition-transform
             
             ${currentPath === props.href ? ' bg-amber-800 text-white  skew-x-6 ' : 'text-white bg-amber-800/30 '}
             hover:translate-y-[-5px] transition duration-300 ease-in-out`}>
  {props.name}
</Link>
        </div>
    )
}
