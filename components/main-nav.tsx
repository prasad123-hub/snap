"use client"

import * as React from "react"
import Link from "next/link"
import { ConfigContext } from "@/context/configContext"
import { useUser } from "@clerk/clerk-react"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

import { toast } from "./ui/use-toast"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const { isSignedIn } = useUser()
  const [loading, setLoading] = React.useState(false)
  const { state, dispatch } = React.useContext(ConfigContext)

  const isPro = state?.isPro

  const getCustomerDetails = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/user")

      const data = await response.json()

      dispatch({
        type: "UPDATE_IS_PRO",
        payload: data.isPro,
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error loading the customer details.",
      })
    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    if (isSignedIn) {
      getCustomerDetails()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <>
          <span
            className={`-ml-6 inline-flex items-center rounded-md  px-2 py-1 text-xs font-medium ring-1 ring-inset ${
              isPro
                ? "bg-red-500/10 text-red-400 ring-red-500/20"
                : "bg-green-500/10 text-green-400 ring-green-500/20"
            }`}
          >
            {isPro ? "Pro" : "Free Trial"}
          </span>
        </>
      )}
    </div>
  )
}
