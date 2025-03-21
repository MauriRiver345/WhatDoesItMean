import "./LeftCard.css"
import { FaCopy } from "react-icons/fa"
import { PiSpeakerHighFill } from "react-icons/pi"
import { useTranslationContext } from "../../context/TranslationContext/useTranslationContext"
import useTranslate from "../../hooks/useTranslate"
import "../TransalteTo/TranslateTo.css"
import { FaExchangeAlt } from "react-icons/fa"
import { useState, useEffect } from "react"

export function LeftCard() {
  const { setText, text, setLangPair, langPair, setResult } =
    useTranslationContext()
  const translate = useTranslate()

  // Estado para el idioma seleccionado
  const [selectedLang, setSelectedLang] = useState<string>(
    langPair.split("|")[0]
  )

  useEffect(() => {
    setSelectedLang(langPair.split("|")[0]) // Actualiza el estado cuando langPair cambia
  }, [langPair])

  function handleInput(e: React.ChangeEvent<HTMLTextAreaElement>) {
    e.preventDefault()
    if (e.target.value.length > 500) {
      return
    }
    setText(e.target.value)
  }

  function changeFromLang(e: React.MouseEvent<HTMLParagraphElement>) {
    e.preventDefault()
    const newFromLang = e.currentTarget.dataset.lang

    setLangPair((prevState) => {
      const toLang = prevState.split("|")[1]
      return `${newFromLang}|${toLang}`
    })
  }

  function swapLanguages() {
    setLangPair((prevState) => {
      const [fromLang, toLang] = prevState.split("|")
      return `${toLang}|${fromLang}`
    })
  }

  async function getTranslation() {
    if (text.length === 0) return

    const fromLang = langPair.split("|")[0]
    const toLang = langPair.split("|")[1]

    if (fromLang === toLang) {
      setResult("Please select a different language")
      return
    }

    const res = await translate(text, langPair)
    setResult(res)
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      getTranslation()
    }
  }

  return (
    <div className='translate-card'>
      <div className='header'>
        <p id='origin'>From</p>
        <p
          className={`language ${selectedLang === "es" ? "active" : ""}`}
          onClick={changeFromLang}
          data-lang='es'
        >
          Spanish
        </p>
        <p
          className={`language ${selectedLang === "en" ? "active" : ""}`}
          onClick={changeFromLang}
          data-lang='en'
        >
          English
        </p>
        <p
          className={`language ${selectedLang === "de" ? "active" : ""}`}
          onClick={changeFromLang}
          data-lang='de'
        >
          German
        </p>
        <p
          className={`language ${selectedLang === "it" ? "active" : ""}`}
          onClick={changeFromLang}
          data-lang='it'
        >
          Italian
        </p>
        <a onClick={swapLanguages}>
          <FaExchangeAlt id='icon-exchange' />
        </a>
      </div>
      <div className='text'>
        <div className='to-translate-container'>
          <textarea
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            value={text}
            className='to-translate'
            placeholder='Type here...'
          />
        </div>
        <div className='total-characters-container'>
          <p className='total-characters'>{text.length}/500</p>
        </div>
      </div>
      <div className='footer-from'>
        <div className='iconos'>
          <a className='mini-icons'>
            <PiSpeakerHighFill />
          </a>
          <a
            className='mini-icons'
            onClick={() => navigator.clipboard.writeText(text)}
          >
            <FaCopy />
          </a>
        </div>
        <button
          className='translate-button'
          onClick={getTranslation}
        >
          Translate
        </button>
      </div>
    </div>
  )
}
