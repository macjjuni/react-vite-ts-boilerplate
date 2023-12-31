import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('/api/user', () => {
    return HttpResponse.json({ status: 200, name: 'kkusaeng' })
  }),
]
