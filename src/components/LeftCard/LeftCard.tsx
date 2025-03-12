import "./LeftCard.css"
import { FaCopy } from "react-icons/fa"
import { PiSpeakerHighFill } from "react-icons/pi"
import { useTranslationContext } from "../../context/TranslationContext/useTranslationContext"
import useTranslate from "../../hooks/useTranslate"

export function LeftCard() {
  const { setText, text, setLangPair, langPair } = useTranslationContext()
  useTranslate(text, langPair)

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

  console.log(langPair)

  return (
    <section className="card">
      <div className="language-selector">
        <p>Select Language</p>
        <p
          onClick={changeFromLang}
          data-lang="es"
        >
          Español
        </p>
        <p
          onClick={changeFromLang}
          data-lang="en"
        >
          English
        </p>
      </div>
      <div className="content">
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
        <div className="controls">
          <div>
            <PiSpeakerHighFill size={25} />
            <FaCopy size={25} />
          </div>

          <button
            className="translate-button"
            onClick={() => }
          >
            Translate
          </button>
        </div>
      </div>
    </section>
  )
}
