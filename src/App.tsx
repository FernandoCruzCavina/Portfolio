import './App.css'
import Home from './sections/home'
import About from './sections/about'
import Projects from './sections/projects'
import Contact from './sections/contact'

function App() {
  return (
    <div className="w-full">
      <header className="absolute top-0 left-0 w-full h-25 flex items-center justify-center z-50">
        <nav className="flex gap-x-10 items-center">
          <a href='#about' className='relative p-2 transition hover:text-green-400 hover:-translate-y-2 after:absolute after:w-0 after:h-0.5 after:left-0 after:-bottom-1 after:bg-green-400 after:transition-all hover:after:w-full'>Sobre</a>
          <a href='#projects' className='relative p-2 transition hover:text-green-400 hover:-translate-y-2 after:absolute after:w-0 after:h-0.5 after:left-0 after:-bottom-1 after:bg-green-400 after:transition-all hover:after:w-full'>Projetos</a>
          <a href='#skills' className='relative p-2 transition hover:text-green-400 hover:-translate-y-2 after:absolute after:w-0 after:h-0.5 after:left-0 after:-bottom-1 after:bg-green-400 after:transition-all hover:after:w-full'>Skills</a>
          <a href='#contact' className='relative p-2 transition hover:text-green-400 hover:-translate-y-2 after:absolute after:w-0 after:h-0.5 after:left-0 after:-bottom-1 after:bg-green-400 after:transition-all hover:after:w-full'>Contato</a>
          <a href='/FernandoCruzCavina.pdf' target='_blank' rel="noopener noreferrer" 
          className='relative overflow-hidden border-2 border-green-400 px-4 py-2 text-green-400 hover:text-green-700 hover:border-green-700
          after:absolute after:left-0 after:top-0 after:w-0 after:h-full after:bg-green-300 after:transition-all after:duration-300 after:ease-out hover:after:w-full after:z-0
          '><span className='relative z-10'>resume</span></a>
        </nav>
      </header>
      <aside className="hidden lg:flex flex-col fixed bottom-0 left-8 items-center gap-4">
        <div className="flex flex-col gap-2 w-auto ">
          <a className="p-2 cursor-pointer group" href='https://github.com/fernandocruzcavina' target='_blank' rel='noreferrer'><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='size-6 fill-white transition group-hover:fill-green-400 group-hover:-translate-y-2'><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a>
          <a className="p-2 cursor-pointer group" href="https://leetcode.com/u/fernando-cruz-cavina/" target='_blank' rel='noreferrer'><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='size-6 fill-white transition group-hover:fill-green-400 group-hover:-translate-y-2'><title>LeetCode</title><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg></a>
          <a className="p-2 cursor-pointer group" href="https://www.linkedin.com/in/fernando-cruz-cavina/" target='_blank' rel='noreferrer'><svg role='img' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='size-6 text-white group-hover:text-green-400 transition group-hover:-translate-y-2' stroke='red'><title>Linkedin</title><path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 9H2V21H6V9Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
          <a className="p-2 cursor-pointer group" href="mailto://fernando.cc.dev@gmail.com" rel='noreferrer'><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='size-6 fill-white transition group-hover:fill-green-400 group-hover:-translate-y-2' stroke=''><title>Gmail</title><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg></a>
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
        <Contact />
      </main>
      <footer></footer>
    </div>
  )
}

export default App
