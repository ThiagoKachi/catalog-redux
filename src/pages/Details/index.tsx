import { Header } from '../../components/Header';

import { Sizes } from './components/Sizes';

export function ProductDetails() {
  return (
    <>
      <Header />
      <section className="overflow-hidden bg-zinc-100 py-10 font-poppins">
        <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 md:w-1/2 ">
              <div className="sticky top-0 z-50 overflow-hidden ">
                <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                  <img
                    src="https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg"
                    alt=""
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
                    Shoes
                  </h2>
                  <p className="inline-block mb-8 text-4xl font-bold text-zinc-600">
                    <small className="block font-normal text-sm mt-2 text-zinc-500 ml-0.5 mb-2">
                      À vista
                    </small>
                    <span>$1000.99</span>
                    <span className="text-base font-normal text-zinc-400 line-through ml-2">
                      $1500.99
                    </span>
                    <small className="block font-normal text-sm mt-2 text-zinc-500">
                      ou
                    </small>
                    <h4 className="max-w-xl mt-2 text-[20px] md:text-[24px] font-normal text-zinc-400">
                      3x R$ 66,63
                    </h4>
                  </p>
                  <p className="text-green-600">Disponível</p>
                </div>

                <Sizes />

                <div className="w-32 mb-8">
                  <span className="w-full text-xl font-semibold text-zinc-700">
                    Quantidade
                  </span>
                  <div className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
                    <button
                      type="button"
                      className="w-20 h-full text-white bg-zinc-500 rounded-l outline-none cursor-pointer hover:text-white hover:bg-zinc-400 transition-colors"
                    >
                      <span className="m-auto text-2xl font-thin">-</span>
                    </button>
                    <input
                      type="number"
                      className="flex items-center w-full font-semibold text-center text-white placeholder-white bg-zinc-300 outline-nonedark:placeholder-gray-400 focus:outline-none text-md hover:text-white text-lg"
                      placeholder="0"
                    />
                    <button
                      type="button"
                      className="w-20 h-full text-white bg-zinc-500 rounded-r outline-none cursor-pointer hover:text-white hover:bg-zinc-400 transition-colors"
                    >
                      <span className="m-auto text-2xl font-thin">+</span>
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap items-center -mx-4 ">
                  <div className="w-full px-4 mb-4 lg:mb-0">
                    <button
                      type="button"
                      className="flex items-center justify-center w-full p-4 text-purple-500 border border-purple-500 rounded-md hover:bg-purple-600 hover:border-purple-600 hover:text-gray-100 transition-colors"
                    >
                      Adicionar ao carrinho
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
