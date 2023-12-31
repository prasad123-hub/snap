"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { CustomerDetailsProps } from "@/types"
import { useUser } from "@clerk/clerk-react"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

interface MainNavProps {
  items?: NavItem[]
  subscriptionStatus: CustomerDetailsProps
}

export function MainNav({ items, subscriptionStatus }: MainNavProps) {
  const { isSignedIn } = useUser()
  const pathname = usePathname()

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>

      {items?.length ? (
        <nav className="flex gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={isSignedIn ? item.href : "/sign-in"}
                  className={cn(
                    "flex items-center text-sm font-medium text-muted-foreground hover:text-green-600",
                    item.disabled && "cursor-not-allowed opacity-80",
                    pathname === item.href && "text-green-600"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
      {isSignedIn && (
        <>
          <span
            className={`-ml-6 inline-flex items-center rounded-md  px-2 py-1 text-xs font-medium ring-1 ring-inset ${
              subscriptionStatus?.isPro
                ? "bg-red-500/10 text-red-400 ring-red-500/20"
                : "bg-green-500/10 text-green-400 ring-green-500/20"
            }`}
          >
            {subscriptionStatus?.isPro ? "Pro" : "Free Trial"}
          </span>
        </>
      )}
    </div>
  )
}
