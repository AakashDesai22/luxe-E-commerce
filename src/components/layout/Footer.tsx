'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.top}>
                    <div className={styles.brandCol}>
                        <Link href="/" className={styles.logo}>LUXE</Link>
                        <p className={styles.tagline}>
                            Defining modern luxury through exceptional craftsmanship and timeless design.
                        </p>

                        <div>
                            <h5 className={styles.newsletterTitle}>Subscribe</h5>
                            <div className={styles.inputGroup}>
                                <input type="email" placeholder="Your email address" className={styles.input} />
                                <button className={styles.submit}>Join</button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <h4>Shop</h4>
                        <ul>
                            <li><Link href="/shop/new">New Arrivals</Link></li>
                            <li><Link href="/shop/bestsellers">Bestsellers</Link></li>
                            <li><Link href="/shop/timepieces">Timepieces</Link></li>
                            <li><Link href="/shop/gifts">Gift Guides</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4>Brand</h4>
                        <ul>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/stories">Stories</Link></li>
                            <li><Link href="/sustainability">Sustainability</Link></li>
                            <li><Link href="/careers">Careers</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4>Support</h4>
                        <ul>
                            <li><Link href="/faq">FAQs</Link></li>
                            <li><Link href="/shipping">Shipping & Returns</Link></li>
                            <li><Link href="/contact">Contact Us</Link></li>
                            <li><Link href="/legal">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <span>© 2026 LUXE. All Rights Reserved.</span>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <span>Instagram</span>
                        <span>Twitter</span>
                        <span>LinkedIn</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
