import Image from "next/image";

const ProductsHeladeria: React.FC = () => {
    return(
        <div className="HldPrdBs">
            <div className="HldPrd">
                    <div className="HeladoImg">
                        <Image
        src="/img/helado/heladoFrutilla.jpg"
                           alt="saltena"
                               fill
                          style={{ objectFit: "cover" }}
                          className="rounded-[3px]"
                        />
                    </div>

                    <div className="HeladoSlideInfo">  
      <main className="flex flex-col items-center justify-center text-center mt-20 md:mt-32 px-6">
        <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 max-w-lg shadow-lg border border-white/20 transition-transform hover:scale-105">
          <h2 className="text-4xl font-bold mb-4 text-pink-200">
            Helado de Frutilla Premium
          </h2>
          <p className="text-lg text-gray-100 mb-6">
            Suave, cremoso y hecho con frutillas naturales. Perfecto para endulzar tu día.
          </p>
          <button className="px-6 py-2 bg-pink-500 hover:bg-pink-400 text-white rounded-full font-semibold shadow-md transition">
            Ordenar ahora
          </button>
        </div>
      </main>
                    </div>
            </div>
        </div>
    )
}

export default ProductsHeladeria;
