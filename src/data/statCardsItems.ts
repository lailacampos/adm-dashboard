import { RootState } from "../store";
import { DollarSign, Eye, ShoppingBag, ShoppingCart, Users } from "lucide-react";
import { useSelector } from "react-redux";

interface StatCardItem {
    key: string;
    name: string;
    icon: React.ElementType;
    color: string;
};

const BASE_ITEM: Record<string, StatCardItem> = {
    totalSales : { key: "totalSales", name: "Total Sales", icon: DollarSign, color: "#10B981" },
    totalProducts: { key: "totalProducts", name: "Total Products", icon: ShoppingBag, color: "#8B5CF6" },
    totalUsers: { key: "totalUsers", name: "Total Users", icon: Users, color: "#EC4899" },
    totalVisits: { key: "totalVisits", name: "Total Visits", icon: Eye, color: "#3B82F6" },
    totalOrders: { key: "totalOrders", name: "Total Orders", icon: ShoppingCart, color: "#F59E0B" },
};

const BASE_ITEM_PT_BR: Record<string, StatCardItem> = {
    totalSales : { key: "totalSales", name: "Vendas Totais", icon: DollarSign, color: "#10B981" },
    totalProducts: { key: "totalProducts", name: "Produtos Totais", icon: ShoppingBag, color: "#8B5CF6" },
    totalUsers: { key: "totalUsers", name: "Usuários Totais", icon: Users, color: "#EC4899" },
    totalVisits: { key: "totalVisits", name: "Visitas Totais", icon: Eye, color: "#3B82F6" },
    totalOrders: { key: "totalOrders", name: "Pedidos Totais", icon: ShoppingCart, color: "#F59E0B" },
};

export const STAT_CARDS_ITEMS: Record<string, StatCardItem[]> = {
    overview: [
        BASE_ITEM.totalSales,
        BASE_ITEM.totalProducts,
        BASE_ITEM.totalUsers,
        BASE_ITEM.totalVisits,
    ],
    products: [
        BASE_ITEM.totalProducts,
        BASE_ITEM.totalVisits,
        BASE_ITEM.totalSales,
        BASE_ITEM.totalUsers,
    ],
    users: [
        BASE_ITEM.totalUsers,
        BASE_ITEM.totalVisits,
        BASE_ITEM.totalSales,
        BASE_ITEM.totalOrders,        
    ],
    sales: [
        BASE_ITEM.totalSales,
        BASE_ITEM.totalProducts,
        BASE_ITEM.totalUsers,
        BASE_ITEM.totalVisits,
    ],
    orders: [
        BASE_ITEM.totalOrders,
        BASE_ITEM.totalSales,
        BASE_ITEM.totalProducts,
        BASE_ITEM.totalUsers,
    ],
    analytics: [
        BASE_ITEM.totalSales,
        BASE_ITEM.totalProducts,
        BASE_ITEM.totalUsers,
        BASE_ITEM.totalVisits,
    ],
};

export const STAT_CARDS_ITEMS_PT_BR: Record<string, StatCardItem[]> = {
    overview: [
        BASE_ITEM_PT_BR.totalSales,
        BASE_ITEM_PT_BR.totalProducts,
        BASE_ITEM_PT_BR.totalUsers,
        BASE_ITEM_PT_BR.totalVisits,
    ],
    products: [
        BASE_ITEM_PT_BR.totalProducts,
        BASE_ITEM_PT_BR.totalVisits,
        BASE_ITEM_PT_BR.totalSales,
        BASE_ITEM_PT_BR.totalUsers,
    ],
    users: [
        BASE_ITEM_PT_BR.totalUsers,
        BASE_ITEM_PT_BR.totalVisits,
        BASE_ITEM_PT_BR.totalSales,
        BASE_ITEM_PT_BR.totalOrders,        
    ],
    sales: [
        BASE_ITEM_PT_BR.totalSales,
        BASE_ITEM_PT_BR.totalProducts,
        BASE_ITEM_PT_BR.totalUsers,
        BASE_ITEM_PT_BR.totalVisits,
    ],
    orders: [
        BASE_ITEM_PT_BR.totalOrders,
        BASE_ITEM_PT_BR.totalSales,
        BASE_ITEM_PT_BR.totalProducts,
        BASE_ITEM_PT_BR.totalUsers
    ],
    analytics: [
        BASE_ITEM_PT_BR.totalSales,
        BASE_ITEM_PT_BR.totalProducts,
        BASE_ITEM_PT_BR.totalUsers,
        BASE_ITEM_PT_BR.totalVisits,
    ],
};

export const useStatCardsItems = () => {
    const appLanguage = useSelector((state: RootState) => state.language.appLanguage);
    return appLanguage === "pt-BR" ? STAT_CARDS_ITEMS_PT_BR : STAT_CARDS_ITEMS;
}