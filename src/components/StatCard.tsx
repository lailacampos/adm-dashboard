import { motion } from "framer-motion";
import { DollarSign } from "lucide-react";

interface StatCardProps {
    name: string;
    icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
    color: string;
    value: number | string;
}

const StatCard: React.FC<StatCardProps> = ({ name="Template", icon:Icon = DollarSign, color="#6366f1", value=1234 }) => {
    return (
        <motion.div
            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
            className="bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border
            bg-gray-50 border-gray-300
            dark:bg-gray-800 dark:border-gray-700"
        >
            <div className="px-4 py-5 sm:p-6">
                <span className="flex intem-center text-sm font-medium
                    text-gray-800 dark:text-gray-100">
                    <Icon size={24} style={{ color: color }} />
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