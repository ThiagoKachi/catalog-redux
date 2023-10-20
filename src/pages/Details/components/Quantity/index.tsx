import { useAppDispatch, useAppSelector } from '../../../../store';
import { decrement, increment } from '../../../../store/slices/products';

interface QuantityProps {
  disabled: boolean;
}

export function Quantity({ disabled }: QuantityProps) {
  const dispatch = useAppDispatch();

  const { quantity } = useAppSelector((state) => state.products);

  return (
    <div className="w-32 mb-8">
      <span className="w-full text-xl font-semibold text-zinc-700">
        Quantidade
      </span>
      <div className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
        <button
          type="button"
          className="w-20 h-full text-white bg-zinc-500 rounded-l outline-none cursor-pointer hover:text-white hover:bg-zinc-400 transition-colors disabled:bg-zinc-300 disabled:cursor-not-allowed"
          disabled={quantity === 1 || !disabled}
          onClick={() => dispatch(decrement(1))}
        >
          <span className="m-auto text-2xl font-thin">-</span>
        </button>
        <input
          type="number"
          className="flex items-center w-full font-semibold text-center text-white placeholder-white bg-zinc-300 outline-nonedark:placeholder-gray-400 focus:outline-none text-md hover:text-white text-lg"
          placeholder="0"
          readOnly
          value={quantity}
        />
        <button
          type="button"
          className="w-20 h-full text-white bg-zinc-500 rounded-r outline-none cursor-pointer hover:text-white hover:bg-zinc-400 transition-colors disabled:bg-zinc-300 disabled:cursor-not-allowed"
          disabled={!disabled}
          onClick={() => dispatch(increment(1))}
        >
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  );
}
