import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { createDish } from "./dishesThunk";

interface DishesState {
  creating: boolean;
}

const initialState: DishesState = {
  creating: false,
};

export const dishesSlice = createSlice({
  name: "dishes",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createDish.pending, (state) => {
        state.creating = true;
      })
      .addCase(createDish.fulfilled, (state) => {
        state.creating = false;
      })
      .addCase(createDish.rejected, (state) => {
        state.creating = false;
      });
  },
});

export const dishesReducer = dishesSlice.reducer;
export const selectDishCreating = (state: RootState) => state.dishes.creating;