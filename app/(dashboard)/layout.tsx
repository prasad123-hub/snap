import Link from "next/link"
import { UserButton, currentUser } from "@clerk/nextjs"

import { dashboardConfig } from "@/config/dashboard"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"

export default async function DashboardLayoutProps({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await currentUser()
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container sticky top-0 z-40 border-b border-border bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={dashboardConfig.mainNav} />
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
      </header>
      <main className="mt-2 flex-1">
        <div className="w-full pb-10 md:px-10 lg:flex lg:flex-1 lg:flex-col">
          {children}
        </div>
      </main>
    </div>
  )
}
