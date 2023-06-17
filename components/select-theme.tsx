"use client"

import * as React from "react"

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

interface SelectLanguageProps {
  themes: {}
  selectedTheme: string
  setTheme: React.Dispatch<React.SetStateAction<string>>
}

export function SelectTheme({
  themes,
  selectedTheme,
  setTheme,
}: SelectLanguageProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          Select Theme
          <Icons.arrowDown className="ml-4 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="h-96 w-64 overflow-y-scroll">
        <DropdownMenuLabel className="font-bold">
          Selected Theme
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked={true}>
          {selectedTheme}
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>
          Choose Theme ({`${Object.keys(themes).length}`})
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {THEMES.map((theme) => {
          return (
            <DropdownMenuCheckboxItem
              key={theme.id}
              checked={selectedTheme === theme.label}
              onCheckedChange={() => setTheme(theme.id)}
            >
              {theme.label}
            </DropdownMenuCheckboxItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
