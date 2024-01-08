import { Box, Tooltip, TooltipProps } from '@gdrbacca-ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  args: {
    date: '26 de Outubro',
    availability: 'disponível',
  },
  decorators: [
    (story) => {
      return (
        <Box css={{ width: '$64', backgroundColor: '$gray500' }}>{story()}</Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {},
}

/* export const Full: StoryObj<TooltipProps> = {
  args: {
    currentStep: 2,
  },
}
 */
