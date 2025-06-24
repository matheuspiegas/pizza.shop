import { http, HttpResponse } from 'msw'

import type { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      createdAt: new Date(),
      email: 'johndoe@example.com',
      id: 'custom-user-id',
      name: 'John Doe',
      phone: '12 1234-1234',
      role: 'manager',
      updatedAt: null,
    })
  }
)
