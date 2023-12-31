import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../store';
import { getAllProductsInCart } from '../../store/slices/cart';
import { loadProducts } from '../../store/slices/products';

export function useHomeController() {
  const { isLoading, productsList } = useAppSelector((state) => state.products);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadProducts());
    dispatch(getAllProductsInCart());
  }, [dispatch]);

  return { isLoading, productsList };
}
