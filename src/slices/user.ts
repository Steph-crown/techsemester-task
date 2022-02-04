import { RootState } from "../store/index";
import { createSlice } from "@reduxjs/toolkit";

interface IState {
    authenticated: boolean;
    token: string;
    user: object;
}

const initialuserState: IState = {
    authenticated: false,
    token: "",
    user: {},
};

// user user object state
export const userSlice = createSlice({
    name: "user",
    initialState: initialuserState,
    reducers: {
        // This updates the user token
        updateUserToken: (state, action) => {
            state.token = action.payload;
        },

        // Updates user profile
        updateUserProfile: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const { updateUserToken, updateUserProfile } = userSlice.actions;

// select user token
export const userToken = (state: RootState) => state.user.token;

// select user user object
export const userObject = (state: RootState) => state.user.user;

export default userSlice.reducer;
