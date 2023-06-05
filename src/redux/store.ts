import { configureStore } from "@reduxjs/toolkit";
import faqReducer from "./faqSlice";

export default configureStore({
  reducer: {
    faqs: faqReducer,
  },
});
