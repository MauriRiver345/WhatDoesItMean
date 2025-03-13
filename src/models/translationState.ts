import type { Dispatch, SetStateAction } from "react"

export interface TranslationState {
  text: string
  result: string
  langPair: string
  setText: Dispatch<SetStateAction<string>>
  setResult: Dispatch<SetStateAction<string>>
  setLangPair: Dispatch<SetStateAction<string>>
}
