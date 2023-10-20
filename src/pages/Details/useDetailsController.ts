import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../store';
import { getProductDetails } from '../../store/slices/products';

export function useDetailsController() {
  const { id } = useParams<{ id: string }>();
  const { productDetails } = useAppSelector((state) => state.products);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, id]);

  return { productDetails };
}
