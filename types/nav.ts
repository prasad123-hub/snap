import { Icons } from "@/components/icons"

export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
}

export interface DashboardConfig {
  mainNav: {
    title: string
    href: string
  }[]
}
