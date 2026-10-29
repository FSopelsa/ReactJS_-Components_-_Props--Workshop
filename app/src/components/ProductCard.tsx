import { Eye, Heart, Plus, Star } from 'lucide-react'

export type Product = {
  name: string
  category: string
  image: string
  rating: string
  price: string
  originalPrice?: string
  badge: 'Discount' | 'Limited' | 'Sold Out' | 'Popular' | 'Hot Deal' | 'New Arrival'
  availability: string
  soldOut?: boolean
}

const badgeStyles = {
  Discount: 'border-rose-100/50 bg-rose-500/10 text-rose-600',
  Limited: 'border-amber-100/50 bg-amber-500/10 text-amber-600',
  'Sold Out': 'border-slate-200/50 bg-slate-900/60 text-white',
  Popular: 'border-blue-100/50 bg-blue-500/10 text-blue-600',
  'Hot Deal': 'border-rose-100/50 bg-rose-500/10 text-rose-600',
  'New Arrival': 'border-amber-100/50 bg-amber-500/10 text-amber-600',
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group rounded-[1.25rem] border border-slate-200 bg-white p-3 transition-all duration-300 motion-safe:hover:-translate-y-1.5 hover:border-blue-400 hover:shadow-xl">
      <div className={'relative overflow-hidden rounded-2xl bg-slate-100 ' + (product.soldOut ? 'grayscale opacity-80' : '')}>
        <img src={product.image} alt={product.name} className="aspect-[4/5] w-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-110" />
        <div className={'pointer-events-none absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition-opacity duration-300 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:opacity-100 [@media(hover:none)]:pointer-events-auto [@media(hover:none)]:opacity-100 ' + (product.soldOut ? 'bg-slate-900/20' : 'bg-blue-600/10')}>
          <button type="button" aria-label={'Quick view ' + product.name} disabled={product.soldOut} className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-900 shadow-xl transition-colors hover:bg-blue-600 hover:text-white disabled:cursor-not-allowed disabled:bg-white/80 disabled:text-slate-400">
            <Eye size={20} aria-hidden="true" />
          </button>
          <button type="button" aria-label={'Add ' + product.name + ' to cart'} disabled={product.soldOut} className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-900 shadow-xl transition-colors hover:bg-blue-600 hover:text-white disabled:cursor-not-allowed disabled:bg-white/80 disabled:text-slate-400">
            <Plus size={20} aria-hidden="true" />
          </button>
        </div>
        <span className={'absolute left-3 top-3 rounded-full border px-3 py-1 text-[11px] font-bold backdrop-blur-md ' + badgeStyles[product.badge]}>
          {product.badge}
        </span>
        <button type="button" aria-label={'Add ' + product.name + ' to favorites'} className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/50 bg-white/70 text-slate-600 backdrop-blur-md hover:text-rose-500">
          <Heart size={20} aria-hidden="true" />
        </button>
      </div>

      <div className="mt-4 space-y-1 px-1 pb-2">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-black uppercase tracking-[0.15em] text-blue-700">{product.category}</p>
          <div className="flex items-center gap-1">
            <Star size={10} fill="currentColor" aria-hidden="true" className="text-amber-400" />
            <span className="text-[10px] font-bold text-slate-600">{product.rating}</span>
          </div>
        </div>
        <h2 className="text-sm font-bold text-slate-900 group-hover:text-blue-600">{product.name}</h2>
        <p className={'text-[11px] font-medium ' + (product.soldOut ? 'text-slate-600 italic' : product.badge === 'Limited' ? 'text-amber-700' : 'text-slate-600')}>
          {product.availability}
        </p>
        <div className="flex items-center justify-between gap-3 pt-3">
          <div className="flex flex-col">
            {product.originalPrice && <span className="text-[10px] font-medium leading-none text-slate-600 line-through">{product.originalPrice}</span>}
            <span className={'text-lg font-black tracking-tight ' + (product.soldOut ? 'text-slate-600' : 'text-slate-900')}>{product.price}</span>
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
