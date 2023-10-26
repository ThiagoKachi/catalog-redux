import { Header } from '../../components/Header';
import { Spinner } from '../../components/Spinner';

import { Item } from './components/Item';
import { Summary } from './components/Summary';
import { useCartController } from './useCartController';

export function Cart() {
  const { isLoading, cartProductsList } = useCartController();

  return (
    <div className="h-screen overflow-hidden">
      <Header />
      <section className="flex pt-8 bg-zinc-100 lg:h-screen">
        <div className="justify-center flex-1 px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6">
          <div className="p-8 bg-gray-50 rounded-md h-[85%]">
            <h2 className="mb-8 text-4xl font-bol text-zinc-800">Carrinho</h2>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4 overflow-y-auto max-h-[600px] mb-8 xl:w-8/12 xl:mb-0 scrollbar scrollbar-thin scrollbar-track-purple-100 scrollbar-thumb-purple-400">
                <div className="flex flex-wrap items-center mb-6 -mx-4 md:mb-8">
                  <div className="w-full md:block hidden px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
                    <h2 className="font-bold text-zinc-500">Produto</h2>
                  </div>
                  <div className="hidden px-4 lg:block lg:w-2/12">
                    <h2 className="font-bold text-zinc-500">Preço</h2>
                  </div>
                  <div className="hidden md:block px-4 md:w-1/6 lg:w-2/12 ">
                    <h2 className="font-bold text-zinc-500">Qtd.</h2>
                  </div>
                  <div className="hidden md:block px-4 text-right md:w-1/6 lg:w-2/12 ">
                    <h2 className="font-bold text-zinc-500">Subtotal</h2>
                  </div>
                </div>
                <div className="py-4 mb-8 border-t border-b border-gray-200">
                  {isLoading ? (
                    <div className="mx-[50%] my-[25%]">
                      <Spinner />
                    </div>
                  ) : (
                    cartProductsList.map((item) => (
                      <Item key={item.id} item={item} />
                    ))
                  )}
                </div>
              </div>

              <Summary />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
