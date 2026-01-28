'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingBag, Search, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import SearchOverlay from './SearchOverlay';
import styles from './Header.module.css';

const navLinks = [
    { name: 'Shop', href: '/shop' },
    { name: 'Categories', href: '/shop' },
    { name: 'Offers', href: '/offers' },
    { name: 'Stories', href: '/stories' },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const { cartCount, toggleCart } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`${styles.header} ${isScrolled ? styles.scrolled : styles.unscrolled}`}
            >
                <div className={`container ${styles.wrapper}`}>
                    <Link href="/" className={styles.logo}>
                        LUXE
                    </Link>

                    <nav className={styles.nav}>
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.href} className={styles.link}>
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className={styles.actions}>
                        <button
                            className={styles.iconBtn}
                            aria-label="Search"
                            onClick={() => setIsSearchOpen(true)}
                        >
                            <Search size={20} />
                        </button>
                        <button className={styles.iconBtn} aria-label="Account">
                            <User size={20} />
                        </button>
                        <button
                            className={styles.iconBtn}
                            aria-label="Cart"
                            onClick={toggleCart}
                            style={{ position: 'relative' }}
                        >
                            <ShoppingBag size={20} />
                            {cartCount > 0 && (
                                <motion.span
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className={styles.badge}
                                    style={{
                                        position: 'absolute',
                                        top: -5,
                                        right: -8,
                                        backgroundColor: 'var(--primary)',
                                        color: '#000',
                                        fontSize: '0.7rem',
                                        fontWeight: 'bold',
                                        width: '18px',
                                        height: '18px',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    {cartCount}
                                </motion.span>
                            )}
                        </button>
                    </div>
                </div>
            </motion.header>

            <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    );
}
