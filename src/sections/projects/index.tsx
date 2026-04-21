import { projects } from './constant'
import { ProjectCard } from './project-card'

const Projects = () => {
  return (
    <section id='projects' className='flex flex-col py-20 sm:py-32 gap-16 max-w-7xl mx-auto px-4'>
        <header className="border-b border-white/10 pb-4">
            <h2 className="text-4xl font-bold tracking-tight">Projetos Acadêmicos</h2>
        </header>

        <ul className='flex flex-col gap-32'>
            {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
            ))}
        </ul>
    </section>
  )
}

export default Projects