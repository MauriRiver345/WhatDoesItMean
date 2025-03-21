import { Translation } from "../models/translationResponse"

export default function useTranslate() {
  async function translate(text: string, lang: string): Promise<string> {
    try {
      const url = "https://api.mymemory.translated.net/get"
      const params = new URLSearchParams({ q: text, langpair: lang })
      const response = await fetch(`${url}?${params}`)
      const jsonData: Translation = await response.json()
      return jsonData.responseData.translatedText
    } catch (error) {
      console.error("Error fetching translation:", error)
      return ""
    }
  }

  return translate
}
