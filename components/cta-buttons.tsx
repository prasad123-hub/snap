"use client"

import { Button } from "@/components/ui/button"

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
    </>
  )
}
