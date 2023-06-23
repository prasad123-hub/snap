import Link from "next/link"
import { UserButton, currentUser } from "@clerk/nextjs"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"

export default async function LandingLayoutProps({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await currentUser()
  return (
    <div className="flex min-h-screen flex-col">
      {/* <header className="sticky top-0 z-40 w-full border-b border-border bg-background">
        <div className="container flex h-20 items-center justify-between py-6">
          <MainNav items={siteConfig.mainNav} />
          <nav>
            {user ? (
              <UserButton />
            ) : (
              <Link
                href="/sign-in"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "px-4"
                )}
              >
                Login
              </Link>
            )}
          </nav>
        </div>
      </header> */}
      <main className="flex-1">{children}</main>
      {/* <SiteFooter /> */}
    </div>
  )
}
