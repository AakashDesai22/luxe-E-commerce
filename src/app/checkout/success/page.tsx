'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function SuccessPage() {
    return (
        <main style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '2rem',
            backgroundColor: 'var(--bg-primary)'
        }}>
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', duration: 0.6 }}
            >
                <CheckCircle size={80} color="var(--primary)" style={{ marginBottom: '2rem' }} />
            </motion.div>

            <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '3rem',
                    marginBottom: '1rem'
                }}
            >
                Order Confirmed
            </motion.h1>

            <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                style={{
                    color: 'var(--text-secondary)',
                    maxWidth: '400px',
                    marginBottom: '3rem',
                    lineHeight: 1.6
                }}
            >
                Thank you for your purchase. We have received your order #LX9928 and will notify you once it has shipped.
            </motion.p>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                <Link
                    href="/"
                    style={{
                        padding: '1rem 2rem',
                        backgroundColor: 'transparent',
                        border: '1px solid var(--primary)',
                        color: 'var(--primary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        fontSize: '0.9rem'
                    }}
                >
                    Return Home
                </Link>
            </motion.div>
        </main>
    );
}
