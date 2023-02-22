import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import { Dish } from "../../types";

export const createDish = createAsyncThunk(
  "dishes/create",
  async (dish: Dish) => {
    await axiosApi.post("/dishes.json", dish);
  }
);