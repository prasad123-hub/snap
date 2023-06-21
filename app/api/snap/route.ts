import { auth } from "@clerk/nextjs"
import * as z from "zod"

import { db } from "@/lib/db"

const snapCreateScheme = z.object({
  title: z.string(),
  code: z.string(),
  language: z.string(),
  theme: z.string(),
  background: z.string(),
  creatorId: z.string(),
})

export async function POST(req: Request) {
  console.log("POST /api/snap")
  const { userId, sessionId } = auth()
  try {
    if (!userId || !sessionId) {
      return new Response("Unauthorized", { status: 401 })
    }

    const json = await req.json()
    const body = snapCreateScheme.parse(json)
    console.log(body)

    const customer = await db.customer.upsert({
      where: { clerkUserId: body.creatorId },
      create: {
        clerkUserId: body.creatorId,
      },
      update: {},
    })

    const snap = await db.snap.create({
      data: {
        title: body.title,
        code: body.code,
        langauge: body.language,
        theme: body.theme,
        creatorId: body.creatorId,
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
