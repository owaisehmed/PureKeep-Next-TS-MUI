import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface FAQState {
  faqs: FAQItem[];
  loading: boolean;
}

const initialState: FAQState = {
  faqs: [],
  loading: false,
};

const faqSlice = createSlice({
  name: "faqs",
  initialState,
  reducers: {
    fetchData(state, action: PayloadAction<FAQItem[]>) {
      state.faqs = action.payload;
      state.loading = false;
    },
    createData(state, action: PayloadAction<FAQItem>) {
      state.faqs.push(action.payload);
    },
  },
});

export const { fetchData, createData } = faqSlice.actions;
export default faqSlice.reducer;
