import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "../../types/interface/IType";

const initialAuthState: UserType = {
  id: 0,
  username: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    AUTH_LOGIN: (_, action) => {
      const payload = action.payload;
      console.log("redux auth login :", payload);
      localStorage.setItem("token", payload.token);
      const user: UserType = {
        id: payload.user.id,
        username: payload.user.username,
      };
      return user;
    },
    AUTH_CHECK: (_, action) => {
      const payload = action.payload;
      console.log("redux auth check :", payload);
      const user: UserType = {
        id: payload.id,
        username: payload.username,
      };

      return user;
    },
    AUTH_ERROR: () => {
      localStorage.removeItem("token");
    },
    AUTH_LOGOUT: () => {
      localStorage.removeItem("token");
      console.log("keluar");
    },
  },
});