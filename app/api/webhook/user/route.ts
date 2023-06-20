import { IncomingHttpHeaders } from "http"
import { headers } from "next/headers"
import { NextResponse } from "next/server"
import { clerkClient } from "@clerk/nextjs/server"
import { Webhook, WebhookRequiredHeaders } from "svix"

import { db } from "@/lib/db"

const webhookSecret = process.env.WEBHOOK_SECRET || ""

export async function POST(req: Request) {
  console.log("Inside Webhook route handler")
  const payload = await req.json()
  const payloadString = JSON.stringify(payload)
  const headerPayload = headers()
  const svixId = headerPayload.get("svix-id")
  const svixIdTimeStamp = headerPayload.get("svix-timestamp")
  const svixSignature = headerPayload.get("svix-signature")
  if (!svixId || !svixIdTimeStamp || !svixSignature) {
    console.log("svixId", svixId)
    console.log("svixIdTimeStamp", svixIdTimeStamp)
    console.log("svixSignature", svixSignature)
    return new Response("Error occured", {
      status: 400,
    })
  }
  const svixHeaders = {
    "svix-id": svixId,
    "svix-timestamp": svixIdTimeStamp,
    "svix-signature": svixSignature,
  }
  const wh = new Webhook(webhookSecret)
  let evt: Event | null = null
  try {
    evt = wh.verify(payloadString, svixHeaders) as Event
  } catch (_) {
    console.log("error")
    return new Response("Error occured", {
      status: 400,
    })
  }
  const { id } = evt.data
  // Handle the webhook
  const eventType: EventType = evt.type
  if (eventType === "user.created" || eventType === "user.updated") {
    const { id } = evt.data

    if (!id) {
      return new Response("Error locating user", {
        status: 400,
      })
    }
  }
  console.log(`User ${id} was ${eventType}`)
  return new Response("", {
    status: 201,
  })
}

type EventType = "user.created" | "user.updated" | "*"

type Event = {
  data: Record<string, string | number>
  object: "event"
  type: EventType
}

// export const GET = handler
// export const POST = handler
// export const PUT = handler
