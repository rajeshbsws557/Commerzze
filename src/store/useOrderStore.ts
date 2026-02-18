import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Order } from '@/types';

interface OrderStore {
    orders: Order[];
    addOrder: (order: Order) => void;
    updateOrderStatus: (id: string, status: Order['status']) => void;
    getRecentOrders: (limit?: number) => Order[];
    getStats: () => { revenue: number; totalOrders: number; };
}

export const useOrderStore = create<OrderStore>()(
    persist(
        (set, get) => ({
            orders: [],

            addOrder: (order) =>
                set((state) => ({ orders: [order, ...state.orders] })),

            updateOrderStatus: (id, status) =>
                set((state) => ({
                    orders: state.orders.map((o) =>
                        o.id === id ? { ...o, status } : o
                    ),
                })),

            getRecentOrders: (limit = 5) => {
                return get().orders
                    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                    .slice(0, limit);
            },

            getStats: () => {
                const orders = get().orders;
                const totalOrders = orders.length;
                const revenue = orders.reduce((acc, order) => acc + order.total, 0);
                return { revenue, totalOrders };
            },
        }),
        {
            name: 'order-storage',
            version: 1,
        }
    )
);
