import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useRef, useState } from "react";
import { SiGithub } from "react-icons/si";

const ProjectCard = ({ project, index }) => {
    const [isTextExpanded, setIsTextExpanded] = useState(false);
    const carouselRef = useRef(null);

    const scroll = (direction) => {
        if (carouselRef.current) {
            const { scrollLeft, clientWidth } = carouselRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            carouselRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <li>
            <article className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
                <div className='flex flex-col min-w-0 gap-6 order-2 lg:order-1'>
                    <div className='flex justify-between items-start gap-2'>
                        <div className="min-w-0">
                            <span className="text-green-400 font-mono text-xs sm:text-sm mb-1 block">// Projeto 0{index + 1}</span>
                            <h3 className='text-2xl sm:text-3xl font-bold truncate'>{project.title}</h3>
                        </div>
                        <div className='shrink-0 bg-green-400/10 border border-green-400/20 rounded-lg px-2 py-1 text-right'>
                            <span className='text-[10px] uppercase tracking-widest text-gray-400 block'>Contexto</span>
                            <span className='text-xs sm:text-sm font-medium text-green-400'>{project.context}</span>
                        </div>
                    </div>

                    <div className='space-y-4 text-gray-300 leading-relaxed text-base sm:text-lg'>
                        <div className={`relative ${!isTextExpanded ? 'line-clamp-3' : ''} transition-all duration-300`}>
                            <p>{project.description}</p>
                        </div>
                    
                        <button 
                            onClick={() => setIsTextExpanded(!isTextExpanded)}
                            className="text-green-400 text-sm font-bold hover:underline underline-offset-4 cursor-pointer"
                        >
                            {isTextExpanded ? "Ler menos" : "Ler mais..."}
                        </button>

                        <p className='text-sm sm:text-base text-gray-400 italic border-l-2 border-green-400 pl-4 mt-4'>
                            {project.role}
                        </p>
                    </div>
                    <div className='flex flex-wrap items-center gap-4 sm:gap-6 pt-4 border-t border-white/5'>
                        <div className='flex flex-col'>
                            <span className='text-[10px] uppercase text-gray-500'>Plataforma</span>
                            <span className='text-sm sm:text-base font-medium'>{project.platform}</span>
                        </div>
                        <div className='hidden sm:block h-8 w-px bg-white/10' />
                        <div className='flex flex-wrap gap-4 sm:gap-5 items-center text-xl sm:text-2xl text-gray-400'>
                            {project.tech.map((icon, i) => <span key={i}>{icon}</span>)}
                            <div className='h-6 w-px bg-white/10 mx-1' />
                            <a href={project.links.github} className="hover:text-green-400 transition-colors" target="_blank" rel="noopener noreferrer"><SiGithub size={20}/></a>
                            <a href={project.links.external} className="hover:text-green-400 transition-colors" target="_blank" rel="noopener noreferrer"><ExternalLink size={20}/></a>
                        </div>
                    </div>
                </div>
                <div className='relative group order-1 lg:order-2 w-full'>
                    <ul 
                        ref={carouselRef}
                        className='flex overflow-x-hidden snap-x snap-mandatory rounded-xl border border-white/10 shadow-2xl bg-[#0a0a0a]'
                    >
                        {project.images.map((img, i) => (
                            <li key={i} className="min-w-full snap-center aspect-video">
                                <img src={img} alt={`Preview de ${project.title} ${i + 1}`} className='w-full h-full object-cover' />
                            </li>
                        ))}
                    </ul>
                    <div className="absolute inset-y-0 -left-2 sm:-left-4 hidden sm:flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => scroll('left')} className="bg-green-400 p-2 rounded-full shadow-lg text-black hover:bg-green-300 cursor-pointer">
                            <ChevronLeft size={20} />
                        </button>
                    </div>
                    <div className="absolute inset-y-0 -right-2 sm:-right-4 hidden sm:flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => scroll('right')} className="bg-green-400 p-2 rounded-full shadow-lg text-black hover:bg-green-300 cursor-pointer">
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </article>
        </li>
    )
}

export { ProjectCard }