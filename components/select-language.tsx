import { use, useContext, useEffect } from "react"
import { ConfigContext } from "@/context/configContext"

import { LANGUAGES } from "@/config/constants"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icons } from "@/components/icons"

export function SelectLanguage({
  updateLangauageVersion,
}: {
  updateLangauageVersion?: string
}) {
  const { state, dispatch } = useContext(ConfigContext)
  const { language } = state

  useEffect(() => {
    if (updateLangauageVersion) {
      dispatch({
        type: "UPDATE_LANGUAGE",
        payload: updateLangauageVersion,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateLangauageVersion])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          Choose Langaugae
          <Icons.arrowDown className="ml-4 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="h-96 w-56 overflow-y-scroll">
        <DropdownMenuLabel className="font-bold">
          Selected Langauge
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked={true}>
          {language}
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>
          Choose Langauge ({LANGUAGES.length})
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {LANGUAGES.map((lang) => {
          return (
            <DropdownMenuCheckboxItem
              key={lang.id}
              checked={language === lang.id}
              onCheckedChange={() =>
                dispatch({ type: "UPDATE_LANGUAGE", payload: lang.id })
              }
            >
              {lang.label}
            </DropdownMenuCheckboxItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
