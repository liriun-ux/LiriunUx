'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export function StationeryStoreNavItem (props:{name:string,href:string})
{
    const currentPath = usePathname();

    return (
        <div>
<Link 
  href={props.href} 
  className={`block py-1 px-2  underline-offset-4
             hover:bg-green-50
             hover:text-green-900
             text-green-900
             rounded-lg
             ${currentPath === props.href ? 'text-green-700 bg-green-50' : ''}
             hover:translate-y-[-5px] transition duration-300 ease-in-out`}>
  {props.name}
</Link>
        </div>
    )
}
