import { Product } from '../../models/Product';
import { httpClient } from '../httpClient';

export async function getOne(productId: string) {
  const data = await httpClient.get<Product>(`/products/${productId}`);

  return data;
}
