'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search as SearchIcon } from 'lucide-react';
import Link from 'next/link';
import { products } from '@/lib/data'; // Ensure this path is correct
import styles from './SearchOverlay.module.css';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: Props) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState(products);

    useEffect(() => {
        if (query.trim() === '') {
            setResults([]);
        } else {
            const filtered = products.filter(p =>
                p.name.toLowerCase().includes(query.toLowerCase()) ||
                p.category.toLowerCase().includes(query.toLowerCase())
            );
            setResults(filtered);
        }
    }, [query]);

    // Prevent scrolling when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={styles.overlay}
                >
                    <button onClick={onClose} className={styles.closeBtn}>
                        <X size={32} />
                    </button>

                    <div className={styles.searchBox}>
                        <input
                            autoFocus
                            type="text"
                            placeholder="Search..."
                            className={styles.input}
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </div>

                    <div className={styles.results}>
                        {results.map((product) => (
                            <Link
                                key={product.id}
                                href={`/product/${product.id}`}
                                onClick={onClose}
                            >
                                <div className={styles.resultItem}>
                                    <div className={styles.imgWrapper}>
                                        <img src={product.image} alt={product.name} className={styles.img} />
                                    </div>
                                    <div className={styles.info}>
                                        <h4 className={styles.name}>{product.name}</h4>
                                        <span className={styles.category}>{product.category}</span>
                                    </div>
                                    <span className={styles.price}>${product.price.toLocaleString()}</span>
                                </div>
                            </Link>
                        ))}
                        {query && results.length === 0 && (
                            <p style={{ textAlign: 'center', color: '#666' }}>No results found.</p>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
