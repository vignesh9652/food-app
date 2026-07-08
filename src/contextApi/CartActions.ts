import type { CartItem } from "../interfaces/CartItem";
import type { Product } from "../interfaces/Product";

export const addToCart = (draft: CartItem[], product: Product) => {

    const item = draft.find(pro => pro.id === product.id);

    if (item) {

        item.quantity++;

    } else {

        draft.push({
            ...product,
            quantity: 1
        });

    }

};

export const removeFromCart = (draft: CartItem[], id: number) => {

    const index = draft.findIndex(pro => pro.id === id);

    if (index !== -1) {

        draft.splice(index, 1);

    }
};



export const increaseQuantity = (draft: CartItem[], id: number) => {

    const item = draft.find(pro => pro.id === id);

    if (item) {

        item.quantity++;

    }

};




export const decreaseQuantity = (draft: CartItem[], id: number) => {

    const item = draft.find(pro => pro.id === id);

    if (!item) return;

    if (item.quantity > 1) {

        item.quantity--;

    } else {

        const index = draft.findIndex(pro => pro.id === id);

        draft.splice(index, 1);

    }

};



export const clearCart = (draft: CartItem[]) => {

    draft.length = 0;

};