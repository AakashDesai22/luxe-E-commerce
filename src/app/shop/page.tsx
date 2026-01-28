import Header from '@/components/layout/Header';
import ShopClient from '@/components/shop/ShopClient';

export default function ShopPage() {
    return (
        <main style={{ paddingTop: '80px' }}>
            <Header />
            <ShopClient />
        </main>
    );
}
