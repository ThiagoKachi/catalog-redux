import { Header } from '../../components/Header';
import { Spinner } from '../../components/Spinner';

import { ProductList } from './components/ProductList';
import { useHomeController } from './useHomeController';

export function Home() {
  const { productsList, isLoading } = useHomeController();

  return (
    <div>
      <Header />
      {isLoading ? (
        <div className="flex items-center justify-center mt-[25%]">
          <Spinner />
        </div>
      ) : (
        <ProductList products={productsList} />
      )}
    </div>
  );
}
