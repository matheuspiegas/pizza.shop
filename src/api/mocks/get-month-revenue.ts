import { http, HttpResponse } from 'msw'

import type { GetMonthRevenueResponse } from '../get-month-revenue'

export const getMonthRevenueOrdersAmountMock = http.get<
  never,
  never,
  GetMonthRevenueResponse
>('/metrics/month-receipt', async () => {
  return HttpResponse.json({
    diffFromLastMonth: -20,
    receipt: 10000,
  })
})
