import { Size } from '../../../../models/Product';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { selectSize } from '../../../../store/slices/products';

interface SizesProps {
  sizes: Size[];
}

export function Sizes({ sizes }: SizesProps) {
  const dispatch = useAppDispatch();

  const { selectedSize } = useAppSelector((state) => state.products);

  return (
    <div className="flex flex-col items-start mb-8">
      <h2 className="w-32 text-xl font-bold text-zinc-700">Tamanhos:</h2>
      <div className="flex flex-wrap -mb-2 mt-4">
        {sizes.map((size) => (
          <button
            key={size.sku}
            type="button"
            disabled={!size.available}
            onClick={() => dispatch(selectSize(size.size))}
            className={`py-1 mb-2 mr-1 border w-11 hover:border-purple-400 hover:text-purple-600 disabled:hover:border-zinc-300 disabled:cursor-not-allowed disabled:text-zinc-300 ${
              selectedSize === size.size && 'border-purple-400 text-purple-600'
            }`}
          >
            {size.size}
          </button>
        ))}
      </div>
    </div>
  );
}
