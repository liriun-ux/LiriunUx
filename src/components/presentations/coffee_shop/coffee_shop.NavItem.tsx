'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export function CoffeeShopNavItem (props:{name:string,href:string})
{
    const currentPath = usePathname();

    return (
        <div>
<Link 
  href={props.href} 
  className={`block my-1 px-2  underline-offset-4
             hover:text-latteLight
             hover:underline
             rounded-lg
             ${currentPath === props.href ? ' text-latteLight underline    ' : '  text-vintageGold '}
             hover:translate-y-[-5px] transition duration-300 ease-in-out`}>
  {props.name}
</Link>
        </div>
    )
}
