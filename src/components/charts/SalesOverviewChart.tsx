import { useState, useEffect } from "react";
import { motion } from "framer-motion"
import { LineChart } from "recharts"
import { Sale } from "../../services/sales/salesTypes"
import { getAllSales } from "../../services/sales/salesService"

const SalesOverviewChart: React.FC = () => {

  const [sales, setSales] = useState<Sale[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSales = async () => {
      try {
        const sales = await getAllSales();
        setSales(sales);
      } catch (error) {
        console.error("Erro ao buscar vendas", error);
      } finally {
        setLoading(false);
      }
    }

    fetchSales();
  }, []);

  return (
    <motion.div
      className="bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border cursor-default
        bg-gray-50 border-gray-300
        dark:bg-gray-800 dark:border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Sales overview - portugues br */}
      <h2 className="text-lg font-medium mb-4 text-gray-800 dark:text-gray-100">
        {loading ? "Carregando..." : "Visão geral de vendas"}
      </h2>
    </motion.div>
  )
}

export default SalesOverviewChart