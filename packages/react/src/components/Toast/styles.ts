import { styled } from '../../styles'

export const ToastContainer = styled('div', {
  backgroundColor: '$gray600',
  padding: '12px 20px 12px',
  fontFamily: '$default',
  borderRadius: '$md',
  border: '1px solid $gray400',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  position: 'relative',
})

export const ToastContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  lineHeight: '$base',
  gap: '$1',

  strong: {
    fontWeight: '$bold',
    fontSize: '$xl',
    color: '$white',
  },

  span: {
    fontWeight: '$regular',
    fontSize: '$sm',
    color: '$gray200',
  },
})

export const ToastClose = styled('span', {
  fontFamily: '$default',
  padding: 0,
  fontSize: '$xl',
  color: '$gray200',
  textAlign: 'right',
  cursor: 'pointer',
})
