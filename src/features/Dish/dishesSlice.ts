import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ApiDish, Dish } from "../../types";
import {
  createDish,
  deleteDish,
  fetchDishes,
  fetchOneDish,
  updateDish,
} from "./dishesThunk";

interface DishesState {
  items: ApiDish[];
  item: Dish | null;
  submitting: boolean;
  fetching: boolean;
  deleting: false | string;
}

const initialState: DishesState = {
  items: [],
  item: null,
  submitting: false,
  fetching: false,
  deleting: false,
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
        state.submitting = true;
      })
      .addCase(createDish.fulfilled, (state) => {
        state.submitting = false;
      })
      .addCase(createDish.rejected, (state) => {
        state.submitting = false;
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
        state.submitting = true;
      })
      .addCase(updateDish.fulfilled, (state) => {
        state.submitting = false;
      })
      .addCase(updateDish.rejected, (state) => {
        state.submitting = false;
      })
      .addCase(deleteDish.pending, (state, { meta: { arg: dishId } }) => {
        state.deleting = dishId;
      })
      .addCase(deleteDish.fulfilled, (state) => {
        state.deleting = false;
      })
      .addCase(deleteDish.rejected, (state) => {
        state.deleting = false;
      });
  },
});

export const dishesReducer = dishesSlice.reducer;
export const selectDishes = (state: RootState) => state.dishes.items;
export const selectDish = (state: RootState) => state.dishes.item;
export const selectDishSubmitting = (state: RootState) => state.dishes.submitting;
export const selectDishesFetching = (state: RootState) => state.dishes.fetching;
export const selectDishDeleting = (state: RootState) => state.dishes.deleting;