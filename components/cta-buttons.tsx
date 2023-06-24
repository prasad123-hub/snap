"use client"

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"

import { Icons } from "./icons"

export function CtaButtons() {
  return (
    <>
      <Link href="/dashboard">
        <Button variant="outline" size="lg">
          Get Started
        </Button>
      </Link>
      <Link href={siteConfig.links.github}>
        <Button variant="outline" size="lg">
          <Icons.gitHub className="mr-2 h-4 w-4" />
          View Code
        </Button>
      </Link>
    </>
  )
}
