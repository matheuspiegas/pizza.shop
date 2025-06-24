import { http, HttpResponse } from 'msw'

import type { GetManagedRestaurantResponse } from '../get-managed-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    createdAt: new Date(),
    email: 'johndoe@example.com',
    id: 'custom-user-id',
    name: 'Pizza shop',
    phone: '12 1234-1234',
    role: 'manager',
    updatedAt: null,
    description: 'managed restaurant description',
  })
})
