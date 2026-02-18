import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/types';
import { PRODUCTS } from '@/data/products';

interface ProductStore {
    products: Product[];
    setProducts: (products: Product[]) => void;
    addProduct: (product: Product) => void;
    updateProduct: (id: string, updates: Partial<Product>) => void;
    deleteProduct: (id: string) => void;
    getProductsByCategory: (category: string) => Product[];
    getProductById: (id: string) => Product | undefined;
    searchProducts: (query: string) => Product[];
}

export const useProductStore = create<ProductStore>()(
    persist(
        (set, get) => ({
            products: PRODUCTS, // Initialize with default data

            setProducts: (products) => set({ products }),

            addProduct: (product) =>
                set((state) => ({ products: [product, ...state.products] })),

            updateProduct: (id, updates) =>
                set((state) => ({
                    products: state.products.map((p) =>
                        p.id === id ? { ...p, ...updates } : p
                    ),
                })),

            deleteProduct: (id) =>
                set((state) => ({
                    products: state.products.filter((p) => p.id !== id),
                })),

            getProductsByCategory: (category) => {
                return get().products.filter((p) => p.category === category);
            },

            getProductById: (id) => {
                return get().products.find((p) => p.id === id);
            },

            searchProducts: (query) => {
                const lowerQuery = query.toLowerCase();
                return get().products.filter((p) =>
                    p.title.toLowerCase().includes(lowerQuery) ||
                    p.category.toLowerCase().includes(lowerQuery)
                );
            },
        }),
        {
            name: 'product-storage',
            // We only want to persist if we have modified data, but for simplicity
            // and to ensure admin changes stick, we persist everything.
            // However, to avoid overriding new deployment updates with old local data
            // indiscriminately, we might want versioning, but for this task,
            // simple persistence is enough.
        }
    )
);
