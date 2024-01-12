import { Icon } from '@chakra-ui/react'
import { IconTech } from '../../data/projects'

interface Props {
  icon: IconTech;
}

export const TechnologyIcon = ({ icon }: Props) => {
  return (
    <Icon boxSize={icon.size} color={icon.color} as={icon.icon} />
  )
}
