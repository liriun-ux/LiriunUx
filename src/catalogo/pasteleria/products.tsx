import Image from "next/image";

const ProductSaltena: React.FC = () => {
    return(
        <div className="SltPrdBs">
            <div className="SltPrd">
                    <div className="SaltenaImg">
                        <Image
        src="/img/saltena/saltena.webp"
                           alt="saltena"
                               fill
                          style={{ objectFit: "cover" }}
                          className="rounded-[3px]"
                        />
                    </div>

                    <div className="SalenaSlideInfo">  
                        <div className="SaltenaSlideInfoTitle">Salteña Mixta</div>
                        <div className="SaltenaSlideInfoContent">Salteña con carne, pollo, huevo y charque.</div>
                    </div>
            </div>
        </div>
    )
}

export default ProductSaltena;
