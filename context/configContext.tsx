import React, { createContext, useReducer } from "react"

import {
  DEFAULT_BACKGROUND,
  DEFAULT_CODE,
  DEFAULT_LANGUAGE,
  DEFAULT_THEME,
  DEFAULT_TITLE,
} from "@/config/constants"

type InitialStateType = {
  code: string
  language: string
  selectedTheme: string
  selectedBackground: string
  title: string
  isPro: boolean
}

const initialState: InitialStateType = {
  code: DEFAULT_CODE,
  language: DEFAULT_LANGUAGE,
  selectedTheme: DEFAULT_THEME,
  selectedBackground: DEFAULT_BACKGROUND,
  title: DEFAULT_TITLE,
  isPro: false,
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
    case "UPDATE_IS_PRO":
      return {
        ...state,
        isPro: action.payload,
      }
    default:
      // return error
      throw new Error(`Invalid action type: ${action.type}`)
  }
}

// Provider Component
function ConfigProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const customerDetails = async () => {
    const response = await fetch("/api/user")
    const data = await response.json()

    if (data) {
      dispatch({ type: "UPDATE_IS_PRO", payload: data.isPro })
    }

    console.log("data from ConfigProvider", data)
  }

  React.useEffect(() => {
    customerDetails()
  }, [])

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
