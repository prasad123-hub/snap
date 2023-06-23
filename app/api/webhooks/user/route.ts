import { IncomingHttpHeaders } from "http"
// import { headers } from "next/headers"
import { Webhook, WebhookRequiredHeaders } from "svix"

import { db } from "@/lib/db"

const webhookSecret = process.env.CLERK_WEBHOOK_SECRET || ""

async function handler(request: Request) {
  const payload = await request.json()
  const headers: Headers = request.headers
  console.log("Header", headers)
  const heads = {
    "svix-signature": headers.get("svix-signature") as string,
    "svix-id": headers.get("svix-id") as string,
    "svix-timestamp": headers.get("svix-timestamp") as string,
  }

  console.log(heads)
  const wh = new Webhook(webhookSecret)
  let evt: Event | null = null

  try {
    evt = wh.verify(
      JSON.stringify(payload),
      heads as IncomingHttpHeaders & WebhookRequiredHeaders
    ) as Event
  } catch (err) {
    console.error((err as Error).message)
    return new Response("Invalid signature", { status: 401 })
  }

  const eventType: EventType = evt.type
  if (eventType === "user.created") {
    const { id } = evt.data

    const customer = await db.customer.findUnique({
      where: { clerkUserId: id as string },
    })

    if (customer) {
      return new Response("Customer already exists", { status: 200 })
    }

    const newCustomer = await db.customer.create({
      data: {
        clerkUserId: id as string,
      },
    })

    return new Response(JSON.stringify(newCustomer), { status: 200 })
  }
}

type EventType = "user.created" | "user.updated" | "*"

type Event = {
  data: Record<string, string | number>
  object: "event"
  type: EventType
}

export const GET = handler
export const POST = handler
export const PUT = handler
