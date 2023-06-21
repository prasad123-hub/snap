import { useContext } from "react"
import { ConfigContext } from "@/context/configContext"

import { Button } from "./ui/button"
import { Input } from "./ui/input"

export function SaveSnapForm() {
  const { state, dispatch } = useContext(ConfigContext)
  return (
    <div className="inline-flex w-full items-center space-x-4">
      <Input
        placeholder="Enter a title for your snap"
        name="title"
        type="text"
        className="w-full"
        onChange={(e) => {
          dispatch({ type: "UPDATE_TITLE", payload: e.target.value })
        }}
      />
      <Button variant={"outline"}>Save</Button>
    </div>
  )
}
