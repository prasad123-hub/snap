"use client"

import { useCallback, useRef, useState } from "react"
import { EditorView } from "@codemirror/view"
import { langs, loadLanguage } from "@uiw/codemirror-extensions-langs"
import * as themes from "@uiw/codemirror-themes-all"
import CodeMirror from "@uiw/react-codemirror"
import clsx from "clsx"
import { toPng } from "html-to-image"

import { DEFAULT_BASE_SETUP, DEFAULT_CODE } from "@/config/constants"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { SelectLanguage } from "@/components/select-language"

import { BackgroundChanger } from "./background-changer"
import { EditorTop } from "./editor-top"
import { SelectTheme } from "./select-theme"

/**
 * @param lang
 * @returns lang as keyof typeof langs i.e from langauges imported from @uiw/codemirror-extensions-langs
 */

export const getLanguage = (lang: string): keyof typeof langs => {
  return lang as keyof typeof langs
}

/**
 * @param theme
 * @returns theme as keyof typeof themes i.e from themes imported from @uiw/codemirror-themes-all
 */

const getTheme = (theme: string): keyof typeof themes => {
  return theme as keyof typeof themes
}

/**
 * @param selectedTheme
 * @returns theme as keyof typeof themes i.e from themes imported from @uiw/codemirror-themes-all
 */

const getSeletecdTheme = (selectedTheme: string) => {
  return getTheme(selectedTheme)
}

export function SnapCodeArea() {
  const editorRef = useRef<HTMLDivElement>(null)
  const [code, setCode] = useState<string>(DEFAULT_CODE)
  const [language, setLanguage] = useState<string>("javascript")
  const [selectedTheme, setSelectedTheme] = useState<string>("githubDark")
  const [title, setTitle] = useState<string>("Untitled")
  const [selectedBackground, setSelectedBackground] = useState<string>(
    "linear-gradient(to left bottom, rgb(49, 46, 129), rgb(129, 140, 248), rgb(49, 46, 129))"
  )

  // Download Image as PNG
  const onButtonClick = useCallback(() => {
    if (editorRef.current === null) {
      return
    }
    toPng(editorRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a")
        link.download = `${title}.png`
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [editorRef, title])

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
          <Button
            variant={"outline"}
            onClick={() => {
              onButtonClick()
            }}
          >
            Download
            <Icons.download className="ml-4 h-4 w-4" />
          </Button>
        </div>
      </div>
      <div
        ref={editorRef}
        id="#snippet"
        className="relative mt-4 min-h-min w-full p-14"
        style={{
          background: `${selectedBackground}`,
        }}
      >
        <div className="relative">
          <div className="absolute -top-8 left-4 inline-flex items-center rounded-t-md bg-white px-4 py-2 text-xs font-semibold text-background opacity-50 drop-shadow-[0_1px_1.2px_rgba(0,0,0,0.8)]">
            <span className="mr-1">created using</span>{" "}
            <Icons.logo className="h-3 w-3" />{" "}
            <span className="ml-1">Snap</span>
          </div>
          <CodeMirror
            className={clsx("CodeMirror__Main__Editor", "relative")}
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
            <EditorTop />
          </CodeMirror>
        </div>
      </div>
    </div>
  )
}
