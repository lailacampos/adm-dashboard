import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice";
import { AppDispatch, RootState } from "../store";
import React from "react";

const ThemeSwitcher: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();
    const theme = useSelector((state: RootState) => state.theme);

    return (
        <label className="flex space-x-2 cursor-pointer">
            <div className="mr-2 text-gray-500"></div>
            <div className="relative">
                <input
                    type="checkbox"
                    checked={theme === "dark"}
                    onChange={() => dispatch(toggleTheme())}
                    className="sr-only"
                />
                <div className="block w-14 h-8 bg-gray-300 rounded-full mr-2"></div>
                <div className={`absolute left-1 top-1 w-6 h-6 rounded-full transition ${theme === "dark" ? "translate-x-6 bg-gray-900" : "bg-gray-50"}`} />
            </div>
        </label>
    );
};

export default ThemeSwitcher;