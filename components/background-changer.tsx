import { useContext } from "react"
import { ConfigContext } from "@/context/configContext"

import { GRADIENTS } from "@/config/constants"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Icons } from "./icons"

export function BackgroundChanger() {
  const { state, dispatch } = useContext(ConfigContext)
  const { selectedBackground } = state

  const handleBackgroundChange = (code: string) => {
    dispatch({
      type: "UPDATE_BACKGROUND",
      payload: code,
    })
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
