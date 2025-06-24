import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'

import { OrderTableFilters } from './order-table-filters'

describe('Order Table filters', () => {
  it('should display the right values in the fields when the filters is present in url', () => {
    const wrapper = render(<OrderTableFilters />, {
      wrapper: ({ children }) => {
        return (
          <MemoryRouter initialEntries={['/orders?orderId=123&status=pending']}>
            {children}
          </MemoryRouter>
        )
      },
    })
    const orderIdInput = wrapper.getByPlaceholderText(
      'ID do pedido'
    ) as HTMLInputElement
    const statusSelect = wrapper.getByRole('combobox')
    expect(orderIdInput.value).toEqual('123')
    expect(statusSelect.outerText).toEqual('Pendente')
  })

  it('should clear the values on fields when clicking clear filters button', async () => {
    const user = userEvent.setup()
    const wrapper = render(<OrderTableFilters />, {
      wrapper: ({ children }) => {
        return (
          <MemoryRouter initialEntries={['/orders?orderId=123&status=pending']}>
            {children}
          </MemoryRouter>
        )
      },
    })
    const orderIdInput = wrapper.getByPlaceholderText(
      'ID do pedido'
    ) as HTMLInputElement
    const statusSelect = wrapper.getByRole('combobox')

    expect(orderIdInput.value).toEqual('123')
    expect(statusSelect.outerText).toEqual('Pendente')

    const clearButton = wrapper.getByRole('button', { name: 'Remover filtros' })
    await user.click(clearButton)

    expect(orderIdInput.value).toEqual('')
    expect(statusSelect.outerText).toEqual('Status')
  })
})
