import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import { ApiDish, ApiDishesList, Dish } from "../../types";

export const createDish = createAsyncThunk(
  "dishes/create",
  async (dish: Dish) => {
    await axiosApi.post("/dishes.json", dish);
  }
);

export const fetchDishes = createAsyncThunk<ApiDish[]>(
  "/fetchDishes",
  async () => {
    const { data } = await axiosApi.get<ApiDishesList | null>("/dishes.json");
    const dishes = data
      ? Object.keys(data).map((id) => ({ ...data[id], id }))
      : [];
    return dishes;
  }
);