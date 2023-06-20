import Link from "next/link"
import { UserButton } from "@clerk/nextjs"
import type { User } from "@clerk/nextjs/dist/types/server"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"

interface SiteHeaderProps {
  user: User
}

export function SiteHeader({ user }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            {user ? (
              <UserButton />
            ) : (
              <Link
                href="/sign-in"
                className={buttonVariants({
                  size: "sm",
                  variant: "outline",
                })}
              >
                Sign in
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}
