import { Mail, MapPin, Phone } from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiGithub, SiWhatsapp } from 'react-icons/si';

const contact = [
    { id: 'local', icon: <MapPin size={20} />, label: 'São Paulo, SP, Brasil', value: 'São Paulo, SP, Brasil' },
    { id: 'phone', icon: <Phone size={20} />, label: '+55 (11) 95067-2602', value: '+551195067-2602' },
    { id: 'gmail', icon: <Mail size={20} />, label: 'fernando.cc.dev@gmail.com', value: 'fernando.cc.dev@gmail.com' },
]

const contactWithLink = [
    { id: "1", name: "Github", icon: <SiGithub className='size-6 group-hover:text-green-400 group-hover:-translate-y-2 transition-all ease-in'/>, link: "https://github.com/fernandocruzcavina" },
    { id: "2", name: "WhatsApp", icon: <SiWhatsapp className='size-6 group-hover:text-green-400 group-hover:-translate-y-2 transition-all ease-in'/>, link: "https://wa.me/5511950672602?text=Oi%2C%20vi%20seu%20Portif%C3%B3lio%20e%20fiquei%20interessado%20no%20seu%20trabalho." },
    { id: "3", name: "Linkedin", icon: <FaLinkedinIn className='size-6 group-hover:text-green-400 group-hover:-translate-y-2 transition-all ease-in'/>, link: "https://www.linkedin.com/in/fernando-cruz-cavina/" },
]

export { contact, contactWithLink }