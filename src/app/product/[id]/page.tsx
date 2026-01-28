import { notFound } from 'next/navigation';
import { products } from '@/lib/data';
import Header from '@/components/layout/Header';
import ProductDetailClient from '@/components/shop/ProductDetailClient';

interface Props {
    params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: Props) {
    const { id } = await params;
    const product = products.find((p) => p.id === id);

    if (!product) {
        notFound();
    }

    return (
        <main>
            <Header />
            <ProductDetailClient product={product} />
        </main>
    );
}
