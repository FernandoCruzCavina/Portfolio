import { useState } from "react";
import type { Project } from "../types";
import { X } from "lucide-react";
import ReactDom from 'react-dom'

interface ProjectModalProps {
    selectedProject: Project,
    setSelectedProject: React.Dispatch<React.SetStateAction<Project>>
}

const ProjectsModal = ({selectedProject, setSelectedProject}: ProjectModalProps) => {
    const [imageIndex, setImageIndex] = useState(0);

    return ReactDom.createPortal(
    <div className="fixed inset-0 bg-[#0d0d0d] z-50 overflow-y-auto p-4">
        <div className="max-w-4xl mx-auto">
            
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">
                    {selectedProject.name}
                </h2>

                <button
                    onClick={() => {
                    setSelectedProject(null);
                    setImageIndex(0);
                    }}
                    className="group cursor-pointer"
                >
                    <X className='text-gray-400 group-hover:text-teal-400 group-hover:rotate-90 transition ease-in'/>
                </button>
                </div>

                <img
                src={selectedProject.images[imageIndex]}
                className="w-full h-64 sm:h-80 object-cover rounded-xl mb-4"
                alt={`Foto demonstrativa N°${imageIndex} do projeto ${selectedProject.name}`}
                />

                <div className="flex gap-2 overflow-x-auto mb-6">
                {selectedProject.images.map((img, i) => (
                    <img
                    key={i}
                    src={img}
                    onClick={() => setImageIndex(i)}
                    className={`h-16 w-24 object-cover rounded cursor-pointer border text-[12px] ${
                        i === imageIndex
                        ? "border-teal-400"
                        : "border-transparent"
                    }`}
                    alt={`Demonstração N°${i+1}`}
                    />
                ))}
                </div>

                <p className="text-gray-300 mb-4">
                    {selectedProject.longDescription}
                </p>

                <p className="text-sm text-gray-400 mb-4">
                    Tipo: {selectedProject.type}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.stack.map((tech) => (
                        <span
                        key={tech}
                        className="text-xs bg-teal-500/20 text-teal-400 px-3 py-1 rounded-full"
                        >
                        {tech}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4">
                    {selectedProject.repo && (
                        <a
                        href={selectedProject.repo}
                        target="_blank"
                        className="px-4 py-2 bg-white/10 rounded-lg"
                        >
                        GitHub
                        </a>
                    )}

                    {selectedProject.live && (
                        <a
                        href={selectedProject.live}
                        target="_blank"
                        className="px-4 py-2 bg-teal-500 text-black rounded-lg"
                        >
                        Ver Projeto
                        </a>
                    )}
                </div>
            </div>
        </div>,
        document.getElementById("modal")!
    )
}

export default ProjectsModal