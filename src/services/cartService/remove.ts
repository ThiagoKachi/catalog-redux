import { Product } from '../../models/Product';
import { httpClient } from '../httpClient';

export async function remove(id: number) {
  const data = await httpClient.delete<Product>(`/cart/${id}`);

  return data;
}
