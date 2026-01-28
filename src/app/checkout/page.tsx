'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import styles from './Checkout.module.css';

const steps = ['Shipping', 'Payment', 'Review'];

export default function CheckoutPage() {
    const [currentStep, setCurrentStep] = useState(0);
    const [isProcessing, setIsProcessing] = useState(false);
    const { cart, cartTotal, clearCart } = useCart();
    const router = useRouter();

    const handleNext = async () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(prev => prev + 1);
        } else {
            // Process Payment
            setIsProcessing(true);
            await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API
            clearCart();
            router.push('/checkout/success');
        }
    };

    if (cart.length === 0) {
        return (
            <div className={styles.container}>
                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <h1 className={styles.sectionTitle}>Your Cart is Empty</h1>
                    <Link href="/shop" style={{ textDecoration: 'underline', color: 'var(--primary)' }}>
                        Continue Shopping
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <main className={styles.container}>
            <div className={styles.wrapper}>

                {/* Main Form Area */}
                <div className={styles.main}>
                    <div className={styles.steps}>
                        {steps.map((step, index) => (
                            <span
                                key={step}
                                className={`${styles.step} ${index <= currentStep ? styles.activeStep : ''}`}
                            >
                                {index + 1}. {step}
                            </span>
                        ))}
                    </div>

                    <div className={styles.formSection}>
                        {currentStep === 0 && (
                            <div className={styles.form}>
                                <h2 className={styles.sectionTitle}>Shipping Details</h2>
                                <div className={styles.row}>
                                    <div className={styles.inputGroup} style={{ flex: 1 }}>
                                        <label className={styles.label}>First Name</label>
                                        <input className={styles.input} type="text" placeholder="John" />
                                    </div>
                                    <div className={styles.inputGroup} style={{ flex: 1 }}>
                                        <label className={styles.label}>Last Name</label>
                                        <input className={styles.input} type="text" placeholder="Doe" />
                                    </div>
                                </div>
                                <div className={styles.inputGroup}>
                                    <label className={styles.label}>Address</label>
                                    <input className={styles.input} type="text" placeholder="123 Luxury Lane" />
                                </div>
                                <div className={styles.row}>
                                    <div className={styles.inputGroup} style={{ flex: 1 }}>
                                        <label className={styles.label}>City</label>
                                        <input className={styles.input} type="text" placeholder="New York" />
                                    </div>
                                    <div className={styles.inputGroup} style={{ flex: 1 }}>
                                        <label className={styles.label}>Postal Code</label>
                                        <input className={styles.input} type="text" placeholder="10001" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {currentStep === 1 && (
                            <div className={styles.form}>
                                <h2 className={styles.sectionTitle}>Payment Method</h2>
                                <div className={styles.inputGroup}>
                                    <label className={styles.label}>Card Number</label>
                                    <input className={styles.input} type="text" placeholder="0000 0000 0000 0000" />
                                </div>
                                <div className={styles.row}>
                                    <div className={styles.inputGroup} style={{ flex: 1 }}>
                                        <label className={styles.label}>Expiry</label>
                                        <input className={styles.input} type="text" placeholder="MM/YY" />
                                    </div>
                                    <div className={styles.inputGroup} style={{ flex: 1 }}>
                                        <label className={styles.label}>CVC</label>
                                        <input className={styles.input} type="text" placeholder="123" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {currentStep === 2 && (
                            <div className={styles.form}>
                                <h2 className={styles.sectionTitle}>Review Order</h2>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                                    Please review your details before confirming the purchase.
                                </p>
                                <div style={{ padding: '1rem', border: '1px solid var(--border)' }}>
                                    <p><strong>Shipping to:</strong><br />John Doe<br />123 Luxury Lane, New York 10001</p>
                                    <p style={{ marginTop: '1rem' }}><strong>Payment:</strong><br />Card ending in 0000</p>
                                </div>
                            </div>
                        )}

                        <button
                            onClick={handleNext}
                            className={styles.submitBtn}
                            disabled={isProcessing}
                        >
                            {isProcessing ? 'Processing...' : (currentStep === steps.length - 1 ? 'Place Order' : 'Continue')}
                        </button>
                    </div>
                </div>

                {/* Sidebar Summary */}
                <aside className={styles.sidebar}>
                    <h3 className={styles.sectionTitle} style={{ fontSize: '1.2rem' }}>Order Summary</h3>
                    <div style={{ marginBottom: '2rem' }}>
                        {cart.map(item => (
                            <div key={item.id} className={styles.itemPreview}>
                                <img src={item.image} className={styles.img} alt={item.name} />
                                <div>
                                    <p style={{ fontSize: '0.9rem' }}>{item.name}</p>
                                    <p style={{ fontSize: '0.8rem', color: '#999' }}>Qty: {item.quantity}</p>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--primary)' }}>${item.price.toLocaleString()}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.summaryItem}>
                        <span>Subtotal</span>
                        <span>${cartTotal.toLocaleString()}</span>
                    </div>
                    <div className={styles.summaryItem}>
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>
                    <div className={styles.summaryTotal}>
                        <span>Total</span>
                        <span>${cartTotal.toLocaleString()}</span>
                    </div>
                </aside>

            </div>
        </main>
    );
}
