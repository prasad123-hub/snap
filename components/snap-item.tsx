import Link from "next/link"
import { formatDate } from "@/utils"

import { Skeleton } from "@/components/ui/skeleton"
import { SnapOperations } from "@/components/snap-operation"

interface Snap {
  id: string
  title: string
  createdAt?: Date
}

interface SnapItemProps {
  snap: Pick<Snap, "id" | "title" | "createdAt">
}

export function SnapItem({ snap }: SnapItemProps) {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="grid gap-1">
        <Link
          href={`/dashboard/collection/${snap.id}`}
          className="font-semibold hover:underline"
        >
          {snap.title}
        </Link>
        <div>
          <p className="text-sm text-muted-foreground">
            {formatDate(snap.createdAt?.toString() as string)}
          </p>
        </div>
      </div>
      <SnapOperations snap={{ id: snap.id, title: snap.title }} />
    </div>
  )
}

SnapItem.Skeleton = function SnapItemSkeleton() {
  return (
    <div className="p-4">
      <div className="space-y-3">
        <Skeleton className="h-5 w-2/5" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  )
}
