import { motion } from "framer-motion"
import StatCard from "./StatCard"
import { useStatCardsItems } from "../data/statCardsItems"

interface StatCardItem {
    name: string;
    icon: React.ElementType;
    color: string;
}

interface StatCardContainerProps {
    category: keyof ReturnType<typeof useStatCardsItems>;
}

const StatCardContainer: React.FC<StatCardContainerProps> = ({ category }) => {

    const STAT_CARDS_ITEMS = useStatCardsItems();
    const items: StatCardItem[] = STAT_CARDS_ITEMS[category] || [];

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
                        name={item.name}
                        icon={item.icon}
                        color={item.color}
                        value={Math.floor(Math.random() * 1000)}
                    />
                ))
            }
        </motion.div>
    )
}

export default StatCardContainer