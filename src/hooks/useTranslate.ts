import { useEffect, useState } from "react";

export default function useTranslate(Text: string, Lang: string): string {
  const [translation, setTranslation] = useState<string>("");

  useEffect(() => {
    try {
      const api = async () => {
        const url = "https://api.mymemory.translated.net/get";
        const params = {
          q: Text,
          langpair: Lang
        };
        const queryString = new URLSearchParams(params).toString();
        const request = new Request(`${url}?${queryString}`);

        const data = await fetch(request);
        const jsonData = await data.json();
        const translated = jsonData.responseData.translatedText;
        setTranslation(translated);
      };
      api();
    } catch (error) {
      console.error("Error fetching translation:", error);
    }
  }, []);
  console.log(translation)
  return translation
}
