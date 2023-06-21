import { DashboardShell } from "@/components/shell"
import { SnapCodeArea } from "@/components/snap-code-area"

export default async function DashboardPage() {
  return (
    <>
      <DashboardShell>
        <SnapCodeArea />
      </DashboardShell>
    </>
  )
}
