import "./LeftCard.css"
import { FaCopy } from "react-icons/fa"
import { PiSpeakerHighFill } from "react-icons/pi"
import { useState } from "react"

export function LeftCard() {
  const [input, setInput] = useState("")

  function handleInput(e: React.ChangeEvent<HTMLTextAreaElement>) {
    e.preventDefault()
    if (e.target.value.length > 500) {
      return
    }

    setInput(e.target.value)
  }

  return (
    <section className="card">
      <div className="language-selector">
        <p>Select Language</p>
        <p>Español</p>
        <p>English</p>
      </div>
      <div className="content">
        <div className="to-translate-container">
          <textarea
            onChange={handleInput}
            value={input}
            className="to-translate"
            placeholder="Type here..."
          />
        </div>
        <div className="total-characters-container">
          <p className="total-characters">{input.length}/500</p>
        </div>
        <div className="controls">
          <div>
            <PiSpeakerHighFill size={25} />
            <FaCopy size={25} />
          </div>

          <button
            className="translate-button"
            onClick={() => true}
          >
            Translate
          </button>
        </div>
      </div>
    </section>
  )
}
