'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import styles from './SeasonalSpotlight.module.css';

export default function SeasonalSpotlight() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <section ref={ref} className={styles.section}>
            <motion.div className={styles.bgWrapper} style={{ y }}>
                <img
                    src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=2000&auto=format&fit=crop"
                    alt="Winter Collection"
                    className={styles.bgImage}
                />
            </motion.div>

            <div className={styles.content}>
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.label}
                >
                    Exclusive Offer
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className={styles.title}
                >
                    The Winter <br /> Luxe Collection
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className={styles.description}
                >
                    Embrace the chill with our hand-picked selection of premium outerwear and accessories.
                    Limited stock available for the season.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    {/* Using a standard button/link styling here */}
                    <Link href="/collections/winter" className={styles.btn}>
                        View Collection
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
