"use client"

import { useRef } from "react"
import { ConfigProvider } from "@/context/configContext"

import { SelectLanguage } from "@/components/select-language"

import { BackgroundChanger } from "./background-changer"
import { DownloadAsImage } from "./download-as-image"
import { Editor } from "./editor"
import { SaveSnapForm } from "./save-snap-form"
import { SelectTheme } from "./select-theme"

export function SnapCodeArea() {
  const editorRef = useRef<HTMLDivElement>(null)

  return (
    <ConfigProvider>
      <div
        id="#snap_code_area"
        className="mx-auto w-full max-w-6xl rounded-md border border-border p-4 lg:p-10"
      >
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="space-x-3">
            <BackgroundChanger />
            <SelectTheme />
            <SelectLanguage />
          </div>
          <DownloadAsImage editorRef={editorRef} />
        </div>
        <div ref={editorRef} id="#snippet" className="relative ">
          <Editor />
        </div>
        <div className="mt-4">
          <SaveSnapForm />
        </div>
      </div>
    </ConfigProvider>
  )
}
