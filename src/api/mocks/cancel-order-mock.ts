import { http, HttpResponse } from 'msw'

import type { CancelOrderParams } from '../cancel-order'

export const cancelOrderMock = http.patch<CancelOrderParams, never, never>(
  '/orders/:orderId/cancel',
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
