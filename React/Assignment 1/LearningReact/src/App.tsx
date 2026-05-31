import './App.css'
import NameCard from './components/NameCard.tsx'


function App() {
  return (
    <section id="center">
      <div className="hero">
        <NameCard />
        <NameCard name="Philip" favLanguage='C#' yearsCoding={4}/>
        <NameCard name='Amanda' favLanguage='HTML' yearsCoding={6}/>
      </div>
    </section>
  )
}

export default App
