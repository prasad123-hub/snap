"use client"

import { useState } from "react"
import { EditorView } from "@codemirror/view"
import { langs, loadLanguage } from "@uiw/codemirror-extensions-langs"
import * as themes from "@uiw/codemirror-themes-all"
import CodeMirror from "@uiw/react-codemirror"
import clsx from "clsx"

import { DEFAULT_BASE_SETUP, DEFAULT_CODE } from "@/config/constants"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { SelectLanguage } from "@/components/select-language"

import { BackgroundChanger } from "./background-changer"
import { SelectTheme } from "./select-theme"

export const getLanguage = (lang: string): keyof typeof langs => {
  return lang as keyof typeof langs
}

const getTheme = (theme: string): keyof typeof themes => {
  return theme as keyof typeof themes
}

const getSeletecdTheme = (selectedTheme: string) => {
  return getTheme(selectedTheme)
}

export function SnapCodeArea() {
  const [code, setCode] = useState<string>(DEFAULT_CODE)
  const [language, setLanguage] = useState<string>("javascript")
  const [selectedTheme, setSelectedTheme] = useState<string>("githubDark")
  const [selectedBackground, setSelectedBackground] = useState<string>(
    "linear-gradient(to left bottom, rgb(49, 46, 129), rgb(129, 140, 248), rgb(49, 46, 129))"
  )

  return (
    <div className="mx-auto max-w-6xl rounded-md border border-border p-10">
      <div className="flex items-center justify-between">
        <div className="space-x-3">
          <BackgroundChanger
            setSelectedBackground={setSelectedBackground}
            selectedBackground={selectedBackground}
          />
          <SelectTheme
            setTheme={setSelectedTheme}
            themes={themes}
            selectedTheme={selectedTheme}
          />
          <SelectLanguage
            setLanguage={setLanguage}
            languages={langs}
            selectedLanguage={language}
          />
        </div>
        <div className="flex items-center space-x-3">
          <Button variant={"outline"}>
            <Icons.copy className="h-4 w-4" />
          </Button>
          <Button variant={"outline"}>
            Download
            <Icons.download className="ml-4 h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="relative mt-4 min-h-min w-full rounded-md p-14">
        <div
          className="absolute inset-0 z-0 h-full w-full"
          style={{
            background: `${selectedBackground}`,
          }}
        ></div>
        <div className="relative">
          <div className="absolute -top-6 left-4 rounded-t-md bg-white px-4 pb-2 pt-1.5 text-xs font-semibold text-black">
            Made With Snap 💙
          </div>
          <CodeMirror
            className={clsx("CodeMirror__Main__Editor", "relative shadow-2xl")}
            //@ts-ignore
            theme={themes[getSeletecdTheme(selectedTheme)]}
            value={code}
            extensions={[
              loadLanguage(getLanguage(language))?.extension ||
                langs.javascript(),
              EditorView.lineWrapping,
            ]}
            style={{
              fontSize: 16,
            }}
            basicSetup={{
              ...DEFAULT_BASE_SETUP,
              lineNumbers: false,
            }}
            indentWithTab
            onChange={(value) => {
              setCode(value)
            }}
          >
            <div className="absolute top-0 z-20 min-h-min w-full bg-inherit !px-3.5 !py-3 text-white">
              <input
                id="file-name-input"
                value={"snapcode.js"}
                onChange={(e) => {}}
                className="absolute left-1/2 top-2 w-72 -translate-x-1/2 border-zinc-500 bg-transparent text-center text-xs font-extralight text-zinc-400 outline-none ring-0 focus:border-b-[0.1px]"
                spellCheck={false}
                contentEditable
                autoComplete="off"
              />
              <MacHeader />
            </div>
          </CodeMirror>
        </div>
      </div>
    </div>
  )
}

const MacHeader = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="54"
    height="14"
    viewBox="0 0 54 14"
  >
    <g fill="none" fillRule="evenodd" transform="translate(1 1)">
      <circle
        cx="6"
        cy="6"
        r="6"
        fill="#FF5F56"
        stroke="#E0443E"
        strokeWidth=".5"
      ></circle>
      <circle
        cx="26"
        cy="6"
        r="6"
        fill="#FFBD2E"
        stroke="#DEA123"
        strokeWidth=".5"
      ></circle>
      <circle
        cx="46"
        cy="6"
        r="6"
        fill="#27C93F"
        stroke="#1AAB29"
        strokeWidth=".5"
      ></circle>
    </g>
  </svg>
)
