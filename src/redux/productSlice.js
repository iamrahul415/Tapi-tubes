//redux/productSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Initial state - FIXED: Added missing selectedProduct states
const initialState = {
  products: [],
  selectedProduct: null,
  loading: false,
  selectedProductLoading: false,
  error: null,
  selectedProductError: null,
};

const BASE_URL = import.meta.env.VITE_BASE_URL;

// Async thunk for fetching products
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/product`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      if (!result.success) {
        throw new Error('API request failed');
      }

      return result.data;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to fetch products');
    }
  }
);

// Async thunk for fetching single product by ID
export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async (productId, { rejectWithValue }) => {
    try {
      if (!productId) {
        throw new Error('Product ID is required');
      }

      const response = await fetch(`${BASE_URL}/product/${productId}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      if (!result.success) {
        throw new Error('API request failed');
      }

      return result.data;
    } catch (error) {
      console.error('Fetch product by ID error:', error);
      return rejectWithValue(error.message || 'Failed to fetch product details');
    }
  }
);

// Create the slice
const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    selectedProduct: null,
    productsLoading: false,
    selectedProductLoading: false,
    productsError: null,
    selectedProductError: null,
    lastFetchedProductId: null, // Track the last fetched product ID
  },
  reducers: {
    clearProducts: (state) => {
      state.products = [];
    },
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
      state.selectedProductLoading = false;
      state.selectedProductError = null;
      state.lastFetchedProductId = null;
    },
    // ✅ NEW: Action to clear product only when actually leaving product section
    clearSelectedProductConditional: (state, action) => {
      const { currentPath } = action.payload;
      if (!currentPath.includes('/product/')) {
        state.selectedProduct = null;
        state.selectedProductLoading = false;
        state.selectedProductError = null;
        state.lastFetchedProductId = null;
      }
    },
    clearError: (state) => {
      state.error = null;
    },
    clearSelectedProductError: (state) => {
      state.selectedProductError = null;
    },
    clearAllErrors: (state) => {
      state.error = null;
      state.selectedProductError = null;
    },
    prepareProductNavigation: (state, action) => {
      const { productId } = action.payload;
      if (state.lastFetchedProductId !== productId) {
        state.selectedProductLoading = true;
        state.selectedProductError = null;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      // Fetch all products cases
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Fetch single product cases
      .addCase(fetchProductById.pending, (state) => {
        state.selectedProductLoading = true;
        state.selectedProductError = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.selectedProductLoading = false;
        state.selectedProduct = action.payload;
        state.selectedProductError = null;
        state.lastFetchedProductId = action.payload._id;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.selectedProductLoading = false;
        state.selectedProductError = action.payload;
        // Only clear product if there was actually an error
        if (!state.selectedProduct) {
          state.selectedProduct = null;
        }
      });
  },
});

export const {
  clearProducts,
  clearSelectedProduct,
  clearSelectedProductConditional,
  prepareProductNavigation,
  clearError,
  clearSelectedProductError,
  clearAllErrors
} = productSlice.actions;

export default productSlice.reducer;

// Selectors
export const selectProducts = (state) => state.products.products;
export const selectProductsLoading = (state) => state.products.loading;
export const selectProductsError = (state) => state.products.error;

// Selectors for individual product
export const selectSelectedProduct = (state) => state.products.selectedProduct;
export const selectSelectedProductLoading = (state) => state.products.selectedProductLoading;
export const selectSelectedProductError = (state) => state.products.selectedProductError;

// Helper selector to get product by ID from the products list
export const selectProductById = (state, productId) => 
  state.products.products.find(product => product._id === productId);
