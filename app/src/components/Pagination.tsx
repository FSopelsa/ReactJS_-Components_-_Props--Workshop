import { ChevronLeft, ChevronRight } from 'lucide-react'

const pageButton = 'inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white font-medium text-slate-500 disabled:cursor-not-allowed disabled:opacity-60'

export default function Pagination() {
  return (
    <nav aria-label="Pagination" className="mt-8 flex items-center justify-center gap-2">
      <button type="button" aria-label="Previous page" disabled className={pageButton}>
        <ChevronLeft size={18} aria-hidden="true" />
      </button>
      <span aria-current="page" className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-blue-600 bg-blue-600 font-medium text-white">1</span>
      {[2, 3].map((page) => (
        <button key={page} type="button" disabled className={pageButton}>{page}</button>
      ))}
      <span className="px-2 text-sm text-slate-400">…</span>
      <button type="button" disabled className={pageButton}>12</button>
      <button type="button" aria-label="Next page" disabled className={pageButton}>
        <ChevronRight size={18} aria-hidden="true" />
      </button>
    </nav>
  )
}
