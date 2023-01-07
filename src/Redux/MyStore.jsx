import { legacy_createStore as createStore } from "redux";
import { FoodReducer } from "./FoodReducer";

export const MyStore = createStore(FoodReducer);
