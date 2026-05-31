import './App.css'
import NameCard from './components/NameCard.tsx'
import NavBar from './components/NavBar.tsx'

type Developer = {
    name?: string;
    favLanguage?: string;
    yearsCoding?: number;
    bio?: string;
};

function App() {
  const developers: Developer[] = [
    {
      name: "Josh",
      favLanguage: "JavaScript",
      yearsCoding: 10,
      bio: "I've been practicing programming since I discovered ComputerCraft in Minecraft over 10 years ago!"
    },
    {
      name: "Phillip",
      favLanguage: "C#",
      yearsCoding: 4
    },
    {
      name: "Amanda",
      favLanguage: "HTML",
      yearsCoding: 6,
      bio: "Pretty average programmer"
    }
  ]

  const nameCards = developers.map((developer: Developer) => <NameCard key={developer.name} name={developer.name} favLanguage={developer.favLanguage} yearsCoding={developer.yearsCoding} bio={developer.bio}/>)

  return (
    <div>
      <NavBar />
    
      <section id="center">
        <div className="developers">
          {nameCards}
        </div>
      </section>
    </div>
  )
}

export default App
