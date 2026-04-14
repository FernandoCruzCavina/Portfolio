import ProfilePhoto from '../../assets/fernando-photo.jpg'
import UniversityIcon from '../../assets/logos/uam.svg'

const About = () => {
  return (
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto flex flex-col gap-16">
      <header className="text-center lg:text-left">
        <h2 className="text-3xl font-bold">Sobre mim</h2>
      </header>
      <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start">
        <article className="max-w-lg text-left lg:text-left space-y-4">
          <p>
            Tenho interesse em construir apis escaláveis e interface do cliente eficiente e compreensiva.
            Além de hoje estar interessado em casos de usos de bancos de dados NoSQL, especificamente
            do <span className="text-green-400 font-medium">CassandraDB</span> com sua propriedade{' '}
            <span className="text-green-400 font-medium">AP/EL</span>.
          </p>
          <p>
            Já desenvolvi projetos pessoais e acadêmicos utilizando da lógica de programação em{' '}
            <span className="text-green-400 font-medium">Java</span>,{' '}
            <span className="text-green-400 font-medium">TypeScript</span>,{' '}
            <span className="text-green-400 font-medium">Python</span> e{' '}
            <span className="text-green-400 font-medium">Go</span>.
            Sendo que também usei Spring Boot, Vite e FastApi.
          </p>
          <p>
            Busco minha primeira oportunidade como desenvolvedor <span className="text-green-400 font-medium">backend</span> ou{' '}
            <span className="text-green-400 font-medium">fullstack</span>, 
            contribuindo com soluções escaláveis e boas práticas de engenharia.
            Tendo as seguintes noções de:
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6'>
            <ul className='flex flex-col gap-3'>
                <li className='relative px-6 before:absolute before:left-0 before:top-2 before:bg-green-500 before:w-2 before:h-2 before:rounded-full '>
                    Executar testes unitários
                </li>
                <li className='relative px-6 before:absolute before:left-0 before:top-2 before:bg-green-500 before:w-2 before:h-2 before:rounded-full '>
                    Levantar requisitos FC e NF
                </li>
                <li className='relative px-6 before:absolute before:left-0 before:top-2 before:bg-green-500 before:w-2 before:h-2 before:rounded-full '>
                    Design de Interface
                </li>
                <li className='relative px-6 before:absolute before:left-0 before:top-2 before:bg-green-500 before:w-2 before:h-2 before:rounded-full '>
                    Gerenciar database SQL e NoSQL
                </li>
                <li className='relative px-6 before:absolute before:left-0 before:top-2 before:bg-green-500 before:w-2 before:h-2 before:rounded-full '>
                    Práticas de Segurança
                </li>
                <li className='relative px-6 before:absolute before:left-0 before:top-2 before:bg-green-500 before:w-2 before:h-2 before:rounded-full '>
                    Boas práticas de código
                </li>
            </ul>
            <ul className='flex flex-col gap-3'>
                <li className='relative px-6 before:absolute before:left-0 before:top-2 before:bg-green-500 before:w-2 before:h-2 before:rounded-full '>
                    Container (Docker)
                </li>
                <li className='relative px-6 before:absolute before:left-0 before:top-2 before:bg-green-500 before:w-2 before:h-2 before:rounded-full '>
                    Metodologias ágeis (Scrum e Kanban)
                </li>
                <li className='relative px-6 before:absolute before:left-0 before:top-2 before:bg-green-500 before:w-2 before:h-2 before:rounded-full '>
                    CI/CD (Github Actions)
                </li>
                <li className='relative px-6 before:absolute before:left-0 before:top-2 before:bg-green-500 before:w-2 before:h-2 before:rounded-full '>
                    Implementação de Microserviços
                </li>
                <li className='relative px-6 before:absolute before:left-0 before:top-2 before:bg-green-500 before:w-2 before:h-2 before:rounded-full '>
                    Automações no Linux
                </li>
                <li className='relative px-6 before:absolute before:left-0 before:top-2 before:bg-green-500 before:w-2 before:h-2 before:rounded-full '>
                    Comandos Git
                </li>
            </ul>
          </div>
        </article>
        <div className="flex flex-col sm:flex-row lg:flex-col gap-10 items-center">
          <figure className="flex flex-col items-center gap-4">
            <img
              src={ProfilePhoto}
              alt="Foto de Fernando Cruz Cavina"
              className="w-40 h-40 object-cover rounded-full border-4 border-green-400 shadow-lg shadow-green-800"
            />
            <figcaption className="font-semibold text-center">
              Fernando Cruz Cavina
            </figcaption>
          </figure>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
            <li className="p-4 border border-green-400/60 bg-green-400/5 rounded-xl flex flex-col gap-4">
              <img
                src={UniversityIcon}
                alt="Universidade Anhembi Morumbi"
                className=""
              />
              <dl className="space-y-2">
                <div className="flex justify-between">
                  <dt>Cursando</dt>
                  <dd className="text-green-400 font-medium">5°sem</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Período</dt>
                  <dd className="text-green-400 font-medium">Noturno</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Término</dt>
                  <dd className="text-green-400 font-medium">Dez.2027</dd>
                </div>
              </dl>
            </li>
            <li className="p-4 border border-green-400/60 bg-green-400/5 rounded-xl flex flex-col items-center justify-center text-center">
              <strong className="text-3xl text-green-400">10+</strong>
              <span>Projetos completos</span>
            </li>
            <li className="p-4 border border-green-400/60 bg-green-400/5 rounded-xl">
              <h2 className="text-center font-medium mb-3">Idiomas</h2>

              <dl className="space-y-2">
                <div className="flex justify-between">
                  <dt>Espanhol</dt>
                  <dd className="text-green-400 font-medium">Fluente</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Inglês</dt>
                  <dd className="text-green-400 font-medium">B1</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Japonês</dt>
                  <dd className="text-green-400 font-medium">N5</dd>
                </div>
              </dl>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About