'use client';

import { motion } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import { Product } from '@/lib/data';
import styles from './ProductDetail.module.css';

export default function ProductDetailClient({ product }: { product: Product }) {
    const { addToCart } = useCart();

    return (
        <div className={`container ${styles.container}`}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={styles.gallery}
            >
                <div className={styles.mainImageWrapper}>
                    <img src={product.image} alt={product.name} className={styles.mainImage} />
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className={styles.details}
            >
                <span className={styles.category}>{product.category.replace('-', ' ')}</span>
                <h1 className={styles.title}>{product.name}</h1>
                <span className={styles.price}>${product.price.toLocaleString()}</span>

                <p className={styles.description}>
                    {product.description}
                    <br /><br />
                    Expertly crafted using the finest materials, this piece represents the pinnacle of
                    modern luxury design. Designed to last a lifetime, it blends timeless aesthetics
                    with contemporary functionality.
                </p>

                <div className={styles.actions}>
                    <button
                        onClick={() => addToCart(product)}
                        className={styles.addToCartBtn}
                    >
                        Add to Cart
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
