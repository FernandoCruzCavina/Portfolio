import './App.css'
import Home from './sections/home'
import About from './sections/about'
import Projects from './sections/projects'
import Contact from './sections/contact'
import Skills from './sections/skills'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { SiGithub, SiGmail, SiLeetcode, SiWhatsapp } from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa'
function App() {
  const [isOpenNav, setIsOpenNav] = useState(false)
  const sections = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Contato', href: '#contact' },
  ]

  return (
    <div className="w-full">
      <header className="fixed top-0 left-0 w-full h-24 bg-gray-950 flex items-center justify-center z-10">
        <nav className="hidden sm:flex gap-x-8 items-center">
          {sections.map((section) => (
            <a key={section.href} href={section.href} className="relative p-2 transition hover:text-green-400 hover:-translate-y-1 after:absolute after:w-0 after:h-0.5 after:left-0 after:-bottom-1 after:bg-green-400 after:transition-all hover:after:w-full">
              {section.name}
            </a>
          ))}
          <a href='/FernandoCruzCavina.pdf' target='_blank' rel="noopener noreferrer" 
            className='relative overflow-hidden border-2 border-green-400 px-4 py-2 text-green-400 hover:text-gray-900 hover:border-green-400
            after:absolute after:left-0 after:bottom-0 after:w-full after:h-0 after:bg-green-400 after:transition-all after:duration-300 after:ease-out hover:after:h-full after:z-0
          '>
            <span className='relative z-10'>resume</span>
          </a>
        </nav>
        <button className='sm:hidden text-green-400 flex items-center gap-2' onClick={() => setIsOpenNav(!isOpenNav)}>
          <span className="text-sm uppercase tracking-widest font-bold">Menu</span>
          {isOpenNav ? <X size={28} /> : <Menu size={28} />}
        </button>
        <div className={`fixed top-20 left-0 w-full bg-gray-950 border-b border-green-400/20 transition-all duration-300 overflow-hidden sm:hidden ${isOpenNav ? 'h-80' : 'h-0'}`}>
          <nav className='flex flex-col items-center gap-6 py-8'>
            {sections.map((section) => (
              <a key={section.href} href={section.href} onClick={() => setIsOpenNav(false)} className="text-lg hover:text-green-400 transition-colors">
                {section.name}
              </a>
            ))}
          </nav>
        </div>
      </header>
      <aside className="hidden min-[1150px]:flex flex-col fixed bottom-0 left-8 items-center gap-4 z-10">
        <div className="flex flex-col gap-2 w-auto">
          <a className="p-2 cursor-pointer group" href='https://github.com/fernandocruzcavina' target='_blank' rel='noreferrer' aria-label='Github do Fernando'>
            <SiGithub className='size-6 fill-white transition group-hover:fill-green-400 group-hover:-translate-y-2' title='Github' />  
          </a>
          <a className="p-2 cursor-pointer group" href='https://wa.me/5511950672602?text=Oi%2C%20vi%20seu%20Portif%C3%B3lio%20e%20fiquei%20interessado%20no%20seu%20trabalho.' target='_blank' rel='noreferrer' aria-label='WhatsApp do Fernando'>
            <SiWhatsapp className='size-6 fill-white transition group-hover:fill-green-400 group-hover:-translate-y-2' title='WhatsApp' />  
          </a>
          <a className="p-2 cursor-pointer group" href="https://leetcode.com/u/fernando-cruz-cavina/" target='_blank' rel='noreferrer' aria-label='Leetcode do Fernando'>
            <SiLeetcode className='size-6 fill-white transition group-hover:fill-green-400 group-hover:-translate-y-2' title='Leetcode' />
          </a>
          <a className="p-2 cursor-pointer group" href="https://www.linkedin.com/in/fernando-cruz-cavina/" target='_blank' rel='noreferrer' aria-label='Linkedin do Fernando'>
            <FaLinkedinIn className='size-6 fill-white transition group-hover:fill-green-400 group-hover:-translate-y-2' title='Linkedin' />  
          </a>
          <a className="p-2 cursor-pointer group" href="mailto://fernando.cc.dev@gmail.com" rel='noreferrer' aria-label='Gmail do Fernando'>
            <SiGmail className='size-6 fill-white transition group-hover:fill-green-400 group-hover:-translate-y-2' title='Gmail' />  
          </a>
        </div>
      <div className="w-px h-24 bg-gray-500"></div>
      </aside>
      <aside className="hidden min-[1150px]:flex flex-col fixed bottom-0 right-8 items-center gap-y-4 z-10">
        <p className="text-white rotate-90 w-5 text-sm tracking-widest ">
          fernando.cc.dev@email.com
        </p>
        <div className="w-px h-24 bg-gray-500 mt-54"></div>
      </aside>
      <main className="max-w-5xl mx-auto px-12 sm:px-24  lg:px-6">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className='text-gray-400'>
        <div className=' flex flex-col items-center justify-center gap-0.5 py-3'>
          <p>
            Construído por Fernando Cruz Cavina.
          </p>
          <p className='text-center'>
            Design feito no Figma e Deploy feito pelo Vercel. Obrigado pelo serviço!
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
