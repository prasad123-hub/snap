interface User {
  id: string
  stripeCustomerId: string
  stripeSubscriptionId: string
}

export type SubscriptionPlan = {
  name: string
  description: string
  stripePriceId: string
}

export type UserSubscriptionPlan = SubscriptionPlan &
  Pick<User, "stripeCustomerId" | "stripeSubscriptionId"> & {
    stripeCurrentPeriodEnd: number
    isPro: boolean
  }

export interface CustomerDetailsProps {
  description: string
  isPro: boolean
  name: string
  stripeCurrentPeriodEnd: number
  stripeCustomerId: string
  stripePriceId: string
  stripeSubscriptionId: string
}
