import { http, HttpResponse } from 'msw'

import type { GetOrdersResponse } from '../get-orders'

const bigOrdersMockData: GetOrdersResponse = {
  orders: Array.from({ length: 60 }).map((_, i) => ({
    orderId: `order-${i + 1}`,
    createdAt: new Date().toISOString(),
    status: (
      ['pending', 'processing', 'delivering', 'delivered', 'canceled'] as const
    )[i % 5],
    customerName: `Cliente ${i + 1}`,
    total: 1000 + i * 100,
  })),
  meta: {
    pageIndex: 0,
    perPage: 10,
    totalCount: 60,
  },
}

export const getOrdersMock = http.get<never, never, GetOrdersResponse>(
  '/orders',
  async ({ request }) => {
    const { searchParams } = new URL(request.url)
    const pageIndex = searchParams.get('pageIndex')
      ? Number(searchParams.get('pageIndex'))
      : 0
    const customerName = searchParams.get('customerName')
    const orderId = searchParams.get('orderId')
    const status = searchParams.get('status')

    let filteredOrders = bigOrdersMockData.orders

    if (customerName) {
      filteredOrders = filteredOrders.filter((order) =>
        order.customerName.toLowerCase().includes(customerName.toLowerCase())
      )
    }

    if (orderId) {
      filteredOrders = filteredOrders.filter((order) =>
        order.orderId.toLowerCase().includes(orderId.toLowerCase())
      )
    }

    if (status) {
      filteredOrders = filteredOrders.filter((order) => order.status === status)
    }

    const start = pageIndex * bigOrdersMockData.meta.perPage
    const end = start + bigOrdersMockData.meta.perPage
    const paginatedOrders = filteredOrders.slice(start, end)

    return HttpResponse.json<GetOrdersResponse>(
      {
        orders: paginatedOrders,
        meta: {
          ...bigOrdersMockData.meta,
          pageIndex,
          totalCount: filteredOrders.length,
        },
      },
      {
        status: 200,
      }
    )
  }
)
