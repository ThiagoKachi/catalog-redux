import { CartProductsList } from '../../models/Cart';
import { httpClient } from '../httpClient';

export async function getAll() {
  const data = await httpClient.get<CartProductsList[]>('/cart');

  return data;
}
