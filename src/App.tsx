import "./App.css"
import { MainTitle } from "./components/MainTitle/MainTitle"
import { LeftCard } from "./components/LeftCard/LeftCard"
import { TranslateTo } from "./components/TransalteTo/TranslateTo"
import { TranslationProvider } from "./context/TranslationContext/TranslationProvider"

function App() {
  return (
    <main>
      <TranslationProvider>
        <MainTitle />
        <div className='cards-container'>
          <LeftCard />
          <TranslateTo />
        </div>
      </TranslationProvider>
    </main>
  )
}

export default App
