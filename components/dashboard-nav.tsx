"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

const sidebarNav = [
  {
    title: "Editor",
    href: "/dashboard",
    icon: Icons.logo,
  },
  {
    title: "Snap Collection",
    href: "/dashboard/collection",
    icon: Icons.bookmark,
  },
  {
    title: "Billing",
    href: "/dashboard/billing",
    icon: Icons.wallet,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Icons.settings,
  },
]

export function DashboardNav() {
  const path = usePathname()
  if (!sidebarNav?.length) {
    return null
  }

  return (
    <nav className="grid items-start gap-2">
      {sidebarNav.map((item, index) => {
        const Icon = item.icon
        return (
          item.href && (
            <Link key={index} href={item.href}>
              <span
                className={cn(
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  path === item.href ? "bg-accent" : "transparent"
                )}
              >
                <Icon className="mr-2 h-4 w-4" />
                <span>{item.title}</span>
              </span>
            </Link>
          )
        )
      })}
    </nav>
  )
}
