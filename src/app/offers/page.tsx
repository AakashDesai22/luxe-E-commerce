'use client';

import Header from '@/components/layout/Header';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './Offers.module.css';

const offers = [
    {
        id: 't2',
        name: 'Obsidian Dial',
        oldPrice: 8900,
        newPrice: 6200,
        discount: '30% OFF',
        image: 'https://images.unsplash.com/photo-1596568359553-a56de6970068?q=80&w=2000&auto=format&fit=crop'
    },
    {
        id: 'l2',
        name: 'Oxford Briefcase',
        oldPrice: 1850,
        newPrice: 1295,
        discount: '30% OFF',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1974&auto=format&fit=crop'
    },
    {
        id: 'f1',
        name: 'Oud & Bergamot',
        oldPrice: 280,
        newPrice: 196,
        discount: '30% OFF',
        image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=2000&auto=format&fit=crop'
    }
];

export default function OffersPage() {
    return (
        <main>
            <Header />
            <div className={styles.container}>
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={styles.hero}
                >
                    <span className={styles.label}>Member Exclusives</span>
                    <h1 className={styles.title}>Winter Archivio Sale</h1>

                    <div className={styles.countdown}>
                        <div className={styles.timeUnit}>
                            <span className={styles.timeValue}>02</span>
                            <span className={styles.timeLabel}>Days</span>
                        </div>
                        <div className={styles.timeUnit}>
                            <span className={styles.timeValue}>14</span>
                            <span className={styles.timeLabel}>Hours</span>
                        </div>
                        <div className={styles.timeUnit}>
                            <span className={styles.timeValue}>36</span>
                            <span className={styles.timeLabel}>Mins</span>
                        </div>
                    </div>
                </motion.section>

                <section className={styles.grid}>
                    {offers.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link href={`/product/${item.id}`}>
                                <div className={styles.imageWrapper}>
                                    <img src={item.image} alt={item.name} className={styles.img} />
                                    <span className={styles.discountBadge}>{item.discount}</span>
                                </div>
                                <div className={styles.info}>
                                    <h3 className={styles.name}>{item.name}</h3>
                                    <div className={styles.priceRow}>
                                        <span className={styles.newPrice}>${item.newPrice}</span>
                                        <span className={styles.oldPrice}>${item.oldPrice}</span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </section>
            </div>
        </main>
    );
}
