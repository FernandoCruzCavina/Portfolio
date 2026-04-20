const Home = () => {
  return (
    <section id='home' className="flex flex-col gap-6 h-screen justify-center">
        <h1 className="text-4xl sm:text-6xl font-bold">
        Desenvolvedor de
        </h1>
        <h1 className="text-4xl sm:text-6xl font-bold">Software</h1>
        <h2 className="text-xl sm:text-5xl text-gray-400">I build things for the web.</h2>
        <p className="max-w-xl text-gray-400">“Sempre melhor que o eu mesmo de ontem”</p>
        <div className="absolute bottom-0 left-0 w-full h-[500px] overflow-hidden z-0">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 600"preserveAspectRatio="none">
            <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00ff88">
                        <animate attributeName="stop-color"
                          values="#00ff88; #00ffaa; #33ffcc; #00ff88"
                          dur="8s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="100%" stopColor="#00cc66">
                        <animate attributeName="stop-color"
                          values="#00cc66; #00ffcc; #00ffaa; #00cc66"
                          dur="8s" repeatCount="indefinite" />
                    </stop>
                </linearGradient>
            </defs>
                <path fill="url(#grad1)">
                    <animate
                      attributeName="d"
                      dur="12s"
                      repeatCount="indefinite"
                      values="
                        M0,400 C300,300 900,500 1200,400 L1200,600 L0,600 Z;
                        M0,420 C300,250 900,550 1200,380 L1200,600 L0,600 Z;
                        M0,400 C300,300 900,500 1200,400 L1200,600 L0,600 Z
                      "
                    />
                </path>
            </svg>
        </div>
    </section>
  )
}

export default Home