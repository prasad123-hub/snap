import { auth } from "@clerk/nextjs"
import { z } from "zod"

import { db } from "@/lib/db"
import { getUserSubscriptionPlan } from "@/lib/subscription"

const customerCreateScheme = z.object({
  clerkUserId: z.string(),
})

export async function GET(req: Request) {
  const { userId, sessionId } = auth()
  try {
    if (!userId || !sessionId) {
      return new Response("Unauthorized", { status: 401 })
    }

    const customerDetails = await getUserSubscriptionPlan(userId as string)

    return new Response(JSON.stringify(customerDetails), { status: 200 })
  } catch (error) {
    if (error instanceof Error) {
      return new Response(error.stack || error.toString(), { status: 500 })
    }
  }
}

export async function POST(req: Request) {
  try {
    const json = await req.json()
    const body = customerCreateScheme.parse(json)

    const customer = await db.customer.upsert({
      where: { clerkUserId: body.clerkUserId },
      create: {
        clerkUserId: body.clerkUserId,
      },
      update: {},
    })

    return new Response(JSON.stringify(customer), { status: 200 })
  } catch (error) {
    if (error instanceof Error) {
      return new Response(error.stack || error.toString(), { status: 500 })
    }
  }
}
