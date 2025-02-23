import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useCurrency } from "../../data/currency";

interface StatCardProps {
    category: string;
    name: string;
    icon: React.ElementType;
    color: string;
    value: number | string;
}

const StatCard: React.FC<StatCardProps> = ({ category, name, icon:Icon, color, value=1234 }) => {
    const language = useSelector((state: RootState) => state.language.appLanguage);
    const currency = useCurrency();
    
    if(category === "totalSales") {
        const formattedValue = new Intl.NumberFormat(language, {
            style: "currency",
            currency: currency,
        }).format(value);
        value = formattedValue;
    }

    return (
        <motion.div
            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
            className="bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border cursor-default
            bg-gray-50 border-gray-300
            dark:bg-gray-800 dark:border-gray-700"
        >
            <div className="px-4 py-5 sm:p-6">
                <span className="flex intem-center text-sm font-medium
                    text-gray-800 dark:text-gray-100">
                    <Icon 
                        className="mr-2"
                        size={20} 
                        style={{ color: color }} />
                    {name}
                </span>
                <p className="mt-1 text-3xl font-semibold text-gray-800 dark:text-gray-100">
                    {value}
                </p>
            </div>

        </motion.div>
    )
}

export default StatCard