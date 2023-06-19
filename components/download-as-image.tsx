import { RefObject, useCallback, useContext } from "react"
import { ConfigContext } from "@/context/configContext"
import { toPng } from "html-to-image"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export function DownloadAsImage({
  editorRef,
}: {
  editorRef: RefObject<HTMLDivElement>
}) {
  const { state } = useContext(ConfigContext)
  const { title } = state

  /**
   * Download the editor as a png image
   */
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
  )
}
