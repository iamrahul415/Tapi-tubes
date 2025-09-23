import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  teamMembers: [],
  loading: false,
  error: null,
};
const BASE_URL = import.meta.env.VITE_BASE_URL;
// Async thunk for fetching team members
export const fetchTeamMembers = createAsyncThunk(
  "team/fetchTeamMembers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/team`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (!result.success) {
        throw new Error("API request failed");
      }

      return result.data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch team members");
    }
  }
);

// Create the slice
const personSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    // Synchronous reducers
    clearTeamMembers: (state) => {
      state.teamMembers = [];
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeamMembers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTeamMembers.fulfilled, (state, action) => {
        state.loading = false;
        state.teamMembers = action.payload;
        state.error = null;
      })
      .addCase(fetchTeamMembers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearTeamMembers, clearError } = personSlice.actions;
export default personSlice.reducer;

// Selectors
export const selectTeamMembers = (state) => state.team.teamMembers;
export const selectTeamLoading = (state) => state.team.loading;
export const selectTeamError = (state) => state.team.error;
