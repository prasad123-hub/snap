import * as React from "react"
import { ConfigContext } from "@/context/configContext"

import { THEMES } from "@/config/constants"
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

export function SelectTheme({
  updateThemeVersion,
}: {
  updateThemeVersion?: string
}) {
  const { state, dispatch } = React.useContext(ConfigContext)
  const { selectedTheme } = state

  React.useEffect(() => {
    if (updateThemeVersion) {
      dispatch({
        type: "UPDATE_THEME",
        payload: updateThemeVersion,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateThemeVersion])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          Select Theme
          <Icons.arrowDown className="ml-4 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="h-96 w-56 overflow-y-scroll">
        <DropdownMenuLabel className="font-bold">
          Selected Theme
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked={true}>
          {selectedTheme}
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Choose Theme ({THEMES.length})</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {THEMES.map((theme) => {
          return (
            <DropdownMenuCheckboxItem
              key={theme.id}
              checked={selectedTheme === theme.label}
              onCheckedChange={() =>
                dispatch({ type: "UPDATE_THEME", payload: theme.id })
              }
            >
              {theme.label}
            </DropdownMenuCheckboxItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
