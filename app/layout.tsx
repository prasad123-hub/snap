import "@/styles/globals.css"
import { Metadata } from "next"
import Link from "next/link"
import { ClerkProvider, UserButton, currentUser } from "@clerk/nextjs"
import { dark } from "@clerk/themes"

import { siteConfig } from "@/config/site"
import { db } from "@/lib/db"
import { fontHeading, fontSans } from "@/lib/fonts"
import { getUserSubscriptionPlan } from "@/lib/subscription"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Toaster } from "@/components/ui/toaster"
import Footer from "@/components/footer"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  // description: siteConfig.description,
  // themeColor: [
  //   { media: "(prefers-color-scheme: light)", color: "white" },
  //   { media: "(prefers-color-scheme: dark)", color: "black" },
  // ],
  // icons: {
  //   icon: "/favicon.ico",
  //   shortcut: "/favicon-16x16.png",
  //   apple: "/apple-touch-icon.png",
  // },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const user = await currentUser()

  const subscriptionStatus = await getUserSubscriptionPlan(user?.id as string)

  return (
    <>
      <ClerkProvider
        appearance={{
          baseTheme: dark,
        }}
      >
        <html lang="en" suppressHydrationWarning>
          <head />
          <body
            className={cn(
              "min-h-screen bg-background font-sans antialiased",
              fontSans.variable,
              fontHeading.variable
            )}
          >
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
              <header className="sticky top-0 z-40 w-full border-b border-border bg-background">
                <div className="container hidden h-20 items-center justify-between py-6  md:flex">
                  <MainNav
                    items={siteConfig.mainNav}
                    subscriptionStatus={subscriptionStatus}
                  />
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
                <div className="flex items-center justify-between p-4 md:hidden">
                  <MobileNav
                    items={siteConfig.mainNav}
                    subscriptionStatus={subscriptionStatus}
                  />
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
              <div className="flex-1">{children}</div>

              <Toaster />
              <TailwindIndicator />
              <Footer />
            </ThemeProvider>
          </body>
        </html>
      </ClerkProvider>
    </>
  )
}
