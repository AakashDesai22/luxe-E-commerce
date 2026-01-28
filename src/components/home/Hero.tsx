'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.section}>
            <div className={styles.bgText}>ELEGANCE</div>

            <div className={styles.content}>
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className={styles.subtitle}
                >
                    Winter Collection 2026
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className={styles.title}
                >
                    Redefining Modern <br /> Luxury Living
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className={styles.description}
                >
                    Curated essentials for the discerning individual. Experience the perfect balance of aesthetics and function.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    <Link href="/shop" className={styles.ctaButton}>
                        Explore Collection
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
