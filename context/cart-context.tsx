'use client';

import { createContext, useContext, ReactNode, useState, use, useOptimistic } from 'react';
import { useFormState } from 'react-dom';
import { addToCartServerAction } from '@/app/actions/add-to-cart-action-server';
import { Cart, CartItem } from '@/use-cases/contracts/cart';

interface CartContextProps {
    cart: Cart | null;
    isLoading: boolean;
    addToCartAction: (formData: FormData, type?: 'remove' | 'add' | 'reduce') => void;
    isCartOpen: boolean;
    setIsCartOpen: (value: boolean) => void;
    emptyCart: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children, cartPromise }: { children: ReactNode; cartPromise: Promise<Cart> }) => {
    const cart = use(cartPromise);
    const [formState, formAction, isPending] = useFormState(addToCartServerAction, cart);
    const [optimisticCart, setOptimisticCart] = useOptimistic(cart);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const optimisticAddToCartAction = (formData: FormData, type?: 'remove' | 'add' | 'reduce') => {
        const input = JSON.parse(formData.get('input') as string);

        const updatedCart = (() => {
            const prevCart = optimisticCart;
            const existingItemIndex = prevCart.items.findIndex((item) => item.variant.sku === input.sku);

            let updatedItems = [...prevCart.items];

            if (existingItemIndex !== -1) {
                switch (type) {
                    case 'remove':
                        updatedItems = updatedItems.filter((item) => item.variant.sku !== input.sku);
                        break;

                    case 'reduce':
                        const item = updatedItems[existingItemIndex];
                        const newQuantity = Math.max(0, item.quantity - 1);
                        if (newQuantity === 0) {
                            updatedItems = updatedItems.filter((item) => item.variant.sku !== input.sku);
                        } else {
                            updatedItems[existingItemIndex] = { ...item, quantity: newQuantity };
                        }
                        break;

                    case 'add':
                    default:
                        updatedItems[existingItemIndex] = {
                            ...updatedItems[existingItemIndex],
                            quantity: updatedItems[existingItemIndex].quantity + 1,
                        };
                        break;
                }
            } else {
                const optimisticItem: CartItem = {
                    name: input.variantName,
                    images: input.image ? [input.image] : [],
                    price: input.price,
                    quantity: 1,
                    variant: {
                        sku: input.sku,
                        name: input.variantName,
                        price: input.price,
                        product: {
                            name: input.productName,
                        },
                    },
                };
                updatedItems = [...prevCart.items, optimisticItem];
            }

            return {
                ...prevCart,
                items: updatedItems,
            };
        })();

        setOptimisticCart(updatedCart);

        const serverFormData = new FormData();
        serverFormData.set('cart', JSON.stringify(updatedCart));
        formAction(serverFormData);
    };

    const emptyCart = () => {
        const emptyCartData: Cart = {
            items: [],
            total: {
                currency: cart.total.currency,
                gross: 0,
                net: 0,
                taxAmount: 0,
                discounts: [],
            },
        };

        setOptimisticCart(emptyCartData);

        const serverFormData = new FormData();
        serverFormData.set('cart', JSON.stringify(emptyCartData));
        formAction(serverFormData);
    };

    return (
        <CartContext.Provider
            value={{
                cart: optimisticCart,
                addToCartAction: optimisticAddToCartAction,
                isLoading: isPending,
                isCartOpen,
                setIsCartOpen,
                emptyCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        return {
            isLoading: true,
            cart: {
                items: [],
                total: {
                    currency: 'EUR',
                    gross: 0,
                    net: 0,
                    taxAmount: 0,
                    discounts: [],
                },
            },
            addToCartAction: () => {},
            isCartOpen: false,
            setIsCartOpen: () => {},
            emptyCart: () => {},
        };
    }
    return context;
};
