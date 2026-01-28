'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import styles from './CartDrawer.module.css';
import { useRouter } from 'next/navigation';

export default function CartDrawer() {
    const { isCartOpen, toggleCart, cart, removeFromCart, cartTotal } = useCart();
    const router = useRouter();

    const handleCheckout = () => {
        toggleCart(); // Close drawer
        router.push('/checkout');
    };

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={styles.backdrop}
                        onClick={toggleCart}
                    />
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className={styles.drawer}
                    >
                        <div className={styles.header}>
                            <h2 className={styles.title}>Your Cart</h2>
                            <button onClick={toggleCart} className={styles.closeBtn}>
                                <X size={24} />
                            </button>
                        </div>

                        <div className={styles.items}>
                            {cart.length === 0 ? (
                                <div className={styles.empty}>Your cart is empty.</div>
                            ) : (
                                cart.map((item) => (
                                    <div key={item.id} className={styles.item}>
                                        <div className={styles.imgWrapper}>
                                            <img src={item.image} alt={item.name} className={styles.img} />
                                        </div>
                                        <div className={styles.itemInfo}>
                                            <div>
                                                <h4 className={styles.itemName}>{item.name}</h4>
                                                <span className={styles.itemPrice}>${item.price.toLocaleString()}</span>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <span style={{ fontSize: '0.9rem', color: '#999' }}>Qty: {item.quantity}</span>
                                                <button
                                                    className={styles.removeBtn}
                                                    onClick={() => removeFromCart(item.id)}
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        <div className={styles.footer}>
                            <div className={styles.totalRow}>
                                <span>Total</span>
                                <span style={{ fontFamily: 'var(--font-serif)' }}>${cartTotal.toLocaleString()}</span>
                            </div>
                            <button
                                className={styles.checkoutBtn}
                                disabled={cart.length === 0}
                                onClick={handleCheckout}
                            >
                                Checkout
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
