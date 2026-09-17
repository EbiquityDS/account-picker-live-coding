import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { accounts } from './src/data/accounts.js'

export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'mock-accounts-api',
      configureServer(server) {
        server.middlewares.use('/api/accounts', (req, res, next) => {
          if (req.method !== 'GET') {
            next()
            return
          }

          const url = new URL(req.url, 'http://localhost')
          const shouldFail = url.searchParams.get('fail') === '1'

          setTimeout(() => {
            res.setHeader('Content-Type', 'application/json')
            if (shouldFail) {
              res.statusCode = 500
              res.end(JSON.stringify({ error: 'Failed to load accounts' }))
              return
            }
            res.end(JSON.stringify(accounts))
          }, 400)
        })
      },
    },
  ],
})
