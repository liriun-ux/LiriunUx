
// components/BreadShopInfoCard.tsx

const BreadShopInfoCard: React.FC = () => {
  return (
    <div className="bg-red-500 text-gray-800 fixed bottom-4 right-4 w-64 shadow-lg rounded-lg p-4 z-20">
      <h2 className="text-lg font-semibold mb-2">BreadShopInfoCard</h2>
      <p className="text-sm mb-4">Algunos detalles relevantes aquí.</p>
      <a href="#more-info" className="text-blue-500 hover:underline">Cotizar</a>
    </div>
  );
};

export default BreadShopInfoCard;
