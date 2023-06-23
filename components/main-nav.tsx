"use client"

import * as React from "react"
import Link from "next/link"
import { useUser } from "@clerk/clerk-react"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

import { toast } from "./ui/use-toast"

interface MainNavProps {
  items?: NavItem[]
}

interface CustomerDetailsProps {
  description: string
  isPro: boolean
  name: string
  stripeCurrentPeriodEnd: number
  stripeCustomerId: string
  stripePriceId: string
  stripeSubscriptionId: string
}

export function MainNav({ items }: MainNavProps) {
  const { isSignedIn, user } = useUser()
  const [customer, setCustomer] = React.useState<CustomerDetailsProps>()

  const getCustomer = async () => {
    const customer = await fetch("/api/user")

    if (!customer?.ok) {
      return toast({
        title: "Something went wrong.",
        description: "Please refresh the page and try again.",
        variant: "destructive",
      })
    }

    const customerData = await customer.json()
    setCustomer(customerData)
  }

  React.useEffect(() => {
    if (isSignedIn) {
      getCustomer()
    }
  }, [isSignedIn])

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
                    "flex items-center text-sm font-medium text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
      {isSignedIn && (
        <span
          className={`-ml-6 inline-flex items-center rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium ${
            customer?.isPro ? "text-red-400" : "text-green-400"
          } ring-1 ring-inset ${
            customer?.isPro ? "ring-red-500/20" : "ring-green-500/20"
          }`}
        >
          {customer?.isPro ? "Pro" : "Free Trial"}
        </span>
      )}
    </div>
  )
}
