import { createContext } from "react"
import { TranslationState } from "../../models/translationState"

export const TranslationContext = createContext<TranslationState>({
  text: "",
  result: "",
  langPair: "en|es",
  setText: () => {},
  setResult: () => {},
  setLangPair: () => {},
})
