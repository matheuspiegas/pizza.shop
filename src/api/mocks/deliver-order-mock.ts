import { http, HttpResponse } from 'msw'

import type { DeliverOrderParams } from '../deliver-order'

export const deliverOrderMock = http.patch<DeliverOrderParams, never, never>(
  '/orders/:orderId/deliver',
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
