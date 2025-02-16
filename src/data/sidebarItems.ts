import { BarChart2, DollarSign, Menu, Settings, ShoppingBag, ShoppingCart, TrendingUp, Users } from "lucide-react";

interface SidebarItem {
    name: string;
    icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
    color: string;
    href: string;
};

export const SIDEBAR_ITEMS: Record<string, SidebarItem> = {
    overview: { name: "Overview", icon: BarChart2, color: "#6366f1", href: "/" },
    products: { name: "Products", icon: ShoppingBag, color: "#8B5CF6", href: "/products" },
    users: { name: "Users", icon: Users, color: "#EC4899", href: "/users" },
    sales: { name: "Sales", icon: DollarSign, color: "#10B981", href: "/sales" },
    orders: { name: "Orders", icon: ShoppingCart, color: "#F59E0B", href: "/orders" },
    analytics: { name: "Analytics", icon: TrendingUp, color: "#3B82F6", href: "/analytics" },
    settings: { name: "Settings", icon: Settings, color: "#6EE7B7", href: "/settings" },
};

export const SIDEBAR_ITEMS_PT_BR: Record<string, SidebarItem> = {
    overview: { name: "Visão Geral", icon: BarChart2, color: "#6366f1", href: "/" },
    products: { name: "Produtos", icon: ShoppingBag, color: "#8B5CF6", href: "/products" },
    users: { name: "Usuários", icon: Users, color: "#EC4899", href: "/users" },
    sales: { name: "Vendas", icon: DollarSign, color: "#10B981", href: "/sales" },
    orders: { name: "Pedidos", icon: ShoppingCart, color: "#F59E0B", href: "/orders" },
    analytics: { name: "Análises", icon: TrendingUp, color: "#3B82F6", href: "/analytics" },
    settings: { name: "Configurações", icon: Settings, color: "#6EE7B7", href: "/settings" },
};

export const SIDEBAR_ITEMS_ARRAY = Object.values(SIDEBAR_ITEMS);
export const SIDEBAR_ITEMS_PT_BR_ARRAY = Object.values(SIDEBAR_ITEMS_PT_BR);