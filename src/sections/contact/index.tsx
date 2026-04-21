import { Check } from 'lucide-react';
import { useCopyText } from '../../hooks/useCopyText';
import { contact, contactWithLink } from './constant';

const Contact = () => {
    const { copy, copiedId } = useCopyText(2000);

    return (
        <section id='contact' className='flex flex-col py-20 sm:py-24 gap-12 max-w-6xl mx-auto px-4'>
            <header className="text-center lg:text-left">
                <h2 className="text-4xl font-bold tracking-tight">Contato</h2>
            </header>

            <div className='flex flex-col lg:flex-row gap-16 justify-between'>
                <div className='flex flex-col max-w-xl gap-8'>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Estou aberto a novos aprendizados e oportunidades. Acredito que cada experiência 
                        agrega valor tanto ao crescimento pessoal quanto profissional.
                    </p>
                    
                    <a 
                        className='group relative w-fit px-8 py-3 font-medium text-green-400 border-2 border-green-400 overflow-hidden transition-colors duration-300 hover:text-gray-900'
                        href='mailto:fernando.cc.dev@gmail.com'
                    >
                        <span className='relative z-10'>Enviar Email</span>
                        <div className='absolute inset-0 bg-green-400 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-out' />
                    </a>
                </div>

                <address className='flex flex-col sm:flex-row gap-6 not-italic'>

                    <ul className='flex flex-col gap-4'>
                        {contact.map((item) => (
                        <li key={item.id}>
                            <button 
                            onClick={() => copy(item.value, item.id)}
                            className='flex items-center gap-3 px-4 py-2 w-full hover:bg-white/5 rounded-md transition-colors group cursor-pointer'
                            aria-label={`Copiar ${item.id}`}
                            >
                                <span className="text-green-400 group-hover:scale-110 transition-transform">
                                    {copiedId === item.id ? <Check size={20} /> : item.icon}
                                </span>
                                <span className={copiedId === item.id ? 'text-green-400' : 'text-gray-300 group-hover:text-gray-200'}>
                                    {copiedId === item.id ? 'Copiado!' : item.label}
                                </span>
                            </button>
                        </li>
                        ))}
                    </ul>

                    <div className="hidden sm:block w-0.5 bg-gray-800 self-stretch"></div>

                    <ul className='flex sm:flex-col w-10 h-10 gap-6'>
                        {contactWithLink.map(contact => (
                            <li className='px-2 py-1 hover:bg-white/5 rounded-md cursor-pointer group'>
                                <a href={`${contact.link}`} target='_blank' rel='noreferrer' aria-label={`${contact.name} do Fernando`}>
                                    {contact.icon}   
                                </a>
                            </li>
                        ))}
                    </ul>
                </address>
            </div>
        </section>
    )
}

export default Contact