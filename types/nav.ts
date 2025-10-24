import type { ReactNode } from 'react'

export type NavItem = {
  label: string
  href?: string
  isDivider?: boolean
  icon?: ReactNode
  color?: string // hex color like #9772FE or tailwind class; hex will be applied inline
}

export type NavGroup = {
  id: string
  label: string
  href?: string
  items?: NavItem[]
}


