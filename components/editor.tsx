import { useContext, useEffect } from "react"
import { ConfigContext } from "@/context/configContext"
import { EditorView } from "@codemirror/view"
import { langs, loadLanguage } from "@uiw/codemirror-extensions-langs"
import * as themes from "@uiw/codemirror-themes-all"
import CodeMirror from "@uiw/react-codemirror"
import clsx from "clsx"

import { DEFAULT_BASE_SETUP } from "@/config/constants"
import { EditorTop } from "@/components/editor-top"
import { Icons } from "@/components/icons"

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

interface EditorProps {
  isPro?: boolean
  updateVesion?: boolean
  updateConfig?: {
    id: string
    title: string
    code: string
    langauge: string
    theme: string
    background: string
    createdAt: Date
    updatedAt: Date
    creatorId: string
  }
}

export function Editor({ updateConfig, isPro }: EditorProps) {
  const { state, dispatch } = useContext(ConfigContext)
  const { selectedBackground, selectedTheme, code, language } = state

  useEffect(() => {
    if (updateConfig) {
      dispatch({ type: "UPDATE_CODE", payload: updateConfig.code })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateConfig])

  return (
    <div
      className="relative mt-4 min-h-min w-full p-14 "
      style={{
        background: `${selectedBackground}`,
      }}
    >
      {!isPro && (
        <div className="absolute left-20 top-6 inline-flex items-center rounded-t-md bg-white px-4 py-2 text-xs font-semibold text-background opacity-50 drop-shadow-[0_1px_1.2px_rgba(0,0,0,0.8)]">
          <span className="mr-1">created using</span>{" "}
          <Icons.logo className="h-3 w-3" /> <span className="ml-1">Snap</span>
        </div>
      )}
      <CodeMirror
        className={clsx("CodeMirror__Main__Editor", "relative")}
        //@ts-ignore
        theme={themes[getSeletecdTheme(selectedTheme)]}
        value={code}
        extensions={[
          loadLanguage(getLanguage(language))?.extension || langs.javascript(),
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
          dispatch({ type: "UPDATE_CODE", payload: value })
        }}
      >
        <EditorTop />
      </CodeMirror>
    </div>
  )
}
