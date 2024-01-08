import { ToastClose, ToastContainer, ToastContent } from './styles'

export interface ToastProps {
  message: string
  date: string
}

export function Toast({ message, date }: ToastProps) {
  return (
    <ToastContainer>
      <ToastContent>
        <strong>{message}</strong>
        <span>{date}</span>
      </ToastContent>
      <ToastClose>X</ToastClose>
    </ToastContainer>
  )
}

Toast.displayName = 'Toast'
