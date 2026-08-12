import type { User } from "@/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
  hasMore: boolean;
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
  hasMore: true,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },

    addUsers: (state, action: PayloadAction<User[]>) => {
      state.users.push(...action.payload);
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },

    setHasMore: (state, action: PayloadAction<boolean>) => {
      state.hasMore = action.payload;
    },
  },
});

export const { setUsers, addUsers, setLoading, setError, setHasMore } =
  usersSlice.actions;

export default usersSlice.reducer;
