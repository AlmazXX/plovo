import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ApiDish, Dish } from "../../types";
import {
  createDish,
  fetchDishes,
  fetchOneDish,
  updateDish,
} from "./dishesThunk";

interface DishesState {
  items: ApiDish[];
  item: Dish | null;
  creating: boolean;
  fetching: boolean;
}

const initialState: DishesState = {
  items: [],
  item: null,
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
      })
      .addCase(fetchOneDish.pending, (state) => {
        state.fetching = true;
      })
      .addCase(fetchOneDish.fulfilled, (state, { payload: dish }) => {
        state.fetching = false;
        state.item = dish;
      })
      .addCase(fetchOneDish.rejected, (state) => {
        state.fetching = false;
      })
      .addCase(updateDish.pending, (state) => {
        state.creating = true;
      })
      .addCase(updateDish.fulfilled, (state) => {
        state.creating = false;
      })
      .addCase(updateDish.rejected, (state) => {
        state.creating = false;
      });
  },
});

export const dishesReducer = dishesSlice.reducer;
export const selectDishes = (state: RootState) => state.dishes.items;
export const selectDish = (state: RootState) => state.dishes.item;
export const selectDishCreating = (state: RootState) => state.dishes.creating;
export const selectDishesFetching = (state: RootState) => state.dishes.fetching;