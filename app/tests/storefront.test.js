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
    assert.match(soldOutCard, /<button\b[^>]*\bdisabled(?:="")?[^>]*>\s*Notify Me\s*<\/button>/)
  } finally {
    await server.close()
  }
})
