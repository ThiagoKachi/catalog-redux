import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Product } from '../../models/Product';
import { useAppDispatch, useAppSelector } from '../../store';
import {
  addToCart,
  getAllProductsInCart,
  saveInCart,
} from '../../store/slices/cart';
import { getProductDetails } from '../../store/slices/products';

export function useDetailsController() {
  const { id } = useParams<{ id: string }>();
  const { productDetails } = useAppSelector((state) => state.products);

  const { isLoading, selectedSize, quantity } = useAppSelector(
    (state) => state.products,
  );

  const { isLoading: isLoadingAddToCart } = useAppSelector(
    (state) => state.cart,
  );

  const hasSizesAvailable = productDetails?.sizes.some(
    (size) => size.available === true,
  );

  const dispatch = useAppDispatch();

  function addProductToCart(qtd: number, size: string) {
    const data = {
      ...productDetails,
      selectedQuantity: qtd,
      selectedSize: size,
    };

    dispatch(addToCart(data));
    dispatch(saveInCart(data as Product));
  }

  useEffect(() => {
    if (id) {
      dispatch(getProductDetails(id));
    }
    dispatch(getAllProductsInCart());
  }, [dispatch, id]);

  return {
    productDetails,
    addProductToCart,
    isLoading,
    selectedSize,
    quantity,
    isLoadingAddToCart,
    hasSizesAvailable,
  };
}
