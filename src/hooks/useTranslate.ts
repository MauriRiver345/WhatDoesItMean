import { useState } from "react"

export default function useTranslate() {
  const [translation, setTranslation] = useState<string>("")

  async function translate(text: string, lang: string): Promise<string> {
    try {
      const url = "https://api.mymemory.translated.net/get"
      const params = new URLSearchParams({ q: text, langpair: lang })
      const response = await fetch(`${url}?${params}`)
      const jsonData = await response.json()
      const translated = jsonData.responseData.translatedText
      setTranslation(translated)
      return translated
    } catch (error) {
      console.error("Error fetching translation:", error)
      return ""
    }
  }

  return translate
}
