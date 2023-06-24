import { auth } from "@clerk/nextjs"
import { z } from "zod"

import { db } from "@/lib/db"

const routeContextSchema = z.object({
  params: z.object({
    snapId: z.string(),
  }),
})

const updateSnapScheme = z.object({
  title: z.string(),
  code: z.string(),
  language: z.string(),
  theme: z.string(),
  background: z.string(),
})

export async function PATCH(
  req: Request,
  context: z.infer<typeof routeContextSchema>
) {
  const { userId, sessionId } = auth()

  try {
    if (!userId || !sessionId) {
      return new Response("Unauthorized", { status: 401 })
    }

    const { params } = routeContextSchema.parse(context)

    const json = await req.json()

    const body = updateSnapScheme.parse(json)

    const snapToUpdate = await db.snap.findFirst({
      where: {
        id: params.snapId,
      },
    })

    const snap = await db.snap.update({
      where: {
        id: params.snapId,
      },
      data: {
        title: body.title,
        code: body.code,
        langauge: body.language,
        theme: body.theme,
        creatorId: userId,
        background: body.background,
      },
    })

    return new Response(JSON.stringify(snap), { status: 200 })
  } catch (error) {
    if (error instanceof Error) {
      return new Response(error.stack || error.toString(), { status: 500 })
    }
  }
}

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
