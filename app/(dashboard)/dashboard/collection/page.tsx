import { redirect } from "next/navigation"
import { auth } from "@clerk/nextjs"

import { db } from "@/lib/db"
import { EmptyPlaceholder } from "@/components/empty-placeholder"
import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"
import { SnapItem } from "@/components/snap-item"

export const metadata = {
  title: "Dashboard",
}

export default async function CollectionPage() {
  const { userId } = auth()

  if (!userId) {
    redirect("/sign-in")
  }

  const snaps = await db.snap.findMany({
    where: {
      creatorId: userId,
    },
    select: {
      id: true,
      title: true,
      createdAt: true,
    },
    orderBy: {
      updatedAt: "desc",
    },
  })

  return (
    <DashboardShell className="mx-auto w-full max-w-5xl px-4 py-12 md:px-10">
      <DashboardHeader
        heading="Snaps"
        text="Create and manage codesnaps"
      ></DashboardHeader>
      <div>
        {snaps?.length ? (
          <div className="divide-y divide-border rounded-md border">
            {snaps.map(
              (snap: { id: string; title: string; createdAt: string }) => (
                <SnapItem key={snap.id} snap={snap} />
              )
            )}
          </div>
        ) : (
          <EmptyPlaceholder>
            <EmptyPlaceholder.Icon name="logo" />
            <EmptyPlaceholder.Title>No snaps created</EmptyPlaceholder.Title>
            <EmptyPlaceholder.Description>
              You don&apos;t have any snaps created yet. Start creating
              beautiful code snippets.
            </EmptyPlaceholder.Description>
          </EmptyPlaceholder>
        )}
      </div>
    </DashboardShell>
  )
}
