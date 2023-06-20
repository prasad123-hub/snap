"use client"

import { Button } from "@/components/ui/button"

import { Icons } from "./icons"

const focusOnGenerate = () => {
  let codeArea = document.getElementById("#snap_code_area")
  if (codeArea) {
    codeArea.scrollIntoView({
      behavior: "smooth",
    })
  }
}

export function CtaButtons() {
  return (
    <>
      <Button onClick={() => focusOnGenerate()} variant="outline" size="lg">
        Get Started
      </Button>
      <Button variant="outline" size="lg">
        <Icons.gitHub className="mr-2 h-4 w-4" />
        View Code
      </Button>
    </>
  )
}
