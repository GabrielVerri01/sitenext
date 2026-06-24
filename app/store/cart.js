import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCart = create(
  persist(
    (set, get) => ({
      items: [],

      addItem: (produto, quantidade) => {
        const items = get().items;

        const index = items.findIndex((i) => i.id === produto.id);

        if (index !== -1) {
          const updated = [...items];
          updated[index].quantidade += quantidade;
          updated[index].total =
            updated[index].quantidade * updated[index].preco;

          set({ items: updated });
          return;
        }

        set({
          items: [
            ...items,
            {
              id: produto.id,
              nome: produto.nome,
              preco: produto.preco,
              quantidade,
              total: produto.preco * quantidade,
            },
          ],
        });
      },

      removeItem: (id) => {
        set({
          items: get().items.filter((item) => item.id !== id),
        });
      },
    }),
    {
      name: "cart-storage",
    }
  )
);