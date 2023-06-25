"use client"

import { useState } from "react"
import Link, { LinkProps } from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { CustomerDetailsProps } from "@/types"
import { useUser } from "@clerk/clerk-react"
import { SidebarOpen } from "lucide-react"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Icons } from "@/components/icons"

interface MobileNavProps {
  items?: NavItem[]
  subscriptionStatus: CustomerDetailsProps
}

export function MobileNav({ items, subscriptionStatus }: MobileNavProps) {
  const [open, setOpen] = useState(false)
  const { isSignedIn } = useUser()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <SidebarOpen className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <MobileLink
          href="/"
          className="flex items-center"
          onOpenChange={setOpen}
        >
          <Icons.logo className="mr-2 h-4 w-4" />
          <span className="font-bold">{siteConfig.name}</span>
        </MobileLink>
        <div className="mt-12 flex flex-col space-y-3">
          {items?.map(
            (item) =>
              item.href && (
                <MobileLink
                  key={item.href}
                  href={item.href}
                  onOpenChange={setOpen}
                  className="hover:text-green-600"
                >
                  {item.title}
                </MobileLink>
              )
          )}
        </div>

        {isSignedIn && (
          <>
            <span
              className={`mt-6 inline-flex items-center  rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${
                subscriptionStatus?.isPro
                  ? "bg-red-500/10 text-red-400 ring-red-500/20"
                  : "bg-green-500/10 text-green-400 ring-green-500/20"
              }`}
            >
              {subscriptionStatus?.isPro ? "Pro" : "Free Trial"}
            </span>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter()
  const pathname = usePathname()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn(className, pathname === href && "text-green-600")}
      {...props}
    >
      {children}
    </Link>
  )
}
