import ProfilePhoto from '../../assets/fernando-photo.jpg'
import UniversityIcon from '../../assets/logos/uam.svg'

const About = () => {
  return (
    <section id='about' className='flex gap-x-20 py-25'>
        <div className='flex gap-9'>
            <div className='flex flex-col items-center justify-center gap-5'>
                <img src={ProfilePhoto} alt="" className='w-full max-w-400 rounded-full' />
                <h2 className='font-bold'>Fernando Cruz Cavina</h2>
            </div>
            <ul className='flex h-full flex-col gap-6 items-center justify-center text-[12px]'>
                <li className='w-44 min-h-32 border-2 border-green-400/80 bg-green-400/10 py-4 px-3 flex flex-col justify-between'>
                    <img src={UniversityIcon} alt="" className=''/>
                    <div>
                        <div className='flex justify-between'>
                            <span >Cursando</span>
                            <span className='text-green-400'>5° sem</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>Período</span>
                            <span className='text-green-400'>Noturno</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>Conclusão</span>
                            <span className='text-green-400'>Dez.2027</span>
                        </div>
                    </div>
                </li>
                <li className='w-44 min-h-32 border-2 border-green-400/80 bg-green-400/5 py-4 px-3 flex flex-col items-center text-center'>
                    <span className='text-2xl font-semibold'>10</span>
                    <span className='text-lg'>projetos</span>
                    <span className='text-lg'>completos</span>
                </li>
                <li className='w-44 min-h-32 border-2 border-green-400/80 bg-green-400/5 py-4 px-3 flex flex-col justify-between'>
                    <h2 className='text-center text-lg font-medium'>Idiomas</h2>
                    <div>
                        <div className='flex justify-between'>
                            <span>Espanhol</span>
                            <span className='font-medium text-green-400'>Fluente</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>Inglês</span>
                            <span className='font-medium text-green-400'>B1</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>Japonês</span>
                            <span className='font-medium text-green-400'>N5</span>
                        </div>
                    </div>
                </li>
            </ul>

        </div>
        <div className='flex flex-col text-end gap-6 max-w-xl'>
            <h1 className='text-2xl font-semibold'>Sobre mim</h1>
            <div className='flex flex-col gap-2.5'>
                <p>Tenho uma abordagem estruturada para resolução de problemas. Para organizar minhas ideias, costumo mapear todos os pontos de incômodo, geralmente utilizando papel, e a partir disso desenho o fluxo da solução desejada.</p>
                <p>Utilizo o Excalidraw para consolidar decisões técnicas e tornar o fluxo da solução mais evidente. Quando preciso de algo mais próximo da interface do usuário, recorro ao Figma</p>
                <p>No desenvolvimento, busco aplicar boas práticas atuais, priorizando código limpo, legível e de fácil manutenção a longo prazo.</p>
                <p>Tenho experiência com <span className='text-green-400'>Java</span>, <span className='text-green-400'>TypeScript</span>, <span className='text-green-400'>Python</span> e <span className='text-green-400'>Go</span>, além de frameworks e bibliotecas como Spring Boot, React e FastAPI.</p>
                <p>Também possuo conhecimento em cultura DevOps, incluindo automação de testes e uso de containers.</p>
            </div>
        </div>
    </section>
  )
}

export default About