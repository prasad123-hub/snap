"use client"

import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

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

import { Icons } from "./icons"

interface SelectLanguageProps {
  languages: {}
  selectedLanguage: string
  setLanguage: React.Dispatch<React.SetStateAction<string>>
}

export function SelectLanguage({
  languages,
  selectedLanguage,
  setLanguage,
}: SelectLanguageProps) {
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
          {selectedLanguage}
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
              checked={selectedLanguage === lang.id}
              onCheckedChange={() => setLanguage(lang.id)}
            >
              {lang.label}
            </DropdownMenuCheckboxItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
