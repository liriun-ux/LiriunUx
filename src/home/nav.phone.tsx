"use client"
import { HomeNavBarItem } from './navbar.item';
type Props = {
  open: boolean;
};
const navigation =
  [
    {
      'name': "INICIO",
      'href': "/"
    },
    {
      'name': "CATALAGO",
      'href': "/catalogo"
    },
    {
      'name': "FUNCIONES",
      'href': "/funciones"
    },
    {
      'name': "¿NESESITO UNA WEB?",
      'href': "/info"
    }
  ]

// const HomeNavPBar: React.FC = () => {
const HomeNavPBar: React.FC<Props> = ({ open }) => {
    return(
      <div id="NavPhone" >
          <div id="NavPhoneBox" className={`entrada-desde-izquierda  ${open && 'salida-desde-izquierda' } `}>
             <div id="NavPhoneItems">
                     <ul className="font-medium flex flex-col p-4  mt-4 border border-gray-100 rounded-lg    ">
                         {navigation.map((item) =>
                           <li key={item.name} >
                             <HomeNavBarItem  name={item.name} href={item.href}/>
                           </li>)
                         }
                     </ul>
             </div>
            
             <div id='NavCot' >
                 <div id="cont-home-nav-item-ct" 
                 >
                   <div
                     className={`
                         text-animado-ct
                     `}
                   >
                     CONTACTOS
                   </div>
                 </div>
             </div>
          </div>
      </div>
    )
}

export default HomeNavPBar;


