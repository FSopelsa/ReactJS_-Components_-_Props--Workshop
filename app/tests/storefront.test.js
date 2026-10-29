import assert from 'node:assert/strict'
import test from 'node:test'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { createServer } from 'vite'

test('shows the product data and disables the sold-out action', async () => {
  const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' })

  try {
    const { default: App } = await server.ssrLoadModule('/src/App.tsx')
    const markup = renderToStaticMarkup(createElement(App))

    assert.match(markup, /alt="Technical Shell Jacket"/)
    assert.match(markup, /alt="Speedster Running Shoes"/)
    const soldOutCard = markup.split('</article>').find((card) => card.includes('Minimalist Quartz Watch'))
    assert.ok(soldOutCard, 'The sold-out watch should be displayed')
    assert.match(soldOutCard, /<button\b(?=[^>]*\sdisabled(?:=""|\s|>))[^>]*>\s*Notify Me\s*<\/button>/)
    assert.match(soldOutCard, /<button(?=[^>]*aria-label="Quick view Minimalist Quartz Watch")(?=[^>]*\sdisabled(?:=""|\s|>))[^>]*>/)
    assert.match(soldOutCard, /<button(?=[^>]*aria-label="Add Minimalist Quartz Watch to cart")(?=[^>]*\sdisabled(?:=""|\s|>))[^>]*>/)
    const inStockCard = markup.split('</article>').find((card) => card.includes('Technical Shell Jacket'))
    assert.ok(inStockCard, 'The in-stock jacket should be displayed')
    assert.match(inStockCard, /<button(?=[^>]*aria-label="Quick view Technical Shell Jacket")(?![^>]*\sdisabled(?:=""|\s|>))[^>]*>/)
    assert.match(inStockCard, /<button(?=[^>]*aria-label="Add Technical Shell Jacket to cart")(?![^>]*\sdisabled(?:=""|\s|>))[^>]*>/)
  } finally {
    await server.close()
  }
})
