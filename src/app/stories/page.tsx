'use client';

import Header from '@/components/layout/Header';
import { motion } from 'framer-motion';
import styles from './Stories.module.css';

export default function StoriesPage() {
    return (
        <main>
            <Header />
            <div className={styles.container}>
                <section className={styles.hero}>
                    <motion.img
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 10, ease: 'linear' }}
                        src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop"
                        className={styles.heroImg}
                    />
                    <h1 className={styles.heroTitle}>The Art of <br /> Timelessness</h1>
                </section>

                <article className={styles.content}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={styles.section}
                    >
                        <h2 className={styles.heading}>Our Philosophy</h2>
                        <p className={styles.text}>
                            In an age of instant gratification, we believe in the quiet power of patience.
                            Our collections are not designed for a season, but for a lifetime.
                            We scour the globe for materials that age gracefully—leather that develops a patina,
                            gold that retains its warmth, and fabrics that soften with every wear.
                        </p>
                    </motion.div>

                    <div className={styles.imageGrid}>
                        <img
                            src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=2000&auto=format&fit=crop"
                            className={styles.gridImg}
                        />
                        <img
                            src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?q=80&w=2000&auto=format&fit=crop"
                            className={styles.gridImg}
                        />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={styles.section}
                    >
                        <h2 className={styles.heading}>Sustainable & Ethical</h2>
                        <p className={styles.text}>
                            True luxury is responsible. We partner exclusively with artisans who honor traditional
                            methods and fair labor practices. Every piece tells a story of human hands
                            and dedicated craftsmanship.
                        </p>
                    </motion.div>
                </article>
            </div>
        </main>
    );
}
