import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

import { CartCheckoutDetails } from '../../models/Cart';
import { Product } from '../../models/Product';
import { cartService } from '../../services/cartService';
import { formatCurrencyFromAPI } from '../../utils/formatCurrency';

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

export const removeProductFromCart = createAsyncThunk(
  'cart/remove',
  async (id: number) => {
    const response = await cartService.remove(id);

    return response.data;
  },
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const productAlreadyInCart = state.cartProductsList.find(
        (item) => item.id === action.payload.id,
      );

      if (productAlreadyInCart) {
        toast.error('Este produto já está no seu carrinho.');
        return;
      }

      state.cartProductsList.push(action.payload);
    },

    increment: (state, action) => {
      const cartItem = state.cartProductsList.find(
        (item) => item.id === action.payload,
      );

      if (cartItem) {
        cartItem.selectedQuantity! += 1;
      }

      cartSlice.caseReducers.total(state);
    },

    decrement: (state, action) => {
      const cartItem = state.cartProductsList.find(
        (item) => item.id === action.payload,
      );

      if (cartItem) {
        cartItem.selectedQuantity! -= 1;
      }

      cartSlice.caseReducers.total(state);
    },

    total: (state) => {
      state.checkoutDetails.total = state.cartProductsList.reduce(
        (acc, item) =>
          acc +
          item.selectedQuantity! * formatCurrencyFromAPI(item.actual_price),
        0,
      );
    },
  },

  extraReducers: (builder) => {
    builder.addCase(removeProductFromCart.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(removeProductFromCart.fulfilled, (state) => {
      state.isLoading = false;
    });

    builder.addCase(saveInCart.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(saveInCart.fulfilled, (state) => {
      state.isLoading = false;
      state.cartProductsListQtd = state.cartProductsList.length;
      toast.success('Produto adicionado ao carrinho!');
    });

    builder.addCase(saveInCart.rejected, (state) => {
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

export const { addToCart, increment, decrement, total } = cartSlice.actions;

export const cart = cartSlice.reducer;

// - Modificar a selectedQuantity e ao clicar em finalizar compra, salvar no carrinho
// Melhorar experiência quando for exlcuir item (não mostrar loading na tela inteira)
