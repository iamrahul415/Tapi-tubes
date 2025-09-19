// src/features/blogs/blogsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://tapi-tubes-server.onrender.com';

// Helper for API calls
const apiCall = async (url, options = {}) => {
  const response = await fetch(`${BASE_URL}${url}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    let errorData;
    try {
      errorData = await response.json();
    } catch {
      errorData = {};
    }
    throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
  }

  return response.json();
};

// Thunks
export const getAllBlogs = createAsyncThunk(
  'blogs/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const result = await apiCall('/blog');
      return result.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const getBlogById = createAsyncThunk(
  'blogs/getById',
  async (blogId, { rejectWithValue }) => {
    try {
      const result = await apiCall(`/blog/${blogId}`);
      return result.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Initial state
const initialState = {
  blogs: [],
  currentBlog: null,
  isLoading: false,
  error: null,
};

const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    clearCurrentBlog(state) {
      state.currentBlog = null;
    },
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // getAllBlogs
      .addCase(getAllBlogs.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogs = action.payload;
      })
      .addCase(getAllBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // getBlogById
      .addCase(getBlogById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getBlogById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentBlog = action.payload;
      })
      .addCase(getBlogById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { clearCurrentBlog, clearError } = blogsSlice.actions;

export const selectBlogs = (state) => state.blogs.blogs;
export const selectCurrentBlog = (state) => state.blogs.currentBlog;
export const selectBlogsLoading = (state) => state.blogs.isLoading;
export const selectBlogsError = (state) => state.blogs.error;

export default blogsSlice.reducer;
