import { Menu} from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSidebarItems } from "../../data/sidebarItems";

const Sidebar: React.FC = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
    const SIDEBAR_ITEMS = useSidebarItems();

    return (
        <motion.div
            className={`relative transition-all duration-300 ease-in-out flex-shrink-0 z-20 ${isSidebarOpen ? "w-64" : "w-20"}`}
            animate={{ width: isSidebarOpen ? 256 : 80 }}
        >
            <div className="h-full flex flex-col bg-opacity-50 border-r
            bg-gray-50 border-gray-300
            dark:bg-gray-800 dark:border-gray-700">
                <motion.button
                    className="p-2 rounded-full transition-colors max-w-fit
                        hover:bg-gray-200
                        dark:hover:bg-gray-700"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                    <Menu size={24} />
                </motion.button>
                <nav className="mt-8 flex-grow">
                    {Object.values(SIDEBAR_ITEMS).map((item) => (
                        <Link key={item.href} to={item.href} className="block">
                            <motion.div
                                className="flex items-center p-4 text-sm font-medium rounded-lg transition-colors mb-2
                                hover:bg-gray-200
                                dark:hover:bg-gray-700"
                            >
                                <item.icon size={20} style={{ color: item.color, minWidth: "20px" }} />
                                {isSidebarOpen && (
                                    <motion.span
                                        initial={{ opacity: 0, width: 0 }}
                                        animate={{ opacity: 1, width: "auto" }}
                                        exit={{ opacity: 0, width: 0 }}
                                        transition={{ duration: 0.2, delay: 0.3 }}
                                        className="ml-4 whitespace-nowrap"
                                    >
                                        {item.name}
                                    </motion.span>
                                )}
                            </motion.div>
                        </Link>
                    ))}
                </nav>
            </div>
        </motion.div>
    )
};

export default Sidebar