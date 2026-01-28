export interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    image: string;
    description: string;
}

export const products: Product[] = [
    // Timepieces
    {
        id: 't1',
        name: 'Chronograph No. 1',
        category: 'timepieces',
        price: 12500,
        image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=2080&auto=format&fit=crop',
        description: 'A masterpiece of engineering and aesthetics.',
    },
    {
        id: 't2',
        name: 'Obsidian Dial',
        category: 'timepieces',
        price: 8900,
        image: 'https://images.unsplash.com/photo-1596568359553-a56de6970068?q=80&w=2000&auto=format&fit=crop',
        description: 'Minimalist design for the modern era.',
    },
    {
        id: 't3',
        name: 'Aviator Gold',
        category: 'timepieces',
        price: 15400,
        image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1000&auto=format&fit=crop',
        description: 'Designed for precision and elegance.',
    },

    // Leather Goods
    {
        id: 'l1',
        name: 'Heritage Weekender',
        category: 'leather-goods',
        price: 2400,
        image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop',
        description: 'Handcrafted from full-grain Italian leather.',
    },
    {
        id: 'l2',
        name: 'Oxford Briefcase',
        category: 'leather-goods',
        price: 1850,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1974&auto=format&fit=crop',
        description: 'The perfect companion for the modern professional.',
    },
    {
        id: 'l3',
        name: 'Classic Cardholder',
        category: 'leather-goods',
        price: 350,
        image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1974&auto=format&fit=crop',
        description: 'Slim, refined, and durable.',
    },

    // Fine Jewelry
    {
        id: 'j1',
        name: 'Gold Horizon Ring',
        category: 'jewelry',
        price: 4500,
        image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2000&auto=format&fit=crop',
        description: '18k gold ring with a timeless silhouette.',
    },
    {
        id: 'j2',
        name: 'Diamond Studs',
        category: 'jewelry',
        price: 3200,
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1974&auto=format&fit=crop',
        description: 'Simple, elegant, and brilliant.',
    },
    {
        id: 'j3',
        name: 'Pearl Drop Necklace',
        category: 'jewelry',
        price: 2800,
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2000&auto=format&fit=crop',
        description: 'A classic piece reimagined.',
    },

    // Tailored Apparel
    {
        id: 'a1',
        name: 'Midnight Wool Coat',
        category: 'apparel',
        price: 1200,
        image: 'https://images.unsplash.com/photo-1544923246-77307dd654cb?q=80&w=2000&auto=format&fit=crop',
        description: 'Premium wool blend for superior warmth and style.',
    },
    {
        id: 'a2',
        name: 'Silk Evening Gown',
        category: 'apparel',
        price: 3400,
        image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1924&auto=format&fit=crop',
        description: 'Flowing silhouette in pure silk.',
    },
    {
        id: 'a3',
        name: 'Cashmere Turtleneck',
        category: 'apparel',
        price: 550,
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop',
        description: 'Soft, luxurious, and essential.',
    },

    // Eyewear
    {
        id: 'e1',
        name: 'Tortoise Shell Shades',
        category: 'eyewear',
        price: 420,
        image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=2080&auto=format&fit=crop',
        description: 'Classic frames with modern lenses.',
    },
    {
        id: 'e2',
        name: 'Aviator Classic',
        category: 'eyewear',
        price: 380,
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=2080&auto=format&fit=crop',
        description: 'Timeless style that never fades.',
    },

    // Fragrances
    {
        id: 'f1',
        name: 'Oud & Bergamot',
        category: 'fragrances',
        price: 280,
        image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=2000&auto=format&fit=crop',
        description: 'A deep, mysterious scent for the evening.',
    },
    {
        id: 'f2',
        name: 'Rose & Santal',
        category: 'fragrances',
        price: 260,
        image: 'https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1974&auto=format&fit=crop',
        description: 'Floral notes with a woody base.',
    },
];

export const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'timepieces', name: 'Timepieces' },
    { id: 'leather-goods', name: 'Leather Goods' },
    { id: 'jewelry', name: 'Fine Jewelry' },
    { id: 'apparel', name: 'Apparel' },
    { id: 'eyewear', name: 'Eyewear' },
    { id: 'fragrances', name: 'Fragrances' },
];
