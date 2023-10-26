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

  const dispatch = useAppDispatch();

  function addProductToCart(quantity: number, size: string) {
    const data = {
      ...productDetails,
      selectedQuantity: quantity,
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

  return { productDetails, addProductToCart };
}
