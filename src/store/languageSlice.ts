import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Language = "en" | "pt-BR";

interface LanguageState {
  appLanguage: Language;
}

const initialState: LanguageState = {
  appLanguage: "pt-BR",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.appLanguage = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
