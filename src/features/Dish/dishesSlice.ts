import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface DishesState {
  creating: boolean;
}

const initialState: DishesState = {
  creating: false
}

export const dishesSlice = createSlice({
  name: "dishes",
  initialState,
  reducers: {}
})

export const dishesReducer = dishesSlice.reducer;
export const selectDishCreating = (state: RootState) =>
  state.dishes.creating;