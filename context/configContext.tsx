import React, { createContext, useReducer } from "react"

import { DEFAULT_CODE } from "@/config/constants"

type InitialStateType = {
  code: string
  language: string
  selectedTheme: string
  selectedBackground: string
  title: string
}

const initialState: InitialStateType = {
  code: DEFAULT_CODE,
  language: "javascript",
  selectedTheme: "githubDark",
  selectedBackground:
    "linear-gradient(to left bottom, rgb(49, 46, 129), rgb(129, 140, 248), rgb(49, 46, 129))",
  title: "Code_Snippet",
}

const ConfigContext = createContext<{
  state: InitialStateType
  dispatch: React.Dispatch<any>
}>({
  state: initialState,
  dispatch: () => null,
})

// Reducer Function
function reducer(state: InitialStateType, action: any) {
  switch (action.type) {
    case "UPDATE_CODE":
      return {
        ...state,
        code: action.payload,
      }
    case "UPDATE_LANGUAGE":
      return {
        ...state,
        language: action.payload,
      }
    case "UPDATE_THEME":
      return {
        ...state,
        selectedTheme: action.payload,
      }
    case "UPDATE_BACKGROUND":
      return {
        ...state,
        selectedBackground: action.payload,
      }
    case "UPDATE_TITLE":
      return {
        ...state,
        title: action.payload,
      }
    default:
      // return error
      throw new Error(`Invalid action type: ${action.type}`)
  }
}

// Provider Component
function ConfigProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <ConfigContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </ConfigContext.Provider>
  )
}

export { ConfigContext, ConfigProvider }