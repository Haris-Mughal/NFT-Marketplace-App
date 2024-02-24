import { configureStore } from "@reduxjs/toolkit";
import CollectionsReducer from "./slice/collectionsSlice";
import collectionImgReducer from "./slice/getCollectionSlice";
import getNftByCollectionReducer from "./slice/getNftByCollectionSlice";
import getNftReducer from "./slice/getNftSlice";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    collections: CollectionsReducer,
    getCollection: collectionImgReducer,
    getNftByCollection: getNftByCollectionReducer,
    getNft: getNftReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;