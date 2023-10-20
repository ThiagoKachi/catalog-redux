import { Product } from '../../models/Product';
import { httpClient } from '../httpClient';

export async function getAll() {
  const data = await httpClient.get<Product[]>('/products');

  return data;
}
