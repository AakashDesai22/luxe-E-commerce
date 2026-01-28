'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { products, categories, Product } from '@/lib/data';
import styles from './Shop.module.css';
import sidebarStyles from './FilterSidebar.module.css';

export default function Shop() {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredProducts = activeCategory === 'all'
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <div className={`container ${styles.container}`}>
            {/* Sidebar Component functionality inline for state sharing simplicity */}
            <aside className={sidebarStyles.sidebar}>
                <h3 className={sidebarStyles.title}>Categories</h3>
                <ul className={sidebarStyles.list}>
                    {categories.map(cat => (
                        <li key={cat.id} className={sidebarStyles.item}>
                            <button
                                onClick={() => setActiveCategory(cat.id)}
                                className={`${sidebarStyles.button} ${activeCategory === cat.id ? sidebarStyles.active : ''}`}
                            >
                                {cat.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </aside>

            <div className={styles.main}>
                <div className={styles.header}>
                    <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem' }}>
                        {categories.find(c => c.id === activeCategory)?.name}
                    </h1>
                    <span className={styles.count}>{filteredProducts.length} Products</span>
                </div>

                <motion.div layout className={styles.grid}>
                    <AnimatePresence>
                        {filteredProducts.map((product) => (
                            <motion.div
                                layout
                                key={product.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className={styles.card}
                            >
                                <Link href={`/product/${product.id}`}>
                                    <div className={styles.imageWrapper}>
                                        <img src={product.image} alt={product.name} className={styles.image} />
                                    </div>
                                    <div className={styles.info}>
                                        <span className={styles.category}>{product.category.replace('-', ' ')}</span>
                                        <h3 className={styles.name}>{product.name}</h3>
                                        <span className={styles.price}>${product.price.toLocaleString()}</span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
}
