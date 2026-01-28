'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { products } from '@/lib/data';
import styles from './FeaturedProducts.module.css';

export default function FeaturedProducts() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={styles.title}
                    >
                        Featured Arrivals
                    </motion.h2>

                    <Link href="/shop" className={styles.viewAll}>
                        View All Products
                    </Link>
                </div>

                <div className={styles.grid}>
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link href={`/product/${product.id}`}>
                                <div className={styles.imageContainer}>
                                    <img src={product.image} alt={product.name} className={styles.image} />
                                    <button className={styles.quickAdd}>
                                        Quick Add to Cart
                                    </button>
                                </div>

                                <div className={styles.info}>
                                    <span className={styles.category}>{product.category.replace('-', ' ')}</span>
                                    <h3 className={styles.name}>{product.name}</h3>
                                    <span className={styles.price}>${product.price.toLocaleString()}</span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
