import { styled } from '../../styles'

export const TooltipContainer = styled('div', {
  position: 'relative',
  width: '100%',
  fontFamily: '$default',
  display: 'inline-block',
  textAlign: 'center',

  strong: {
    borderBottom: '1px dotted black',
  },

  '&:hover': {
    span: {
      visibility: 'visible',
      opacity: 1,
    },
  },
})

export const TooltipContent = styled('span', {
  visibility: 'hidden',
  width: '14rem',
  backgroundColor: '$gray800',
  color: '$white',
  textAlign: 'center',
  borderRadius: '$md',
  padding: '$2 0',
  position: 'absolute',
  zIndex: 1,
  bottom: '125%',
  left: '50%',
  marginLeft: '-7rem',
  opacity: 0,
  transition: 'opacity 0.3s',

  '&:after': {
    content: '',
    position: 'absolute',
    top: '100%',
    left: '50%',
    marginLeft: '-5px',
    borderWidth: '5px',
    borderStyle: 'solid',
    borderColor: '$gray800 transparent transparent transparent',
  },
})
