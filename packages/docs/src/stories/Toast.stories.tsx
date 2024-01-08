import { Box, Toast, ToastProps } from '@gdrbacca-ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Form/Toast',
  component: Toast,
  args: {
    message: 'Agendamento realizado',
    date: 'Quarta-feira, 25 de outubro às 16h',
  },
  decorators: [
    (story) => {
      return (
        <Box css={{ width: '$80', backgroundColor: '$gray900' }}>{story()}</Box>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {},
}
