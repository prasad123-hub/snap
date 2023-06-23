import { formatDate } from "@/utils"

import { db } from "@/lib/db"
import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"
import { SnapCodeArea } from "@/components/snap-code-area"

interface SnapPageProps {
  params: {
    snapId: string
  }
}

interface Snap {
  id: string
  title: string
  code: string
  langauge: string
  theme: string
  background: string
  createdAt: Date
  updatedAt: Date
  creatorId: string
}

export default async function SnapPage({ params }: SnapPageProps) {
  const snap = await db.snap.findUnique({
    where: {
      id: params.snapId,
    },
  })

  console.log(snap)

  return (
    <>
      <DashboardShell>
        <DashboardHeader
          heading={snap?.title || "Snap"}
          text={`Created on ${formatDate(
            snap?.createdAt?.toString() as string
          )}`}
          className="mx-auto w-full max-w-5xl px-4 py-6 lg:px-0"
        />
        <SnapCodeArea updateVesion updateConfig={snap as Snap} />
      </DashboardShell>
    </>
  )
}
