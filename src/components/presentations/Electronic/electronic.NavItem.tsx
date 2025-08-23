'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export function ElectronicNavItem (props:{name:string,href:string})
{
    const currentPath = usePathname();

    return (
        <div>
<Link 
  href={props.href} 
  className={`font-bold block p-1 lg:py-2 px-3 text-text-primary underline-offset-4
             hover:text-amber-500
             hover:underline
             ${currentPath === props.href ? 'text-amber-500' : 'hover:text-orange-500'}
             hover:translate-y-[-5px] transition duration-300 ease-in-out`}>
  {props.name}
</Link>
        </div>
    )
}
