import { useEffect, useState } from "react"

export default function useTranslate(text: string, lang: string): string {
  const [translation, setTranslation] = useState<string>("")

  useEffect(() => {
    try {
      const api = async () => {
        const url = "https://api.mymemory.translated.net/get"
        const params = {
          q: text,
          langpair: lang,
        }
        const queryString = new URLSearchParams(params).toString()
        const request = new Request(`${url}?${queryString}`)

        const data = await fetch(request)
        const jsonData = await data.json()
        const translated = jsonData.responseData.translatedText
        setTranslation(translated)
      }
      api()
    } catch (error) {
      console.error("Error fetching translation:", error)
    }
  }, [])
  console.log(translation)
  return translation
}
