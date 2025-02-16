import { RootState } from "../store";
import { DollarSign, Eye, ShoppingBag, ShoppingCart, Users } from "lucide-react";
import { useSelector } from "react-redux";

interface StatCardItem {
    name: string;
    icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
    color: string;
};

export const STAT_CARDS_ITEMS: Record<string, StatCardItem[]> = {
    overview: [
        { name: "Total Sales", icon: DollarSign, color: "#10B981" },
        { name: "Total Products", icon: ShoppingBag, color: "#8B5CF6" },
        { name: "Total Users", icon: Users, color: "#EC4899" },
        { name: "Total Visits", icon: Eye, color: "#3B82F6" },
    ],
    products: [
        { name: "Total Products", icon: ShoppingBag, color: "#8B5CF6" },
        { name: "Total Views", icon: Eye, color: "#3B82F6" },
        { name: "Total Sales", icon: DollarSign, color: "#10B981" },
        { name: "Total Users", icon: Users, color: "#EC4899" },
    ],
    users: [
        { name: "Total Users", icon: Users, color: "#EC4899" },
        { name: "Total Sales", icon: DollarSign, color: "#10B981" },
        { name: "Total Orders", icon: ShoppingCart, color: "#F59E0B" },
        { name: "Total Visits", icon: Eye, color: "#3B82F6" },
    ],
    sales: [
        { name: "Total Sales", icon: DollarSign, color: "#10B981" },
        { name: "Total Products", icon: ShoppingBag, color: "#8B5CF6" },
        { name: "Total Users", icon: Users, color: "#EC4899" },
        { name: "Total Visits", icon: Eye, color: "#3B82F6" },
    ],
    orders: [
        { name: "Total Orders", icon: ShoppingCart, color: "#F59E0B" },
        { name: "Total Sales", icon: DollarSign, color: "#10B981" },
        { name: "Total Products", icon: ShoppingBag, color: "#8B5CF6" },
        { name: "Total Users", icon: Users, color: "#EC4899" },
    ],
    analytics: [
        { name: "Total Sales", icon: DollarSign, color: "#10B981" },
        { name: "Total Products", icon: ShoppingBag, color: "#8B5CF6" },
        { name: "Total Users", icon: Users, color: "#EC4899" },
        { name: "Total Visits", icon: Eye, color: "#3B82F6" },
    ],
};

export const STAT_CARDS_ITEMS_PT_BR: Record<string, StatCardItem[]> = {
    overview: [
        { name: "Vendas Totais", icon: DollarSign, color: "#10B981" },
        { name: "Produtos Totais", icon: ShoppingBag, color: "#8B5CF6" },
        { name: "Usuários Totais", icon: Users, color: "#EC4899" },
        { name: "Visitas Totais", icon: Eye, color: "#3B82F6" },
    ],
    products: [
        { name: "Produtos Totais", icon: ShoppingBag, color: "#8B5CF6" },
        { name: "Visualizações Totais", icon: Eye, color: "#3B82F6" },
        { name: "Vendas Totais", icon: DollarSign, color: "#10B981" },
        { name: "Usuários Totais", icon: Users, color: "#EC4899" },
    ],
    users: [
        { name: "Usuários Totais", icon: Users, color: "#EC4899" },
        { name: "Vendas Totais", icon: DollarSign, color: "#10B981" },
        { name: "Pedidos Totais", icon: ShoppingCart, color: "#F59E0B" },
        { name: "Visitas Totais", icon: Eye, color: "#3B82F6" },
    ],
    sales: [
        { name: "Vendas Totais", icon: DollarSign, color: "#10B981" },
        { name: "Produtos Totais", icon: ShoppingBag, color: "#8B5CF6" },
        { name: "Usuários Totais", icon: Users, color: "#EC4899" },
        { name: "Visitas Totais", icon: Eye, color: "#3B82F6" },
    ],
    orders: [
        { name: "Pedidos Totais", icon: ShoppingCart, color: "#F59E0B" },
        { name: "Vendas Totais", icon: DollarSign, color: "#10B981" },
        { name: "Produtos Totais", icon: ShoppingBag, color: "#8B5CF6" },
        { name: "Usuários Totais", icon: Users, color: "#EC4899" },
    ],
    analytics: [
        { name: "Vendas Totais", icon: DollarSign, color: "#10B981" },
        { name: "Produtos Totais", icon: ShoppingBag, color: "#8B5CF6" },
        { name: "Usuários Totais", icon: Users, color: "#EC4899" },
        { name: "Visitas Totais", icon: Eye, color: "#3B82F6" },
    ],
};

export const useStatCardsItems = () => {
    const appLanguage = useSelector((state: RootState) => state.language.appLanguage);
    return appLanguage === "pt-br" ? STAT_CARDS_ITEMS_PT_BR : STAT_CARDS_ITEMS;
}