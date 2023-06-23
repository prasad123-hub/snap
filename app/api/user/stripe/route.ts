import { auth } from "@clerk/nextjs"
import { z } from "zod"

import { proPlan } from "@/config/subscriptions"
import { stripe } from "@/lib/stripe"
import { getUserSubscriptionPlan } from "@/lib/subscription"

function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}

const billingUrl = absoluteUrl("/dashboard/billing")

export async function GET(req: Request) {
  console.log("GET /api/user/stripe")
  const { userId, sessionId, session, user } = auth()
  try {
    if (!userId || !sessionId) {
      return new Response("Unauthorized", { status: 401 })
    }

    const subscriptionPlan = await getUserSubscriptionPlan(userId as string)

    console.log("subscriptionPlan", subscriptionPlan)
    // The user is on the pro plan.
    // Create a portal session to manage subscription.
    if (subscriptionPlan.isPro && subscriptionPlan.stripeCustomerId) {
      console.log("creating portal session")
      console.log(
        "subscriptionPlan.stripeCustomerId",
        subscriptionPlan.stripeCustomerId
      )
      console.log("billingUrl", billingUrl)
      const session = await stripe.billingPortal.sessions.create({
        customer: subscriptionPlan.stripeCustomerId,
        return_url: billingUrl,
      })
      console.log("session", session)
      return new Response(JSON.stringify({ url: session.url }))
    }

    // The user is on the free plan.
    // Create a checkout session to upgrade.
    const stripeSession = await stripe.checkout.sessions.create({
      success_url: billingUrl,
      cancel_url: billingUrl,
      payment_method_types: ["card"],
      mode: "subscription",
      billing_address_collection: "auto",
      customer_email: user?.emailAddresses[0].emailAddress,
      line_items: [
        {
          price: proPlan.stripePriceId,
          quantity: 1,
        },
      ],
      metadata: {
        userId: userId,
      },
    })

    return new Response(JSON.stringify({ url: stripeSession.url }))
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    return new Response(null, { status: 500 })
  }
}
