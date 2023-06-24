"use client"

import { useRef } from "react"
import { ConfigProvider } from "@/context/configContext"
import { CustomerDetailsProps } from "@/types"

import { SelectLanguage } from "@/components/select-language"

import { BackgroundChanger } from "./background-changer"
import { DownloadAsImage } from "./download-as-image"
import { Editor } from "./editor"
import { SaveSnapForm } from "./save-snap-form"
import { SelectTheme } from "./select-theme"

interface SnapCodeAreaProps {
  subPlan: CustomerDetailsProps
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

export function SnapCodeArea({
  updateConfig,
  updateVesion,
  subPlan,
}: SnapCodeAreaProps) {
  const editorRef = useRef<HTMLDivElement>(null)

  return (
    <ConfigProvider>
      <div
        id="#snap_code_area"
        className="mx-auto w-full max-w-6xl rounded-md border border-border p-10"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="space-y-3 md:space-x-3 md:space-y-0">
            <BackgroundChanger
              updateBackgroundVersion={updateConfig?.background as string}
              isPro={subPlan?.isPro}
            />
            <SelectTheme updateThemeVersion={updateConfig?.theme as string} />
            <SelectLanguage
              updateLangauageVersion={updateConfig?.langauge as string}
            />
          </div>
          <div className="mt-3 md:mt-0">
            <DownloadAsImage editorRef={editorRef} />
          </div>
        </div>
        <div ref={editorRef} id="#snippet" className="relative ">
          <Editor
            updateConfig={updateConfig}
            updateVesion={updateVesion}
            isPro={subPlan?.isPro}
          />
        </div>
        <div className="mt-4">
          <SaveSnapForm
            updatConfig={updateConfig}
            updateTitleVersion={updateConfig?.title}
          />
        </div>
      </div>
    </ConfigProvider>
  )
}
