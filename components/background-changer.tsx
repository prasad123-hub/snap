"use client"

import * as React from "react"
import clsx from "clsx"

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

interface SelectLanguageProps {
  selectedBackground: string
  setSelectedBackground: React.Dispatch<React.SetStateAction<string>>
}

export function BackgroundChanger({
  setSelectedBackground,
  selectedBackground,
}: SelectLanguageProps) {
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
        {/* {GRADIENTS.map((background) => (
          <div
            key={background.id}
            onClick={() => setSelectedBackground(background.code)}
            className="min-h-min w-full px-2"
          >
            <div className={`h-16 w-full rounded-md ${background.code}`}></div>
            <p className="mt-2 text-sm font-semibold text-gray-500">
              {background.name}
            </p>
          </div>
        ))} */}
        {GRADIENTS.map((background, index) => (
          <DropdownMenuCheckboxItem key={background.id} className="px-2">
            <div
              onClick={() => setSelectedBackground(background.code)}
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
