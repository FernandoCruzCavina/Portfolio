import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='flex py-25'>
      <div className='flex flex-col gap-6'>
        <h1 className='text-2xl font-medium'>Contato</h1>
        <p>Estou aberto a novos aprendizados mesmo que não sejam como programador, porque acredito que cada experiência agrega na minha pessoa e no meu trabalho.</p>
        <button className='w-fit px-3 py-2 border-2 border-green-400'>Enviar Email</button>
      </div>
      <ul className='flex flex-col gap-5'>
        <li>
          <button className='flex gap-2 px-3 py-2 hover:bg-gray-700 rounded-sm cursor-pointer'><MapPin />São Paulo, SP, Brasil</button>
        </li>
        <li>
          
          <button className='flex gap-2 px-3 py-2 hover:bg-gray-700 rounded-sm cursor-pointer'><Phone />+55 (11) 95067-2602</button>
        </li>
        <li>
          <button className='flex gap-2 px-3 py-2 hover:bg-gray-700 rounded-sm cursor-pointer'><Mail />fernando.cc.dev@gmail.com</button>
        </li>
      </ul>
      <ul>
        <li>
          <a>
            
          </a>
        </li>

      </ul>
    </section>
  )
}

export default Contact