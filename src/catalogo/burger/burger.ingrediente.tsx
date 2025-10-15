
interface IngredienteLineaProps {
  ingrediente: string
  gramos: string | number
}

export default function IngredienteLinea({ ingrediente, gramos }: IngredienteLineaProps) {
  return (
    <div className="flex items-center justify-between w-full max-w-md text-white font-serif ">
      <span className="whitespace-nowrap">{ingrediente}</span>
      <div className="flex-1 border-b border-dotted border-gray-500 mx-2 h-1"></div>
      <span className="whitespace-nowrap">{gramos} g</span>
    </div>
  )
}
