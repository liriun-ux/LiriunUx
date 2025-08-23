'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export function GardenNavItem (props:{name:string,href:string})
{
    const currentPath = usePathname();

    return (
        <div>
<Link 
  href={props.href} 
  className={`block my-1 px-2  underline-offset-4
             hover:bg-green-200/50
             rounded-lg
             text-green-950
             ${currentPath === props.href ? ' bg-green-200/50    ' : ' '}
             hover:translate-y-[-5px] transition duration-300 ease-in-out`}>
  {props.name}
</Link>
        </div>
    )
}
