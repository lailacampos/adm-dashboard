import { createSlice } from "@reduxjs/toolkit";

type ThemeState = "light" | "dark";
const initialState: ThemeState = "light";

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            const newTheme = state === "light" ? "dark" : "light";
            if (newTheme === "dark") {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
            return newTheme;
        }
    }
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;