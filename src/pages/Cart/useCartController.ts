import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../store';
import { getAllProductsInCart } from '../../store/slices/cart';

export function useCartController() {
  const { isLoading, cartProductsList, cartProductsListQtd } = useAppSelector(
    (state) => state.cart,
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllProductsInCart());
  }, [dispatch]);

  return {
    isLoading,
    cartProductsList,
    cartProductsListQtd,
  };
}
