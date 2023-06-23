import { SubscriptionPlan } from "types"

export const freePlan: SubscriptionPlan = {
  name: "Free",
  description:
    "Background Changing and Removing Watermark is not available in the free plan.",
  stripePriceId: "",
}

export const proPlan: SubscriptionPlan = {
  name: "PRO",
  description:
    "The PRO plan has all the features of the free plan, plus: \n\n- Background Changing \n- Remove Watermark",
  stripePriceId: process.env.STRIPE_PRO_MONTHLY_PLAN_ID as string,
}
