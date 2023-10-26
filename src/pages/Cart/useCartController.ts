import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../store';
import {
  decrement,
  getAllProductsInCart,
  increment,
  removeProductFromCart,
  total,
} from '../../store/slices/cart';
import { formatCurrencyFromAPI } from '../../utils/formatCurrency';

export function useCartController() {
  const dispatch = useAppDispatch();

  const { isLoading, cartProductsList, cartProductsListQtd, checkoutDetails } =
    useAppSelector((state) => state.cart);

  function itemTotalPrice(qtd: number, unitPrice: string) {
    return qtd * formatCurrencyFromAPI(unitPrice);
  }

  function handleIncrement(id: number) {
    dispatch(increment(id));
  }

  function handleDecrement(id: number) {
    dispatch(decrement(id));
  }

  async function handleRemoveProduct(id: number) {
    await dispatch(removeProductFromCart(id));
    dispatch(getAllProductsInCart());
  }

  useEffect(() => {
    async function getCartDetails() {
      await dispatch(getAllProductsInCart());
      await dispatch(total());
    }

    getCartDetails();
  }, [dispatch]);

  return {
    isLoading,
    cartProductsList,
    cartProductsListQtd,
    handleIncrement,
    handleDecrement,
    itemTotalPrice,
    handleRemoveProduct,
    cartTotal: checkoutDetails.total,
  };
}
