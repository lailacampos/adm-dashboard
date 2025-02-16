import { motion } from "framer-motion";
import StatCard from "../../components/StatCard";
import { useStatCardsItems } from "../../data/statCardsItems";

const OverviewPage = () => {

    const STAT_CARDS_ITEMS = useStatCardsItems();

    return (
        <>
            <div className="flex-1 overflow-auto relative z-10">
                <main className="max-w-7xl mx-auto py-20 px-4 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
                    >
                        {Object.values(STAT_CARDS_ITEMS["overview"]).map((item, index) => (
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
                </main>
            </div>
        </>
    );
}

export default OverviewPage;