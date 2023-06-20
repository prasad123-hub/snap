import { currentUser } from "@clerk/nextjs"
import { User } from "@clerk/nextjs/dist/types/server"

import { SiteHeader } from "@/components/site-header"

export default async function DashboardLayoutProps({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await currentUser()
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader user={user as User} />
      <div className="flex-1">{children}</div>
    </div>
  )
}
