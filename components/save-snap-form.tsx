import { useContext, useState } from "react"
import { ConfigContext } from "@/context/configContext"
import { useUser } from "@clerk/clerk-react"

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { toast } from "./ui/use-toast"

export function SaveSnapForm() {
  const [saving, setSaving] = useState(false)
  const { state, dispatch } = useContext(ConfigContext)
  const { user } = useUser()

  const saveHandler = async (e: any) => {
    e.preventDefault()
    console.log("saving")
    setSaving(true)
    const res = await fetch("/api/snap", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: state.title,
        code: state.code,
        language: state.language,
        theme: state.selectedTheme,
        background: state.selectedBackground,
        creatorId: user?.id,
      }),
    })

    console.log("res", res)

    if (res.ok) {
      setSaving(false)
      toast({
        title: "Snap Saved",
        description: "View in Snap Collection.",
      })
    } else {
      setSaving(false)
      toast({
        title: "Error",
        description: "There was an error saving your snap.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="inline-flex w-full items-center space-x-4">
      <form onSubmit={saveHandler} className="inline-flex w-full space-x-4">
        <Input
          placeholder="Enter a title for your snap"
          name="title"
          type="text"
          className="w-full"
          onChange={(e) => {
            dispatch({ type: "UPDATE_TITLE", payload: e.target.value })
          }}
        />
        <Button type="submit" variant={"outline"}>
          {saving ? "Saving..." : "Save"}
        </Button>
      </form>
    </div>
  )
}
