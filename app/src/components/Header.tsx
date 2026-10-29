import { Menu, Package, Search, ShoppingBag, UserRound } from 'lucide-react'

const links = ['New Arrival', 'Men', 'Women', 'Sale']

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-blue-700/30 bg-blue-600 shadow-lg shadow-blue-900/10">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2 font-bold tracking-tight text-white">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white text-blue-600 shadow-md">
            <Package size={20} strokeWidth={2.5} aria-hidden="true" />
          </span>
          <span className="text-xl font-black uppercase tracking-tighter">LITE.SHOP</span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 text-sm font-bold text-blue-100 md:flex">
          {links.map((link) => (
            <a key={link} href="#" className="relative transition-colors hover:text-white after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:rounded-full after:bg-white after:transition-transform motion-reduce:after:transition-none hover:after:scale-x-100">{link}</a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="mr-4 hidden items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/30 px-3 py-1 lg:flex">
            <span className="relative flex h-2 w-2"><span className="absolute h-full w-full rounded-full bg-blue-200 opacity-75 motion-safe:animate-ping" /><span className="relative h-2 w-2 rounded-full bg-blue-100" /></span>
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-50">Live</span>
          </div>
          <div className="relative hidden sm:block">
            <Search size={16} aria-hidden="true" className="absolute left-3.5 top-3 text-blue-200" />
            <input
              type="search"
              aria-label="Search products"
              placeholder="Search products..."
              className="h-10 w-48 rounded-xl border border-blue-400/20 bg-blue-500/30 pl-10 pr-4 text-xs font-medium text-blue-50 placeholder:text-blue-200/50 focus:bg-blue-500/50 focus:outline-2 focus:outline-white"
            />
          </div>
          <button type="button" aria-label="Cart" className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/30 text-blue-50 hover:bg-blue-500/50">
            <ShoppingBag size={20} aria-hidden="true" />
          </button>
          <button type="button" aria-label="Account" className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/30 text-blue-50 hover:bg-blue-500/50">
            <UserRound size={20} aria-hidden="true" />
          </button>
          <button type="button" aria-label="Menu" className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/30 text-blue-50 hover:bg-blue-500/50 md:hidden">
            <Menu size={24} aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  )
}
