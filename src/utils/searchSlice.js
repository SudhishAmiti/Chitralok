import { createSlice } from "@reduxjs/toolkit";

const serachSlice = createSlice({
    name : "search",
    initialState : {
        showSearch : null,
    },
    reducers : {
        showSearchView : (state,action) => {
            state.showSearch = action.payload;
        }
    }
});

export const {showSearchView} = serachSlice.actions;
export default serachSlice.reducer;