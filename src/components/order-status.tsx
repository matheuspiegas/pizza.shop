export type OrderStatus =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

interface OrderStatusProps {
  status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
}

const orderStatusMap: Record<OrderStatus, string> = {
  canceled: 'Cancelado',
  delivering: 'Em entrega',
  delivered: 'Entregue',
  pending: 'Pendente',
  processing: 'Em preparo',
}

export function OrderStatus(props: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      {props.status === 'pending' && (
        <span className="size-2 rounded-full bg-slate-400" />
      )}
      {props.status === 'canceled' && (
        <span className="size-2 rounded-full bg-rose-500" />
      )}
      {props.status === 'delivered' && (
        <span className="size-2 rounded-full bg-emerald-500" />
      )}
      {['processing', 'delivering'].includes(props.status) && (
        <span className="size-2 rounded-full bg-amber-500" />
      )}
      <span className="text-muted-foreground font-medium">
        {orderStatusMap[props.status]}
      </span>
    </div>
  )
}
