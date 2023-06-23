import { currentUser } from "@clerk/nextjs"

import { getUserSubscriptionPlan } from "@/lib/subscription"
import { DashboardShell } from "@/components/shell"
import { SnapCodeArea } from "@/components/snap-code-area"

export default async function DashboardPage() {
  const user = await currentUser()
  const subPlan = await getUserSubscriptionPlan(user?.id as string)

  return (
    <>
      <DashboardShell>
        <SnapCodeArea subPlan={subPlan} />
      </DashboardShell>
    </>
  )
}
