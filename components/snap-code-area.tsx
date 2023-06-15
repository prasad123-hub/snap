"use client"

import { useState } from "react"
import { langs, loadLanguage } from "@uiw/codemirror-extensions-langs"
import * as themes from "@uiw/codemirror-themes-all"
import CodeMirror from "@uiw/react-codemirror"
import clsx from "clsx"

export const getLanguage = (lang: string): keyof typeof langs => {
  return lang as keyof typeof langs
}

const getTheme = (theme: string): keyof typeof themes => {
  return theme as keyof typeof themes
}

const getSeletecTheme = (selectedTheme: string) => {
  return getTheme(selectedTheme)
}

export function SnapCodeArea() {
  console.log("themes", themes)
  console.log("langs", langs)
  const [code, setCode] = useState<string>(`console.log("Hello World")`)
  const [language, setLanguage] = useState<string>("javascript")
  const [selectedTheme, setSelectedTheme] = useState<string>("githubDark")
  console.log(getLanguage(language))
  return (
    <div className="relative mx-auto mt-4 min-h-min w-full max-w-6xl rounded-md bg-purple-600 p-8">
      <CodeMirror
        className={clsx("CodeMirror__Main__Editor")}
        //@ts-ignore
        theme={themes[getSeletecTheme(selectedTheme)]}
        value={code}
        extensions={[
          loadLanguage(getLanguage(language))?.extension || langs.javascript(),
        ]}
        style={{
          fontSize: "14px",

          boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
        }}
        basicSetup={
          {
            // ...DEFAULT_BASE_SETUP,
          }
        }
        indentWithTab
        onChange={(value) => {
          setCode(value)
        }}
      />
    </div>
  )
}
