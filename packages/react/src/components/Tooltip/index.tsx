import { TooltipContainer, TooltipContent } from './styles'

export interface TooltipProps {
  date: string
  availability: string
}

export function Tooltip({ date, availability }: TooltipProps) {
  return (
    <TooltipContainer>
      <strong>Hover me</strong>
      <TooltipContent>
        {date} - {availability}
      </TooltipContent>
    </TooltipContainer>
  )
}

Tooltip.displayName = 'Tooltip'
