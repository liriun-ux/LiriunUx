'use client'

// components/HomeFooter.tsx
import React from "react";
import { HomeNavBarItem } from "../navbar.item";
import PopupExample from "../pop";

const navigation =
  [
    {
      'name': "INICIO",
      'href': "/"
    },
    {
      'name': "CATÁLOGO",
      'href': "/catalogo"
    },
    {
      'name': "NOSOTROS",
      'href': "/nosotros"
    },
    {
      'name': "¿NECESITO UNA WEB?",
      'href': "/info"
    }
  ]
const HomeFooter: React.FC = () => {
    return (
    <section className="w-screen">
    <div className="Footer-base">
        <div className="foot-cnts">

             <div id="NavPhoneItems" className="ttfoo">
                     <ul className="font-medium flex flex-col p-4  mt-4 border border-gray-100 rounded-lg    ">
                         {navigation.map((item) =>
                           <li key={item.name} >
                             <HomeNavBarItem  name={item.name} href={item.href}/>
                           </li>)
                         }
                     </ul>
             </div>
            
             <div id='NavCot'  className="ttfoo">
                 <div id="cont-home-nav-item-ct" 
                 >

                    <PopupExample/>
                 </div>
             </div>
          </div>
    </div>
    </section>
    )
}

export default HomeFooter;
