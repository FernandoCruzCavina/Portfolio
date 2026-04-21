const Home = () => {
  return (
    <section id="home" className="relative flex flex-col gap-4 min-h-screen justify-center overflow-hidden">
      <div className="flex flex-col gap-2">
        <span className="text-green-400 font-mono text-sm sm:text-base mb-2 block">
          Oi, meu nome é
        </span>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tight">
          Fernando Cruz.
        </h1>
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-400 leading-none">
          Construindo a lógica de soluções
        </h2>
        <p className="max-w-lg mt-6 text-gray-400 text-lg leading-relaxed">
          Desenvolvedor de Software orientado à Fullstack. 
          Atualmente, busco minha entrada na área da <span className="text-green-400">Tecnologia</span>.
        </p>
        <div className="mt-10">
          <a href="#projects" className="px-8 py-4 relative overflow-hidden border-2 border-green-400 text-green-400 hover:text-gray-900 hover:border-green-400
            after:absolute after:left-0 after:bottom-0 after:w-full after:h-0 after:bg-green-400 after:transition-all after:duration-300 after:ease-out hover:after:h-full after:z-0
          ">
            <span className="relative z-10">Veja meus projetos</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1/3 pointer-events-none z-0 opacity-40">
        <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00ff88">
                <animate 
                  attributeName="stop-color"
                  values="#00ff88; #33ffcc; #00ff88"
                  dur="10s" 
                  repeatCount="indefinite" 
                />
              </stop>
              <stop offset="100%" stopColor="#00cc66">
                <animate 
                  attributeName="stop-color"
                  values="#00cc66; #00ffaa; #00cc66"
                  dur="10s" 
                  repeatCount="indefinite" 
                />
              </stop>
            </linearGradient>
          </defs>
          <path fill="url(#grad1)">
            <animate
              attributeName="d"
              dur="15s"
              repeatCount="indefinite"
              values="
                M0,160 C300,80 900,240 1200,160 L1200,400 L0,400 Z;
                M0,180 C300,260 900,60 1200,180 L1200,400 L0,400 Z;
                M0,160 C300,80 900,240 1200,160 L1200,400 L0,400 Z
              "
            />
          </path>
        </svg>
      </div>
    </section>
  )
}

export default Home