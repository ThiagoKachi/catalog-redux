import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { Product } from '../../models/Product';
import { productsService } from '../../services/productsService';

interface ProductState {
  productsList: Product[];
  productDetails: Product | null;
  isLoading: boolean;
  quantity: number;
  selectedSize: string | null;
}

const initialState: ProductState = {
  productsList: [],
  productDetails: null,
  isLoading: false,
  quantity: 1,
  selectedSize: null,
};

export const loadProducts = createAsyncThunk('products/load', async () => {
  const response = await productsService.getAll();

  return response.data;
});

export const getProductDetails = createAsyncThunk(
  'products/load-details',
  async (productId: string) => {
    const response = await productsService.getOne(productId);

    return response.data;
  },
);

export const productsSlice = createSlice({
  name: 'products',
  initialState,

  reducers: {
    increment: (state, action) => {
      state.quantity += action.payload;
    },
    decrement: (state, action) => {
      if (state.quantity === 0) return;
      state.quantity -= action.payload;
    },
    selectSize: (state, action) => {
      state.selectedSize = action.payload;
    },
    reset: (state) => {
      state.productDetails = null;
      state.quantity = 0;
      state.selectedSize = null;
    },
  },

  extraReducers(builder) {
    // All
    builder.addCase(loadProducts.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(loadProducts.fulfilled, (state, action) => {
      state.productsList = action.payload;
      state.isLoading = false;
      productsSlice.caseReducers.reset(state);
    });

    // Details
    builder.addCase(getProductDetails.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getProductDetails.fulfilled, (state, action) => {
      state.productDetails = action.payload;
      state.isLoading = false;
    });
  },
});

export const { increment, decrement, selectSize } = productsSlice.actions;

export const products = productsSlice.reducer;
