import { createSlice } from "@reduxjs/toolkit";
import userApi from "../services/userApi";
import { LoginResponse } from "@/types";

export interface AuthState {
  token: string;
  isAuthenticated: boolean;
  isLoading: boolean;
  userId?: string;
  userName?: string;
  userRole?: string;
  error: any | null;
}

const initialState: AuthState = {
  token: "",
  isAuthenticated: false,
  isLoading: false,
  userId: "",
  userName: "",
  userRole: "",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuth: (state) => {
      state.error = null;
      state.token = "";
      state.isAuthenticated = false;
      state.isLoading = false;
      state.userId = "";
      state.userName = "";
      state.userRole = "";
    },
  },
  extraReducers(builder) {
    builder.addMatcher(
      userApi.endpoints.login.matchPending,
      (state, { payload }) => {
        state.isLoading = true;
      }
    );
    builder.addMatcher(
      userApi.endpoints.signup.matchPending,
      (state, { payload }) => {
        state.isLoading = true;
      }
    );
    builder.addMatcher(
      userApi.endpoints.login.matchFulfilled,
      (state, { payload }: { payload: LoginResponse }) => {
        state.token = payload.token;
        state.userId = payload.user;
        state.userName = payload.userName;
        state.userRole = payload.userRole;
        state.isAuthenticated = true;
        state.isLoading = false;
        document.cookie = `token=${payload.token}`;
      }
    );
    builder.addMatcher(
      userApi.endpoints.signup.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.userId = payload.userId;
        state.isAuthenticated = true;
        state.isLoading = false;
        document.cookie = `token=${payload.token}`;
      }
    );
    builder.addMatcher(
      userApi.endpoints.login.matchRejected,
      (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
        state.isAuthenticated = false;
      }
    );
    builder.addMatcher(
      userApi.endpoints.signup.matchRejected,
      (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
        state.isAuthenticated = false;
      }
    );
  },
});

export const { resetAuth } = authSlice.actions;

export default authSlice.reducer;

export const selectAuth = (state: { auth: AuthState }) => state.auth;
