import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { CartCheckoutDetails } from '../../models/Cart';
import { Product } from '../../models/Product';
import { cartService } from '../../services/cartService';

interface CartState {
  cartProductsList: Product[];
  cartProductsListQtd: number;
  checkoutDetails: CartCheckoutDetails;
  isLoading: boolean;
}

const initialState: CartState = {
  cartProductsList: [],
  cartProductsListQtd: 0,
  checkoutDetails: {
    subtotal: 0,
    freight: 0,
    total: 0,
  },
  isLoading: false,
};

export const saveInCart = createAsyncThunk(
  'cart/save',
  async (cartData: Product) => {
    const response = await cartService.save(cartData);

    return response.data;
  },
);

export const getAllProductsInCart = createAsyncThunk(
  'cart/getAll',
  async () => {
    const response = await cartService.getAll();

    return response.data;
  },
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    addToCart: (state, action) => {
      state.cartProductsList.push(action.payload);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(saveInCart.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(saveInCart.fulfilled, (state) => {
      state.isLoading = false;
    });

    builder.addCase(getAllProductsInCart.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getAllProductsInCart.fulfilled, (state, action) => {
      state.cartProductsListQtd = action.payload.length;
      state.cartProductsList = action.payload;
      state.isLoading = false;
    });
  },
});

export const { addToCart } = cartSlice.actions;

export const cart = cartSlice.reducer;

// Sessão de produtos
// Se for o mesmo ID, atualiza o produto no carrinho
// Adicionar e remover quantidade de produtos no carrinho
// Fazer a soma levando em consideração a quantidade
// Botão de excluir produto do carrinho

// Sessão de checkout
// Calcular o subtotal e total

// Refatorar componente Details (Colocar valores do redux dentro do controller)
