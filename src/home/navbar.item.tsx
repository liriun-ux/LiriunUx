
'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import "@/styles/globals.css";

export function HomeNavBarItem (props:{name:string,href:string})
{
    const currentPath = usePathname();

    return (
<div id="" 
className={`cont-home-nav-item-fo ${currentPath === props.href ? 'active ' : ''}`}
>
  <Link
    href={props.href}
    id=""
    className={`
      block my-1 px-2  
      transition duration-300 ease-in-out
      ${currentPath === props.href ? 'text-[#e0e0e0] font-bold  text-animado-IN ' : 'text-[#4a6c7b] text-animado'}
    `}
  >
    {props.name}
  </Link>
</div>
    )
}
