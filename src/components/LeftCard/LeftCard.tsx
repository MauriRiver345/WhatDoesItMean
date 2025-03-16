import "./LeftCard.css"
import { FaCopy } from "react-icons/fa"
import { PiSpeakerHighFill } from "react-icons/pi"
import { useTranslationContext } from "../../context/TranslationContext/useTranslationContext"
import useTranslate from "../../hooks/useTranslate"
import "../TransalteTo/TranslateTo.css"
import { FaExchangeAlt } from "react-icons/fa"


export function LeftCard() {
  const { setText, text, setLangPair, langPair, setResult } = useTranslationContext()
  const translate = useTranslate()

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
      console.log(prevState)
      const toLang = prevState.split("|")[1]

      return `${newFromLang}|${toLang}`
    })
  }

  async function handleTranslate() {
    const translation = await translate(text,langPair)
    setResult(translation)
  }

  return (
    <div className="translateFrom">
      <div className="header">
        <p>
          Select Language
        </p>
        <p
          onClick={changeFromLang}
          data-lang="es"
        >
          Spanish
        </p>
        <p
            onClick={changeFromLang}
          data-lang="en"
        >
          English
        </p>
        <a href="">
          <FaExchangeAlt id="iconExchange" />
        </a>
      </div>
      <div className="text">
      <div className="to-translate-container">
    <textarea
      onChange={handleInput}
      value={text}
      className="to-translate"
      placeholder="Type here..."
    />
  </div>
          <div className="total-characters-container">
    <p className="total-characters">{text.length}/500</p>
  </div>
      </div>
      <div className="footerFrom">
    <div className="iconos">
    <a href="" className="mini-icons">
          <PiSpeakerHighFill />
        </a>
    <a href="" className="mini-icons">
          <FaCopy />
        </a>
    </div>
        <button
      className="translate-button"
      onClick={handleTranslate}>
      Translate
    </button>
      </div>
    </div>
  )
}
