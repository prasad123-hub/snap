import React from "react"

import { cn } from "@/lib/utils"

import { Icons } from "./icons"

export default function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn(className, "border-t border-border")}>
      <div className="container flex flex-col items-center justify-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Icons.logo />
          <p className="text-center text-sm leading-loose md:text-left">
            Built with NextJs 13 and Tailwindcss. ❤️ . Hosted on Vercel.
          </p>
        </div>
      </div>
    </footer>
  )
}
