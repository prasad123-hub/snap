import { useContext, useEffect } from "react"
import Link from "next/link"
import { ConfigContext } from "@/context/configContext"

import { GRADIENTS } from "@/config/constants"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Icons } from "./icons"

export function BackgroundChanger({
  updateBackgroundVersion,
}: {
  updateBackgroundVersion?: string
}) {
  const { state, dispatch } = useContext(ConfigContext)
  const { selectedBackground } = state

  const handleBackgroundChange = (code: string) => {
    dispatch({
      type: "UPDATE_BACKGROUND",
      payload: code,
    })
  }

  // If updateBackgroundVersion is passed as prop, then update the version of background when component renders
  useEffect(() => {
    if (updateBackgroundVersion) {
      dispatch({
        type: "UPDATE_BACKGROUND",
        payload: updateBackgroundVersion,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateBackgroundVersion])

  if (!state.isPro) {
    return (
      <>
        <Link
          href="/pricing"
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          Change Background
          <Icons.arrowDown className="ml-4 h-4 w-4" />
        </Link>
      </>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          Change Background
          <Icons.arrowDown className="ml-4 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="h-96 w-64 overflow-y-scroll">
        <DropdownMenuLabel className="font-bold">
          Selected Background
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem className="px-2">
          <div className="h-16 w-full">
            <div
              className="h-full w-full rounded-md"
              style={{
                background: `${selectedBackground}`,
              }}
            ></div>
          </div>
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel className="mt-2">
          Choose Background ({GRADIENTS.length})
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {GRADIENTS.map((background, index) => (
          <DropdownMenuCheckboxItem key={background.id} className="px-2">
            <div
              onClick={() => handleBackgroundChange(background.code)}
              className="min-h-min w-full"
            >
              <div
                className="h-16 w-full rounded-md"
                style={{ background: `${background.code}` }}
              ></div>
              <p className="mt-2 text-sm font-semibold text-gray-500">
                {background.name}
              </p>
            </div>
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
