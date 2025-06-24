import { http, HttpResponse } from 'msw'

import type { UpdateProfileBody } from '../update-profile'
export const updateProfileMock = http.put<never, UpdateProfileBody>(
  '/profile',
  async ({ request }) => {
    const { name } = await request.json()

    if (name === 'Pizza do Matheus') {
      return new HttpResponse(null, {
        status: 201,
      })
    }
    return new HttpResponse(null, {
      status: 400,
    })
  }
)
