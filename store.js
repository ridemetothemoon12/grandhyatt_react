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

let axiosGetter = createSlice({
    name : "axiosData",
    initialState : {data: []},
    reducers : {
        ChangeAxios(state, action) {
            state.data = action.payload
        }
    }
})

export let {ChangeLanguage} = languageChanger.actions;
export let {ChangeAxios} = axiosGetter.actions;

export default configureStore({
    reducer: {
        languageChanger : languageChanger.reducer,
        axiosGetter : axiosGetter.reducer
    }
})