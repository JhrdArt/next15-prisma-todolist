import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  CheckCircle,
  Circle,
  CircleOff,
  HelpCircle,
  Timer
} from 'lucide-react'
import { Priorities, StatusTypes } from '@/types/types'

export const labels = [
  {
    value: 'bug',
    label: 'Bug'
  },
  {
    value: 'feature',
    label: 'Feature'
  },
  {
    value: 'documentation',
    label: 'Documentation'
  }
]

export const priorities: Priorities[] = [
  {
    value: 'baja',
    label: 'baja',
    icon: ArrowDown
  },
  {
    value: 'media',
    label: 'media',
    icon: ArrowRight
  },
  {
    value: 'alta',
    label: 'alta',
    icon: ArrowUp
  }
]

export const statuses: StatusTypes[] = [
  {
    label: 'Cancelado',
    value: 'cancelado',
    icon: CircleOff
  },
  {
    label: 'En espera',
    value: 'en espera',
    icon: HelpCircle
  },
  {
    label: 'En progreso',
    value: 'en progreso',
    icon: Timer
  },
  {
    label: 'Para hacer',
    value: 'para hacer',
    icon: Circle
  },
  {
    label: 'Terminado',
    value: 'terminado',
    icon: CheckCircle
  }
]
