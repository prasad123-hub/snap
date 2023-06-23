export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Snap",
  description:
    "Snap is a tool for creating beautiful images of code snippets. With Snap, you can easily create high-quality images of your code that are perfect for documentation, blog posts, and social media.",
  mainNav: [
    {
      title: "Dashboard",
      href: "/dashboard",
    },
    {
      title: "Pricing",
      href: "/pricing",
    },
    {
      title: "Snap Collection",
      href: "/dashboard/collection",
    },
    {
      title: "Billing",
      href: "/dashboard/billing",
    },
  ],
  links: {
    twitter: "https://twitter.com",
    github: "https://github.com",
    docs: "",
  },
}
