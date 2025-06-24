import { http, HttpResponse } from 'msw'

import type { ApproveOrderParams } from '../approve-order'

export const approveOrderMock = http.patch<ApproveOrderParams, never, never>(
  '/orders/:orderId/approve',
  ({ params }) => {
    if (params.orderId === 'error-order-id') {
      return HttpResponse.json(null, {
        status: 404,
      })
    }
    return HttpResponse.json(null, {
      status: 204,
    })
  }
)
