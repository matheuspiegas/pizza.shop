import { http, HttpResponse } from 'msw'

import type {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrderDetailMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    createdAt: new Date().toISOString(),
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '12 1234-1234',
    },
    status: 'pending',
    totalInCents: 10000,
    orderItems: [
      {
        id: 'item-1',
        priceInCents: 5000,
        quantity: 1,
        product: {
          name: 'Product 1',
        },
      },
      {
        id: 'item-2',
        priceInCents: 5000,
        quantity: 1,
        product: {
          name: 'Product 2',
        },
      },
    ],
  })
})
