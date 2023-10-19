interface ItemProps {
  item: {
    id: number;
    name: string;
    description: string;
    imgUrl: string;
    originalPrice: number;
    discountPrice: number;
    subtotal: number;
  };
}

export function Item({ item }: ItemProps) {
  return (
    <div className="flex flex-wrap items-center mb-6 -mx-4 md:mb-8">
      <div className="w-full px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full px-4 mb-3 md:w-1/3">
            <div className="w-full h-96 md:h-24 md:w-24">
              <img
                src={item.imgUrl}
                alt={item.name}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="w-2/3 px-4">
            <h2 className="mb-2 text-xl font-bold text-zinc-700 max-w-xs whitespace-normal">
              {item.name}
            </h2>
          </div>
        </div>
      </div>
      <div className="hidden px-4 lg:block lg:w-2/12">
        <p className="text-lg font-bold text-purple-500">
          R$ {item.discountPrice}
        </p>
        <span className="text-xs text-gray-500 line-through">
          R$ {item.originalPrice}
        </span>
      </div>
      <div className="w-auto px-4 md:w-1/6 lg:w-2/12 ">
        <div className="inline-flex items-center px-4 font-semibold text-gray-500 border border-gray-200 rounded-md">
          <button type="button" className="py-2 hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-dash"
              viewBox="0 0 16 16"
            >
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
            </svg>
          </button>
          <input
            type="number"
            className="w-12 px-2 py-4 text-center border-0 rounded-md  bg-gray-50 md:text-right"
            placeholder="1"
          />
          <button type="button" className="py-2 hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-plus"
              viewBox="0 0 16 16"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="w-auto px-4 text-right md:w-1/6 lg:w-2/12 ">
        <p className="text-lg font-bold text-purple-500">R$ {item.subtotal}</p>
      </div>
    </div>
  );
}
