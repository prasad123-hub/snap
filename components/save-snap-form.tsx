import { useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ConfigContext } from "@/context/configContext"
import { useUser } from "@clerk/clerk-react"

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { toast } from "./ui/use-toast"

export function SaveSnapForm({
  updateTitleVersion,
  updatConfig,
}: {
  updateTitleVersion?: string
  updatConfig?: {
    id: string
    title: string
    code: string
    langauge: string
    theme: string
    background: string
  }
}) {
  const [saving, setSaving] = useState(false)
  const { state, dispatch } = useContext(ConfigContext)
  const { user } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (updateTitleVersion) {
      dispatch({
        type: "UPDATE_TITLE",
        payload: updateTitleVersion,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateTitleVersion])

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

    if (res.ok) {
      setSaving(false)
      toast({
        title: "Snap Saved",
        description: "View in Snap Collection.",
      })
      router.push("/dashboard/collection")
    } else {
      setSaving(false)
      toast({
        title: "Error",
        description: "There was an error saving your snap.",
        variant: "destructive",
      })
    }
  }

  const updateHandler = async (e: any) => {
    e.preventDefault()
    console.log("updating")
    setSaving(true)
    const res = await fetch(`/api/snap/${updatConfig?.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: state.title,
        code: state.code,
        language: state.language,
        theme: state.selectedTheme,
        background: state.selectedBackground,
      }),
    })

    if (res.ok) {
      setSaving(false)
      toast({
        title: "Snap Updated",
        description: "You can view your updated snap in your collection.",
      })
      router.push("/dashboard/collection")
    } else {
      setSaving(false)
      toast({
        title: "Error",
        description: "There was an error updating your snap.",
        variant: "destructive",
      })
    }
  }

  if (updateTitleVersion) {
    return (
      <div className="inline-flex w-full items-center space-x-4">
        <form onSubmit={updateHandler} className="inline-flex w-full space-x-4">
          <Input
            placeholder="Enter a title for your snap"
            id="title"
            name="title"
            type="text"
            className="w-full"
            value={state.title}
            onChange={(e) => {
              dispatch({ type: "UPDATE_TITLE", payload: e.target.value })
            }}
          />
          <Button type="submit" variant={"outline"} disabled={saving}>
            {saving ? "Updating ..." : "Update"}
          </Button>
        </form>
      </div>
    )
  }

  return (
    <div className="inline-flex w-full items-center space-x-4">
      <form onSubmit={saveHandler} className="inline-flex w-full space-x-4">
        <Input
          placeholder="Enter a title for your snap"
          id="title"
          name="title"
          type="text"
          className="w-full"
          value={state.title}
          onChange={(e) => {
            dispatch({ type: "UPDATE_TITLE", payload: e.target.value })
          }}
        />
        <Button type="submit" variant={"outline"} disabled={saving}>
          {saving ? "Saving..." : "Save"}
        </Button>
      </form>
    </div>
  )
}
