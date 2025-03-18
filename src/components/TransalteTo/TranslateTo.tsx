import "./translateTo.css"
import { FaExchangeAlt } from "react-icons/fa"
import { PiSpeakerHighFill } from "react-icons/pi"
import { FaCopy } from "react-icons/fa"
import { useTranslationContext } from "../../context/TranslationContext/useTranslationContext"
import useTranslate from "../../hooks/useTranslate"

export function TranslateTo() {
  const { text, langPair, setLangPair, result } = useTranslationContext()

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
    <div className="translateTo">
      <div className="header">
        <p className="Language"
          onClick={changeToLang}
          data-lang="en"
        >
          English
        </p>
        <p className="Language"
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
        <p className="result">{result}</p>
      </div>
      <div className="footer">
        <div className="iconos"> 
        </div>
        <a href="" className="mini-icons">
          <PiSpeakerHighFill />
        </a>
        <a href="" className="mini-icons">
          <FaCopy />
        </a>
      </div>
    </div>
  )
}
