import ProfilePhoto from '../../assets/fernando-photo.jpg'
import UniversityIcon from '../../assets/logo-uam.svg'

const About = () => {
  return (
    <section id='about' className='flex gap-x-14 py-25'>
        <div className='flex gap-9'>
            <div className='flex flex-col items-center justify-center gap-5'>
                <img src={ProfilePhoto} alt="" className='w-full max-w-400 rounded-full' />
                <h2 className='font-bold'>Fernando Cruz Cavina</h2>
            </div>
            <ul className='flex h-full flex-col gap-6 items-center justify-center text-[10px]'>
                <li className='h-30 w-36 border-2 border-green-400 py-4 px-3 flex flex-col justify-between'>
                    <img src={UniversityIcon} alt="" className=''/>
                    <div>
                        <div className='flex justify-between'>
                            <span>Cursando</span>
                            <span>5° sem</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>Período</span>
                            <span>Noturno</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>Conclusão</span>
                            <span>Dez.2027</span>
                        </div>
                    </div>
                </li>
                <li className='h-30 w-36 border-2 border-green-400 py-4 px-3 flex flex-col items-center text-center'>
                    <span className='text-2xl font-semibold'>10</span>
                    <span className='text-lg'>projetos</span>
                    <span className='text-lg'>completos</span>
                </li>
                <li className='h-30 w-36 border-2 border-green-400 py-4 px-3 flex flex-col justify-between'>
                    <h2 className='text-center text-lg font-medium'>Idiomas</h2>
                    <div>
                        <div className='flex justify-between'>
                            <span>Espanhol</span>
                            <span>Fluente</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>Inglês</span>
                            <span>B1</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>Japonês</span>
                            <span>N5</span>
                        </div>
                    </div>
                </li>
            </ul>

        </div>
        <div className='flex flex-col text-end gap-5'>
            <h1 className='text-2xl font-semibold'>Sobre mim</h1>
            <div className='flex flex-col gap-2.5'>
                <p>Tenho uma abordagem estruturada para resolução de problemas. Para organizar minhas ideias, costumo mapear todos os pontos de incômodo, geralmente utilizando papel, e a partir disso desenho o fluxo da solução desejada.</p>
                <p>Utilizo o Excalidraw para consolidar decisões técnicas e tornar o fluxo da solução mais evidente. Quando preciso de algo mais próximo da interface do usuário, recorro ao Figma</p>
                <p>No desenvolvimento, busco aplicar boas práticas atuais, priorizando código limpo, legível e de fácil manutenção a longo prazo.</p>
                <p>Tenho experiência com Java, TypeScript, Python e Go, além de frameworks e bibliotecas como Spring Boot, React e FastAPI.</p>
                <p>Também possuo conhecimento em cultura DevOps, incluindo automação de testes e uso de containers.</p>
            </div>
        </div>
    </section>
  )
}

export default About