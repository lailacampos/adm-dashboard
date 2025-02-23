import { motion } from "framer-motion"
import { StatCard } from "../";
import { useStatCardsItems } from "../../data/statCardsItems"
import { getAllStatistics } from "../../services/stats/statsService"
import { useState, useEffect } from "react";

interface StatCardItem {
    name: string;
    icon: React.ElementType;
    color: string;
}

interface StatCardContainerProps {
    category: keyof ReturnType<typeof useStatCardsItems>;
}

const StatCardContainer: React.FC<StatCardContainerProps> = ({ category }) => {

    const [ values, setValues ] = useState<{ [key: string ]: number }>({});
    const STAT_CARDS_ITEMS = useStatCardsItems();
    const items: StatCardItem[] = STAT_CARDS_ITEMS[category] || [];

    useEffect(() => {
        const fetchStatistics = async () => {
            const statistics = await getAllStatistics();
            setValues(statistics);
        };

        fetchStatistics();

    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
        >
            {
                items.map((item, index) =>(
                    <StatCard
                        key={index}
                        category={item.key}
                        name={item.name}
                        icon={item.icon}
                        color={item.color}
                        value={values[item.key]}
                    />
                ))
            }
        </motion.div>
    )
}

export default StatCardContainer