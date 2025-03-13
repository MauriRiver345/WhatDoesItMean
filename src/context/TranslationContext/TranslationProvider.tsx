import { useState } from "react"
import { TranslationContext } from "./translationContext"

export function TranslationProvider({
  children,
}: {
  children: React.ReactNode | React.ReactNode[]
}) {
  const [text, setText] = useState("")
  const [result, setResult] = useState("")
  const [langPair, setLangPair] = useState("")

  return (
    <TranslationContext.Provider
      value={{ text, result, setText, setResult, langPair, setLangPair }}
    >
      {children}
    </TranslationContext.Provider>
  )
}
