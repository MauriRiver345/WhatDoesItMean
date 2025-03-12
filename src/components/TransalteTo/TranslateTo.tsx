import "./translateTo.css"
import { FaExchangeAlt } from "react-icons/fa"
import { PiSpeakerHighFill } from "react-icons/pi"
import { FaCopy } from "react-icons/fa"
import { useTranslationContext } from "../../context/TranslationContext/useTranslationContext"

export function TranslateTo() {
  const { text, langPair, setLangPair } = useTranslationContext()

  function changeToLang(e: React.MouseEvent<HTMLParagraphElement>) {
    e.preventDefault()
    const newToLang = e.currentTarget.dataset.lang

    setLangPair((prevState) => {
      console.log(prevState)
      const fromLang = prevState.split("|")[0]

      return `${fromLang}|${newToLang}`
    })
  }

  console.log(langPair)

  return (
    <div className="translate">
      <div className="header">
        <p
          onClick={changeToLang}
          data-lang="en"
        >
          English
        </p>
        <p
          onClick={changeToLang}
          data-lang="es"
        >
          Spanish
        </p>
        <a href="">
          <FaExchangeAlt id="iconExchange" />
        </a>
      </div>
      <div className="text">
        <p>{text}</p>
      </div>
      <div className="footer">
        <a href="">
          <PiSpeakerHighFill />
        </a>
        <a href="">
          <FaCopy />
        </a>
      </div>
    </div>
  )
}
