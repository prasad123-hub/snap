import { auth } from "@clerk/nextjs"
import { z } from "zod"

import { db } from "@/lib/db"

const routeContextSchema = z.object({
  params: z.object({
    snapId: z.string(),
  }),
})

export async function DELETE(
  req: Request,
  context: z.infer<typeof routeContextSchema>
) {
  const { userId, sessionId } = auth()

  try {
    if (!userId || !sessionId) {
      return new Response("Unauthorized", { status: 401 })
    }

    const { params } = routeContextSchema.parse(context)

    const snap = await db.snap.delete({
      where: {
        id: params.snapId,
      },
    })

    return new Response(JSON.stringify(snap), { status: 200 })
  } catch (error) {
    if (error instanceof Error) {
      return new Response(error.stack || error.toString(), { status: 500 })
    }
  }
}
