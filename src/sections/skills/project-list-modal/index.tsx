import { X } from 'lucide-react'
import type { Project, SkillWithProjects } from '../types'
import ReactDOM from 'react-dom'

interface ProjectListModalProps {
    selectedSkill: SkillWithProjects,
    setSelectedSkill: React.Dispatch<React.SetStateAction<SkillWithProjects>>,
    setSelectedProject: React.Dispatch<React.SetStateAction<Project>>,
}

const ProjectListModal = ({selectedSkill,setSelectedSkill, setSelectedProject}: ProjectListModalProps) => {
    return ReactDOM.createPortal(
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-30 p-4">
            <div className="bg-[#1a1a1a] rounded-2xl w-full max-w-2xl p-6 relative">
                <h3 className="text-xl font-bold mb-4">
                    Projetos feitos em {selectedSkill.name} 
                </h3>

                <div className="space-y-4 max-h-[60vh] overflow-y-auto">
                    {selectedSkill.projects?.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className="flex gap-3 p-4 rounded-xl bg-black hover:bg-gray-800
                            border-2 border-gray-800 hover:border-teal-400 
                            cursor-pointer group"
                        >
                            {project.logo ?
                                (
                                    <img src={`${project.logo}`} className="w-16 h-16 rounded-3xl text-[10px]" alt={`Logo ${project.name}`}/>
                                ):(
                                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 object-contain" preserveAspectRatio="xMidYMid meet">
                                        <rect x="4" y="4" width="56" height="56" rx="8" fill="#F3F4F6"/>
                                        <circle cx="22" cy="24" r="4" fill="#D1D5DB"/>
                                        <path d="M14 46L26 34L34 42L42 32L50 46H14Z" fill="#D1D5DB"/>
                                    </svg>
                                )
                            }
                            <div>
                                <h4 className="font-semibold group-hover:text-teal-400 transition ease-in-out">{project.name}</h4>
                                <p className="text-sm text-gray-400">{project.category}</p>
                                <p className="text-sm text-gray-300 line-clamp-2">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <button onClick={() => setSelectedSkill(null)} className="absolute top-3 right-3 group cursor-pointer">
                    <X className='text-gray-400 group-hover:text-teal-400 group-hover:rotate-90 transition ease-in'/>
                </button>
            </div>
        </div>,
        document.getElementById("modal")!
    )
}

export default ProjectListModal