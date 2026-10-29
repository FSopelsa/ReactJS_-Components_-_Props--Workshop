import { ChevronDown } from 'lucide-react'
import FilterSidebar from './components/FilterSidebar'
import Header from './components/Header'
import ProductCard, { type Product } from './components/ProductCard'

const products: Product[] = [
  {
    name: 'Technical Shell Jacket',
    category: 'Outerwear',
    image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&q=80&w=800',
    rating: '4.9',
    price: '890 kr',
    originalPrice: '1,450 kr',
    badge: 'Discount',
    availability: 'In Stock • Ships in 2 days',
  },
  {
    name: 'Speedster Running Shoes',
    category: 'Footwear',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800',
    rating: '4.8',
    price: '1,200 kr',
    badge: 'Limited',
    availability: 'Only 4 items left',
  },
  {
    name: 'Minimalist Quartz Watch',
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
    rating: '4.7',
    price: '1,850 kr',
    badge: 'Sold Out',
    availability: 'Back in stock next week',
    soldOut: true,
  },
]

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100/30 font-sans text-slate-950 antialiased">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <FilterSidebar />
          <section className="rounded-[1.25rem] border border-slate-200 bg-slate-50/50 p-5 shadow-sm lg:col-span-9">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h1 className="text-xl font-bold tracking-tight text-slate-900">Recommended for you</h1>
              <label className="inline-flex items-center gap-2 text-sm text-slate-600">
                <span>Sort by:</span>
                <span className="relative">
                  <select className="cursor-pointer appearance-none rounded-xl border border-slate-200 bg-white py-2 pl-3 pr-9 text-sm text-slate-950 focus:border-blue-400 focus:outline-2 focus:outline-blue-600/30">
                    <option>Newest</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Best Selling</option>
                  </select>
                  <ChevronDown size={16} aria-hidden="true" className="pointer-events-none absolute right-3 top-2.5 text-slate-400" />
                </span>
              </label>
            </div>
            <div className="mt-5 h-px bg-slate-100" />
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => <ProductCard key={product.name} product={product} />)}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
