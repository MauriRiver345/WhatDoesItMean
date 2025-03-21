import "./translateTo.css"
import { PiSpeakerHighFill } from "react-icons/pi"
import { FaCopy } from "react-icons/fa"
import { useTranslationContext } from "../../context/TranslationContext/useTranslationContext"
import { useState, useEffect } from "react"

export function TranslateTo() {
  const { langPair, setLangPair, result } = useTranslationContext()

  // Estado para el idioma de destino seleccionado
  const [selectedLang, setSelectedLang] = useState<string>(
    langPair.split("|")[1]
  )

  // Efecto para actualizar el idioma activo cuando cambie `langPair`
  useEffect(() => {
    setSelectedLang(langPair.split("|")[1])
  }, [langPair])

  function changeToLang(e: React.MouseEvent<HTMLParagraphElement>) {
    e.preventDefault()
    const newToLang = e.currentTarget.dataset.lang

    setLangPair((prevState) => {
      const fromLang = prevState.split("|")[0]
      return `${fromLang}|${newToLang}`
    })
  }

  return (
    <div className="translate-card">
      <div className="header">
        <p id="destiny">To</p>
        <p
          className={`language ${selectedLang === "en" ? "active" : ""}`}
          onClick={changeToLang}
          data-lang="en"
        >
          English
        </p>
        <p
          className={`language ${selectedLang === "es" ? "active" : ""}`}
          onClick={changeToLang}
          data-lang="es"
        >
          Spanish
        </p>
        <p
          className={`language ${selectedLang === "de" ? "active" : ""}`}
          onClick={changeToLang}
          data-lang="de"
        >
          German
        </p>
        <p
          className={`language ${selectedLang === "it" ? "active" : ""}`}
          onClick={changeToLang}
          data-lang="it"
        >
          Italian
        </p>
      </div>
      <div className="text">
        <p className="result">{result}</p>
      </div>
      <div className="footer">
        <div className="iconos"></div>
        <a
          href=""
          className="mini-icons"
        >
          <PiSpeakerHighFill />
        </a>
        <a
          className="mini-icons"
          onClick={() => navigator.clipboard.writeText(result)}
        >
          <FaCopy />
        </a>
      </div>
    </div>
  )
}
