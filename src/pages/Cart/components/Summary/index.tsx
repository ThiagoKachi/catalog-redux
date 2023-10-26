import { formatCurrencyBRL } from '../../../../utils/formatCurrency';

interface SummaryProps {
  cartTotal: number;
}

export function Summary({ cartTotal }: SummaryProps) {
  return (
    <div className="w-full px-0 mb-10 xl:w-4/12 xl:px-4 xl:mb-0">
      <div className="p-6 rounded-sm border border-purple-100 bg-purple-50 md:p-8">
        <h2 className="mb-8 text-2xl font-bold text-gray-700">
          Detalhes da Compra
        </h2>
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-300">
          <span className="text-gray-700">Subtotal</span>
          <span className="text-xl font-bold text-gray-700 ">
            {formatCurrencyBRL(cartTotal)}
          </span>
        </div>
        <div className="flex items-center justify-between pb-4 mb-4 ">
          <span className="text-gray-700 ">Frete</span>
          <span className="text-xl font-bold text-gray-700 ">Free</span>
        </div>
        <div className="flex items-center justify-between pb-4 mb-4 ">
          <span className="text-gray-700">Total</span>
          <span className="text-xl font-bold text-gray-700">
            {formatCurrencyBRL(cartTotal)}
          </span>
        </div>
        <div className="flex items-center justify-between ">
          <button
            type="button"
            className="block w-full py-4 font-bold text-center text-gray-100 uppercase bg-purple-500 rounded-md hover:bg-purple-600 transition-colors"
          >
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  );
}
