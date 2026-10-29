import { Heart, Star } from 'lucide-react'

export type Product = {
  name: string
  category: string
  image: string
  rating: string
  price: string
  originalPrice?: string
  badge: 'Discount' | 'Limited' | 'Sold Out'
  availability: string
  soldOut?: boolean
}

const badgeStyles = {
  Discount: 'border-rose-100/50 bg-rose-500/10 text-rose-600',
  Limited: 'border-amber-100/50 bg-amber-500/10 text-amber-600',
  'Sold Out': 'border-slate-200/50 bg-slate-900/60 text-white',
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group rounded-[1.25rem] border border-slate-200 bg-white p-3 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-400 hover:shadow-xl">
      <div className={'relative overflow-hidden rounded-2xl bg-slate-100 ' + (product.soldOut ? 'grayscale opacity-80' : '')}>
        <img src={product.image} alt={product.name} className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <span className={'absolute left-3 top-3 rounded-full border px-3 py-1 text-[11px] font-bold backdrop-blur-md ' + badgeStyles[product.badge]}>
          {product.badge}
        </span>
        <button type="button" aria-label={'Add ' + product.name + ' to favorites'} className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/50 bg-white/70 text-slate-600 backdrop-blur-md hover:text-rose-500">
          <Heart size={20} aria-hidden="true" />
        </button>
      </div>

      <div className="mt-4 space-y-1 px-1 pb-2">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-black uppercase tracking-[0.15em] text-blue-600/70">{product.category}</p>
          <div className="flex items-center gap-1">
            <Star size={10} fill="currentColor" aria-hidden="true" className="text-amber-400" />
            <span className="text-[10px] font-bold text-slate-400">{product.rating}</span>
          </div>
        </div>
        <h2 className="text-sm font-bold text-slate-900 group-hover:text-blue-600">{product.name}</h2>
        <p className={'text-[11px] font-medium ' + (product.soldOut ? 'text-slate-400 italic' : product.badge === 'Limited' ? 'text-amber-600' : 'text-slate-500')}>
          {product.availability}
        </p>
        <div className="flex items-center justify-between gap-3 pt-3">
          <div className="flex flex-col">
            {product.originalPrice && <span className="text-[10px] font-medium leading-none text-slate-400 line-through">{product.originalPrice}</span>}
            <span className={'text-lg font-black tracking-tight ' + (product.soldOut ? 'text-slate-400' : 'text-slate-900')}>{product.price}</span>
          </div>
          <button
            type="button"
            disabled={product.soldOut}
            className="inline-flex h-10 items-center justify-center rounded-xl bg-slate-900 px-5 text-xs font-bold text-white transition-colors hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400"
          >
            {product.soldOut ? 'Notify Me' : 'Add to cart'}
          </button>
        </div>
      </div>
    </article>
  )
}
