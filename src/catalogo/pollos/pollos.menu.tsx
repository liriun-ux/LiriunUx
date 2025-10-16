import Image from "next/image";

interface PollosMenuProps {
  slides: { img: string; title: string; description: string }[];
}
const PollosMenu:React.FC<PollosMenuProps> = ({ slides, }) => {


    return(
        <div className="PollosMenuBase">
            <div className="PollosMenuMenu">MENÚ</div>
            <div className="PollosMenuSlidesBase">
            {slides.map((slide, index) => (
                <div className="PollosMenuSlide" key={`slide-${index}`}>
                    <div className="PolloSlideImg">
                        <Image
                           src={slide.img} // Ruta de tu imagen
                           alt={slide.title}
                               fill
                          style={{ objectFit: "cover" }}
                          className="rounded-[3px]"
                        />
                    </div>
                    <div className="PolloSlideInfo">  
                        <div className="PollosSlideInfoTitle">{slide.title}</div>
                        <div className="PollosSlideInfoContent">{slide.description}</div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}
export default PollosMenu;
                        // <Image
                        //       src="/img/burger/burger03.jpg" // Ruta de tu imagen
                        //   alt="Hamburguesa móvil"
                        //   fill
                        //   className=" rounded-[0.5rem]"
                        //   style={{ objectFit: "cover" }}
                        // />
