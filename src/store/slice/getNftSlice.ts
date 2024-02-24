import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetNftData, GetNftImagesParams, GetNftState } from "../../types/Types";
import axiosInstance from "../../instance/AxiosInstance";

const initialState: GetNftState = {
  data: null,
  isLoading: false,
  isError: "",
};

export const getNftImages = createAsyncThunk<GetNftData, GetNftImagesParams>(
  "getNftImages",
  async ({ chain, address, identifier }) => {
    try {
      const getNftUrl = `https://api.opensea.io/api/v2/chain/${chain}/contract/${address}/nfts/${identifier}`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          "x-api-key": process.env.REACT_APP_API_KEY,
        },
      };
      const res = await axiosInstance.get(getNftUrl, options);
      const result: GetNftData = res.data.nft;
      return result;
    } catch (error) {
      console.error("Error: ", error);
      if (error instanceof Error) {
        throw new Error(error?.message || "Error while fetching data");
      } else {
        throw new Error("Unknown error occurred");
      }
    }
  }
);

export const getNftSlice = createSlice({
  name: "getNft",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNftImages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNftImages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.data = action.payload;
      })
      .addCase(getNftImages.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message || "An error occurred";
      });
  },
});

export default getNftSlice.reducer;
