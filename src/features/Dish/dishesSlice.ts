import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ApiDish } from "../../types";
import { createDish, fetchDishes } from "./dishesThunk";

interface DishesState {
  items: ApiDish[];
  creating: boolean;
  fetching: boolean;
}

const initialState: DishesState = {
  items: [],
  creating: false,
  fetching: false,
};

export const dishesSlice = createSlice({
  name: "dishes",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchDishes.pending, (state) => {
        state.fetching = true;
      })
      .addCase(fetchDishes.fulfilled, (state, { payload: dishes }) => {
        state.fetching = false;
        state.items = dishes;
      })
      .addCase(fetchDishes.rejected, (state) => {
        state.fetching = false;
      })
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
export const selectDishes = (state: RootState) => state.dishes.items;
export const selectDishCreating = (state: RootState) => state.dishes.creating;
export const selectDishesFetching = (state: RootState) => state.dishes.fetching;