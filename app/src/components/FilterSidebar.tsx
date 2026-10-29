const categories = [
  { name: 'All Products', count: 124 },
  { name: 'Outerwear', count: 42 },
  { name: 'Footwear', count: 18 },
  { name: 'Accessories', count: 64 },
]

export default function FilterSidebar() {
  return (
    <aside className="self-start lg:sticky lg:top-20 lg:col-span-3">
      <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50/50 p-5 shadow-sm">
        <section aria-labelledby="filters-categories" className="space-y-4">
          <h2 id="filters-categories" className="text-sm font-bold text-slate-900">Categories</h2>
          <div className="space-y-3">
            {categories.map((category, index) => (
              <label key={category.name} className="flex cursor-pointer items-center gap-3 text-sm text-slate-700">
                <input type="checkbox" defaultChecked={index === 0} className="h-[1.125rem] w-[1.125rem] accent-blue-600" />
                <span>{category.name} <span className="text-slate-400">({category.count})</span></span>
              </label>
            ))}
          </div>
        </section>

        <div className="my-5 h-px bg-slate-100" />

        <section aria-labelledby="filters-price" className="space-y-3">
          <h2 id="filters-price" className="text-sm font-bold text-slate-900">Price Range</h2>
          <div className="flex justify-between text-xs text-slate-500"><span>0 kr</span><span>1800 kr</span></div>
          <input type="range" min="0" max="1800" defaultValue="900" aria-label="Price range" className="w-full accent-blue-500" />
        </section>

        <div className="my-5 h-px bg-slate-100" />

        <section aria-labelledby="filters-availability" className="space-y-4">
          <h2 id="filters-availability" className="text-sm font-bold text-slate-900">Availability</h2>
          {['In Stock', 'On Sale'].map((label) => (
            <label key={label} className="flex cursor-pointer items-center gap-3 text-sm text-slate-700">
              <input type="checkbox" className="h-[1.125rem] w-[1.125rem] accent-blue-600" />
              {label}
            </label>
          ))}
        </section>

        <section className="mt-6 rounded-[1.25rem] bg-gradient-to-br from-blue-600 to-amber-500 p-6 text-white">
          <h3 className="text-lg font-bold">Summer Sale</h3>
          <p className="mt-2 text-sm leading-relaxed">Get up to 50% off on all summer collections. Limited time offer!</p>
          <button type="button" className="mt-6 w-full rounded-xl bg-white px-5 py-2.5 font-semibold text-blue-600 hover:bg-slate-50">Shop Now</button>
        </section>
      </div>
    </aside>
  )
}
