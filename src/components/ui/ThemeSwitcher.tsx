import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/themeSlice";
import { AppDispatch, RootState } from "../../store";
import { Switch } from "@headlessui/react";

const ThemeSwitcher: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();
    const theme = useSelector((state: RootState) => state.theme);

    return (
        <label className="flex space-x-2 cursor-pointer items-center">
            <div className="relative">
                <Switch
                    checked={theme === "dark"}
                    onChange={() => dispatch(toggleTheme())}
                    className={`${theme === "dark" ? "bg-gray-900" : "bg-gray-300"
                        } relative inline-flex items-center h-8 rounded-full w-14 transition-colors focus:outline-none mt-1 mr-2`}
                >
                    <span
                        className={`${theme === "dark" ? "translate-x-7 bg-gray-900" : "translate-x-1"
                            } inline-block w-6 h-6 transform bg-white rounded-full transition-transform absolute`}
                    />
                </Switch>
            </div>
        </label>
    );
};

export default ThemeSwitcher;