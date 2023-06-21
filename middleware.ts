import { NextResponse } from "next/server"
import { authMiddleware } from "@clerk/nextjs"

export default authMiddleware({
  signInUrl: "/sign-in",
  publicRoutes: [
    "/",
    "/sign-in(.*)",
    "/sso-callback(.*)",
    "/terms(.*)",
    "/pricing(.*)",
    "/privacy(.*)",
    "/api(.*)",
  ],
  async afterAuth(auth, req) {
    if (auth.isPublicRoute) {
      // Don't do anything for public routes
      return NextResponse.next()
    }

    const url = new URL(req.nextUrl.origin)
    const parts = req.nextUrl.pathname.split("/").filter(Boolean)

    if (!auth.userId) {
      // User is not signed in
      url.pathname = "/sign-in"
      return NextResponse.redirect(url)
    }
  },
})

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}
