import React from 'react';
import { Cart, CartItem } from '@/use-cases/contracts/cart';
import { Price } from './price';
import { useCart } from '@/context/cart-context';

export const CartViewer = ({ cart }: { cart: Cart | null }) => {
    const { addToCartAction, isLoading } = useCart();

    if (!cart || cart.items.length === 0) {
        return <p>Your cart is empty.</p>;
    }

    return (
        <ul>
            {cart.items.map((item: CartItem) => (
                <li key={`${item.variant.sku}`} className="flex mb-4 justify-between">
                    <div className="flex w-full">
                        <div className="shrink-0 relative h-24 w-20 aspect-square border border-muted rounded overflow-hidden">
                            <img
                                src={item.images[0].url}
                                alt={item.name}
                                className="h-full w-full object-cover"
                                key={`image-${item.variant.sku}`}
                            />
                        </div>
                        <div className="flex flex-col pl-4 text-dark w-full justify-between">
                            <div className="flex flex-col">
                                <span className="text-lg font-bold">{item.name}</span>
                                <span className="text-sm italic text-dark/70">{item.variant.sku}</span>
                            </div>
                            <div className="flex justify-between w-full">
                                <div className="flex items-center rounded-lg">
                                    <form action={(formData) => addToCartAction(formData, 'reduce')}>
                                        <input
                                            type="hidden"
                                            name="input"
                                            value={JSON.stringify({
                                                sku: item.variant.sku,
                                                variantName: item.variant.name,
                                                price: item.price,
                                                productName: item.variant.product.name,
                                                image: item.images[0],
                                            })}
                                        />
                                        <button
                                            type="submit"
                                            className="w-8 h-8 flex items-center justify-center rounded hover:bg-muted/20 active:bg-muted/40"
                                            disabled={isLoading}
                                        >
                                            -
                                        </button>
                                    </form>

                                    <span className="w-8 text-center">{item.quantity}</span>

                                    <form action={(formData) => addToCartAction(formData, 'add')}>
                                        <input
                                            type="hidden"
                                            name="input"
                                            value={JSON.stringify({
                                                sku: item.variant.sku,
                                                variantName: item.variant.name,
                                                price: item.price,
                                                productName: item.variant.product.name,
                                                image: item.images[0],
                                            })}
                                        />
                                        <button
                                            type="submit"
                                            className="w-8 h-8 flex items-center justify-center  rounded hover:bg-muted/20 active:bg-muted/40"
                                            disabled={isLoading}
                                        >
                                            +
                                        </button>
                                    </form>
                                </div>

                                <span className="font-bold">
                                    <Price price={{ price: item.price.gross }} />
                                </span>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default CartViewer;
