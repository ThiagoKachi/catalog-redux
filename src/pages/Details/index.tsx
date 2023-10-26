import { Header } from '../../components/Header';
import { Spinner } from '../../components/Spinner';

import { Quantity } from './components/Quantity';
import { Sizes } from './components/Sizes';
import { useDetailsController } from './useDetailsController';

export function ProductDetails() {
  const {
    productDetails,
    addProductToCart,
    isLoading,
    hasSizesAvailable,
    selectedSize,
    isLoadingAddToCart,
    quantity,
  } = useDetailsController();

  return (
    <>
      <Header />
      {isLoading ? (
        <div className="flex items-center justify-center mt-[15%]">
          <Spinner />
        </div>
      ) : (
        <section className="overflow-hidden bg-zinc-100 py-10 font-poppins">
          <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4 md:w-1/2 ">
                <div className="sticky top-0 z-50 overflow-hidden ">
                  <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                    <img
                      src={productDetails?.image}
                      alt={productDetails?.name}
                      className="object-cover w-full lg:h-full "
                    />
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 ">
                <div className="lg:pl-20">
                  <div className="mb-8 ">
                    <span className="text-lg font-medium text-purple-500">
                      Novo
                    </span>
                    <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold md:text-4xl text-zinc-700">
                      {productDetails?.name}
                    </h2>
                    <div className="inline-block mb-8 text-4xl font-bold text-zinc-600">
                      <small className="block font-normal text-sm mt-2 text-zinc-500 ml-0.5 mb-2">
                        À vista
                      </small>
                      <span>{productDetails?.actual_price}</span>
                      {productDetails?.actual_price !==
                        productDetails?.regular_price && (
                        <span className="text-base font-normal text-zinc-400 line-through ml-2">
                          {productDetails?.regular_price}
                        </span>
                      )}
                      <small className="block font-normal text-sm mt-2 text-zinc-500">
                        ou
                      </small>
                      <h4 className="max-w-xl mt-2 text-[20px] md:text-[24px] font-normal text-zinc-400">
                        {productDetails?.installments}
                      </h4>
                    </div>
                    {hasSizesAvailable ? (
                      <p className="text-green-600">Disponível</p>
                    ) : (
                      <p className="text-red-600">Indisponível</p>
                    )}
                  </div>

                  <Sizes sizes={productDetails?.sizes || []} />

                  <Quantity disabled={hasSizesAvailable!} />

                  <div className="flex flex-wrap items-center -mx-4 ">
                    <div className="w-full px-4 mb-4 lg:mb-0">
                      <button
                        type="button"
                        className="flex items-center justify-center w-full p-4 text-purple-500 border border-purple-500 rounded-md hover:bg-purple-600 hover:border-purple-600 hover:text-gray-100 transition-colors disabled:bg-zinc-200 disabled:border-zinc-200 disabled:text-zinc-500 disabled:cursor-not-allowed"
                        disabled={
                          !hasSizesAvailable ||
                          !selectedSize ||
                          isLoadingAddToCart
                        }
                        onClick={() =>
                          addProductToCart(quantity, selectedSize!)
                        }
                      >
                        {isLoadingAddToCart ? (
                          <Spinner className="w-7 h-7 dark:text-gray-300" />
                        ) : (
                          'Adicionar ao carrinho'
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
