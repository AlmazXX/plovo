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
  "dishes/fetch",
  async () => {
    const { data } = await axiosApi.get<ApiDishesList | null>("/dishes.json");
    const dishes = data
      ? Object.keys(data).map((id) => ({ ...data[id], id }))
      : [];
    return dishes;
  }
);

export const fetchOneDish = createAsyncThunk<Dish, string>(
  "dishes/fetchOne",
  async (id) => {
    const { data } = await axiosApi.get<Dish | null>(`/dishes/${id}.json`);
    if (data === null) throw new Error("Not Found!");
    return data;
  }
);

interface updateParams {
  id: string;
  dish: Dish;
}

export const updateDish = createAsyncThunk<void, updateParams>(
  "dishes/update",
  async ({ id, dish }) => {
    await axiosApi.put(`/dishes/${id}.json`, dish);
  }
);