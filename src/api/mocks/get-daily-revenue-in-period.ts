import { http, HttpResponse } from 'msw'

import type { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodOrdersAmountMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', async () => {
  return HttpResponse.json([
    {
      date: '01/01/2025',
      receipt: 12341,
    },
    {
      date: '02/01/2025',
      receipt: 2331,
    },
    {
      date: '03/01/2025',
      receipt: 553,
    },
    {
      date: '04/01/2025',
      receipt: 6657,
    },
    {
      date: '05/01/2025',
      receipt: 8667,
    },
    {
      date: '06/01/2025',
      receipt: 8667,
    },
    {
      date: '07/01/2025',
      receipt: 3445,
    },
  ])
})
