import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CollectionsData, CollectionsState } from "../../types/Types";
import axiosInstance from "../../instance/AxiosInstance";

const initialState: CollectionsState = {
  data: [],
  isLoading: true,
  isError: "",
};

export const collectionsImages = createAsyncThunk("fetchImage", async () => {
  try {
    const collectionsUrl = "https://api.opensea.io/api/v2/collections";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-api-key": process.env.REACT_APP_API_KEY,
      },
    };
    const res = await axiosInstance.get(collectionsUrl, options);
    const result: CollectionsData[] = res.data.collections.filter(
      (e: CollectionsData) => e.image_url !== "" && e.is_nsfw === false
    );
    return result;
  } catch (error) {
    console.error("Error: ", error);
    if (error instanceof Error) {
      throw new Error(error?.message || "Error while fetching data");
    } else {
      throw new Error("Unknown error occurred");
    }
  }
});

export const collectionsSlice = createSlice({
  name: "collections",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(collectionsImages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(collectionsImages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.data = action.payload;
      })
      .addCase(collectionsImages.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message || "An error occurred";
      });
  },
});

export default collectionsSlice.reducer;
