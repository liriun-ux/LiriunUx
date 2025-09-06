'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import "@/styles/globals.css";

export function SmaNavBar (props:{name:string,href:string})
{
    const currentPath = usePathname();

    return (

<div className="Isombra">
  <div className="Itrapecio">
        <div id="" 
        className={`Sma-it ${currentPath === props.href ? 'active ' : ''}`}
        >
          <Link
            href={props.href}
            id=""
            className={`
                Sma-tx
                ${currentPath === props.href ? 'active' : ''}
            `}
          >
                {props.name}
          </Link>
        </div>

    </div>
    </div>
    )
}
