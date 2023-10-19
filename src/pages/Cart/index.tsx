import { Header } from '../../components/Header';

import { Item } from './components/Item';
import { Summary } from './components/Summary';

const cartMock = [
  {
    id: 10300459,
    imgUrl: 'https://i.postimg.cc/kGjz3dpD/pexels-cottonbro-3296434.jpg',
    name: 'Camera DSL',
    description: 'Picture frame',
    originalPrice: 199.99,
    discountPrice: 99.99,
    quantity: 1,
    subtotal: 99.99,
  },
  {
    id: 123458,
    imgUrl: 'https://i.postimg.cc/kGjz3dpD/pexels-cottonbro-3296434.jpg',
    name: 'Camera DSL',
    description: 'Picture frame',
    originalPrice: 199.99,
    discountPrice: 99.99,
    quantity: 1,
    subtotal: 99.99,
  },
  {
    id: 107896,
    imgUrl: 'https://i.postimg.cc/kGjz3dpD/pexels-cottonbro-3296434.jpg',
    name: 'Camera DSL',
    description: 'Picture frame',
    originalPrice: 199.99,
    discountPrice: 99.99,
    quantity: 1,
    subtotal: 99.99,
  },
  {
    id: 187,
    imgUrl: 'https://i.postimg.cc/kGjz3dpD/pexels-cottonbro-3296434.jpg',
    name: 'Camera DSL',
    description: 'Picture frame',
    originalPrice: 199.99,
    discountPrice: 99.99,
    quantity: 1,
    subtotal: 99.99,
  },
  {
    id: 1654,
    imgUrl: 'https://i.postimg.cc/kGjz3dpD/pexels-cottonbro-3296434.jpg',
    name: 'Camera DSL',
    description: 'Picture frame',
    originalPrice: 199.99,
    discountPrice: 99.99,
    quantity: 1,
    subtotal: 99.99,
  },
  {
    id: 12345,
    imgUrl: 'https://i.postimg.cc/kGjz3dpD/pexels-cottonbro-3296434.jpg',
    name: 'Camera DSL',
    description: 'Picture frame',
    originalPrice: 199.99,
    discountPrice: 99.99,
    quantity: 1,
    subtotal: 99.99,
  },
  {
    id: 1444,
    imgUrl: 'https://i.postimg.cc/kGjz3dpD/pexels-cottonbro-3296434.jpg',
    name: 'Camera DSL',
    description: 'Picture frame',
    originalPrice: 199.99,
    discountPrice: 99.99,
    quantity: 1,
    subtotal: 99.99,
  },
  {
    id: 1321,
    imgUrl: 'https://i.postimg.cc/kGjz3dpD/pexels-cottonbro-3296434.jpg',
    name: 'Camera DSL',
    description: 'Picture frame',
    originalPrice: 199.99,
    discountPrice: 99.99,
    quantity: 1,
    subtotal: 99.99,
  },
  {
    id: 1231,
    imgUrl: 'https://i.postimg.cc/kGjz3dpD/pexels-cottonbro-3296434.jpg',
    name: 'Camera DSL',
    description: 'Picture frame',
    originalPrice: 199.99,
    discountPrice: 99.99,
    quantity: 1,
    subtotal: 99.99,
  },
  {
    id: 112,
    imgUrl: 'https://i.postimg.cc/kGjz3dpD/pexels-cottonbro-3296434.jpg',
    name: 'Camera DSL',
    description: 'Picture frame',
    originalPrice: 199.99,
    discountPrice: 99.99,
    quantity: 1,
    subtotal: 99.99,
  },
];

export function Cart() {
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
                  {cartMock.map((item) => (
                    <Item key={item.id} item={item} />
                  ))}
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
