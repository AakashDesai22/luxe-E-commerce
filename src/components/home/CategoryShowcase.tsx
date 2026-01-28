'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './CategoryShowcase.module.css';

const categories = [
    { id: 1, name: 'Timepieces', slug: 'timepieces', image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1999&auto=format&fit=crop' },
    { id: 2, name: 'Leather Goods', slug: 'leather-goods', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=2000&auto=format&fit=crop' },
    { id: 3, name: 'Fine Jewelry', slug: 'jewelry', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop' },
    { id: 4, name: 'Tailored Apparel', slug: 'apparel', image: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=2000&auto=format&fit=crop' },
    { id: 5, name: 'Eyewear', slug: 'eyewear', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=2080&auto=format&fit=crop' },
    { id: 6, name: 'Fragrances', slug: 'fragrances', image: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?q=80&w=2000&auto=format&fit=crop' },
];

export default function CategoryShowcase() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={styles.subtitle}
                    >
                        Curated Collections
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={styles.title}
                    >
                        Shop by Category
                    </motion.h2>
                </div>

                <div className={styles.grid}>
                    {categories.map((cat, index) => (
                        <motion.div
                            key={cat.id}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link href={`/shop/${cat.slug}`} className={styles.imageWrapper}>
                                {/* 
                  Using standard img tag for now to avoid Next.js Image config with external URLs, 
                  will replace with local assets later 
                */}
                                <img src={cat.image} alt={cat.name} className={styles.img} />
                                <div className={styles.overlay}>
                                    <div className={styles.cardContent}>
                                        <h3 className={styles.cardCategory}>{cat.name}</h3>
                                        <span className={styles.cardLink}>Explore Collection</span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
