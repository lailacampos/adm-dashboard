import { useSelector } from "react-redux";
import { RootState } from "../store";

interface Currency {
    "pt-BR": string;
    "en": string;
}

const CURRENCY: Currency = {
    "pt-BR": "BRL",
    "en": "USD",
}

export const useCurrency = () => {
    const appLanguage = useSelector((state: RootState) => state.language.appLanguage);
    return CURRENCY[appLanguage];
};