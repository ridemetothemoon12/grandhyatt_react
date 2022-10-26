import { configureStore, createSlice } from "@reduxjs/toolkit";

let languageChanger = createSlice({
    name : "languageData",
    initialState : {data: false},
    reducers : {
        ChangeLanguage(state, action) {
            state.data = action.payload
        }
    }
})

// export let {ChangeLanguage} = languageChanger.actions

export default configureStore({
    reducer: {
        languageChanger : languageChanger.reducer,
    }
})