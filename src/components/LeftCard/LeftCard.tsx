import "./LeftCard.css";
import { FaCopy } from "react-icons/fa";
import { PiSpeakerHighFill } from "react-icons/pi";
import { useTranslationContext } from "../../context/TranslationContext/useTranslationContext";
import useTranslate from "../../hooks/useTranslate";
import "../TransalteTo/TranslateTo.css";
import { FaExchangeAlt } from "react-icons/fa";
import { useState, useEffect } from "react";

export function LeftCard() {
  const { setText, text, setLangPair, langPair, setResult } = useTranslationContext();
  const translate = useTranslate();
  
  // Estado para el idioma seleccionado
  const [selectedLang, setSelectedLang] = useState<string>(langPair.split("|")[0]);

  useEffect(() => {
    setSelectedLang(langPair.split("|")[0]); // Actualiza el estado cuando langPair cambia
  }, [langPair]);

  function handleInput(e: React.ChangeEvent<HTMLTextAreaElement>) {
    e.preventDefault();
    if (e.target.value.length > 500) {
      return;
    }
    setText(e.target.value);
  }

  function changeFromLang(e: React.MouseEvent<HTMLParagraphElement>) {
    e.preventDefault();
    const newFromLang = e.currentTarget.dataset.lang;

    setLangPair((prevState) => {
      const toLang = prevState.split("|")[1];
      return `${newFromLang}|${toLang}`;
    });
  }

  function swapLanguages() {
    setLangPair((prevState) => {
      const [fromLang, toLang] = prevState.split("|");
      return `${toLang}|${fromLang}`;
    });
  }

  async function getTranslation() {
    const res = await translate(text, langPair);
    setResult(res);
  }

  return (
    <div className="translateFrom">
      <div className="header">
        <p id="origin">From</p>
        <p
          className={`Language ${selectedLang === "es" ? "active" : ""}`}
          onClick={changeFromLang}
          data-lang="es"
        >
          Spanish
        </p>
        <p
          className={`Language ${selectedLang === "en" ? "active" : ""}`}
          onClick={changeFromLang}
          data-lang="en"
        >
          English
        </p>
        <p 
          className={`Language ${selectedLang === "de" ? "active" : ""}`}
          onClick={changeFromLang}
          data-lang="de"
        >
          German
        </p>
        <p
          className={`Language ${selectedLang === "it" ? "active" : ""}`}
          onClick={changeFromLang}
          data-lang="it"
        >
          Italian
        </p>
        <a onClick={swapLanguages}>
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
          <a className="mini-icons" onClick={() => navigator.clipboard.writeText(text)}>
            <FaCopy />
          </a>
        </div>
        <button className="translate-button" onClick={getTranslation}>
          Translate
        </button>
      </div>
    </div>
  );
}
