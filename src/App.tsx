import Github from './assets/github-color.svg'
import './App.css'
import Home from './sections/home'
import About from './sections/about'
import Projects from './sections/projects'

function App() {
  return (
    <div className="w-full">
      <header className="absolute top-0 left-0 w-full h-25 flex items-center justify-center z-50">
        <nav className="flex gap-x-12 items-center">
          <a href='#about'>Sobre</a>
          <a href='#projects'>Projetos</a>
          <a href='#skills'>Skills</a>
          <a href='#contact'>Contato</a>
          <a href='./public/FernandoCruzCavina.pdf' target='_blank' rel="noopener noreferrer" 
          className='border-2 border-teal-400 px-4 py-2 text-teal-300'>resume</a>
        </nav>
      </header>
      <aside className="hidden lg:flex flex-col fixed bottom-0 left-8 items-center gap-4">
        <div className="flex flex-col gap-4">
          <img src={Github} className="w-5" />
          <div>in</div>
          <div>tw</div>
        </div>
        <div className="w-px h-24 bg-gray-500 mt-4"></div>
      </aside>
      <aside className="hidden lg:flex flex-col fixed bottom-0 right-8 items-center gap-y-60">
        <p className="rotate-90 w-5 text-sm tracking-widest">
          fernando.cc.dev@email.com
        </p>
        <div className="w-px h-24 bg-gray-500 mt-4"></div>
      </aside>
      <main className="max-w-5xl mx-auto px-6">
        <Home />
        <About />
        <Projects />
        <section id='skills'>
          <h1>skills</h1>
        </section>
        <section id='contact'>
          <h1>contact</h1>
        </section>
      </main>
      <footer></footer>
    </div>
  )
}

export default App
