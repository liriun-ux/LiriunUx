
'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import "@/styles/globals.css";

export function HeladeriaNavItem (props:{name:string,href:string})
{
    const currentPath = usePathname();

    return (

<div className="HIPlooo">
        <div id="" 
        className={`PSma-it ${currentPath === props.href ? 'active ' : ''}`}
        >
          <Link
            href={props.href}
            id=""
            className={`
                HPSma-tx
                ${currentPath === props.href ? 'active' : ''}
            `}
          >
                {props.name}
          </Link>
        </div>

    </div>
    )
}
