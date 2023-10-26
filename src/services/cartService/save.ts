import { Product } from '../../models/Product';
import { httpClient } from '../httpClient';

export async function save(cartData: Product) {
  const data = await httpClient.post(`/cart`, cartData);

  return data;
}
