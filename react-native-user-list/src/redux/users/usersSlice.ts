import type { User } from "@/types/user";
import { isEmptyObject } from "@/utils/isEmptyObject";
import { getCache, saveCache } from "@/utils/storage";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
  LastUserId: number;
  hasMore: boolean;
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
  LastUserId: 1,
  hasMore: true,
};

export const loadCachedUsers = createAsyncThunk(
  "users/loadCachedUsers",
  async () => {
    const cachedUsers = await getCache<User[]>("users_cache");
    return cachedUsers ?? [];
  },
);

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (lastUserId: number, { getState }) => {
    const ids = [lastUserId, lastUserId + 1, lastUserId + 2];

    const promises = ids.map(async (id) => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        {
          headers: {
            Connection: "close",
          },
        },
      );

      if (!response.ok) {
        throw new Error(
          `message: Failed to fetch user ${id}, status: ${response.status}`,
        );
      }

      return response.json() as Promise<User>;
    });

    const fetchedUsers = await Promise.all(promises);

    const state = getState() as { users: UsersState };

    await saveCache("users_cache", state.users.users);

    return fetchedUsers;
  },
);

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
  extraReducers: (builder) => {
    builder
      .addCase(loadCachedUsers.fulfilled, (state, action) => {
        if (action.payload.length > 0 && state.users.length === 0) {
          state.users = action.payload;
          const lastUser = action.payload.at(-1);
          if (lastUser) {
            state.LastUserId = lastUser.id;
          }
        }
      })

      .addCase(getUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        const payload = action.payload;

        // Ensure Id is unique and avoid key errors
        const existingIds = new Set(state.users.map((u) => u.id));
        const newUsers = payload.filter(
          (u) => u && u.id && !existingIds.has(u.id),
        );

        state.users.push(...newUsers);

        saveCache("users_cache", state.users);

        const lastUser = state.users.at(-1);
        if (lastUser) {
          state.LastUserId = lastUser.id;
        }

        if (isEmptyObject(payload.at(-1))) {
          state.hasMore = false;
        }
      })

      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        const statusCode = action.error.message?.split(",")[1]?.split(":")[1];

        if (Number(statusCode) === 404) {
          state.hasMore = false;
        }
        state.error = action.error.message ?? "Failed to fetch users";
      });
  },
});

export const { setUsers, addUsers, setLoading, setError, setHasMore } =
  usersSlice.actions;

export default usersSlice.reducer;
