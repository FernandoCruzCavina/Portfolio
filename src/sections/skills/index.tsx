import { useState } from "react"
import type { Project, SkillWithProjects, Book} from "./types"
import { categories, books } from "./constants"
import BookModal from "./books-modal"
import ProjectsModal from "./projects-modal"
import ProjectListModal from "./project-list-modal"


export default function SkillsSection() {
    const [selectedBook, setSelectedBook] = useState<Book | null>(null)
    const [selectedSkill, setSelectedSkill] = useState<SkillWithProjects | null>(null)
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)

    return (
        <section id="skills" className="py-20 sm:py-24 scroll-mt-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-10">
              Skills
            </h2>
            <p className="text-gray-300 mb-3">
              Clique em alguma skill para ver projetos feitos por mim
            </p>

            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <li key={category.title} className="bg-[#1a1a1a] p-5 rounded-2xl">
                  <h3 className="text-lg font-semibold mb-4">
                    {category.title}
                  </h3>

                  <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 ">
                    {category.skills.map((skill) => (
                      <li key={skill.name}>
                        <button
                          onClick={() => skill.projects && setSelectedSkill(skill)}
                          className={`flex flex-col items-center justify-center w-full h-full 
                          p-3 rounded-xl bg-[#111] hover:bg-[#151515] border-2 border-gray-800 hover:border-green-400 transition group
                          ${skill.projects?
                            "cursor-pointer hover:-translate-y-2":
                            "cursor-default"
                          }`}
                        >
                          <div className="text-2xl text-green-400 group-hover:text-green-500 mb-1 transition">
                            {skill.icon}
                          </div>
                          <span className="text-xs text-gray-300 group-hover:text-green-400 text-center transition">
                            {skill.name}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}

              <li className="bg-[#1a1a1a] overflow-hidden p-5 rounded-2xl border border-white/5 col-span-1 sm:col-span-2 lg:col-span-3">
                <h3 className="text-lg font-semibold mb-4">Leituras</h3>

                <ul className="flex overflow-hidden overflow-x-auto sm:flex-none sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {books.map((book) => (
                    <li>
                      <button
                        key={book.title}
                        onClick={() => setSelectedBook(book)}
                        className="w-36 cursor-pointer group"
                      >
                        <div className="relative">
                          <img
                            src={book.image}
                            alt={book.title}
                            loading="lazy"
                            className="w-36 h-48 object-cover rounded-lg"
                          />

                          <div className="absolute inset-0 bg-green-400/40 opacity-100
                            group-hover:opacity-0 transition duration-300 rounded-lg"
                          />
                        </div>

                        <p className="text-xs mt-2 text-center text-gray-300 group-hover:text-white">
                          {book.title}
                        </p>
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
          {selectedBook && (
              <BookModal selectedBook={selectedBook} setSelectedBook={setSelectedBook} />
          )}
          {selectedSkill && !selectedProject && (
              <ProjectListModal selectedSkill={selectedSkill} setSelectedSkill={setSelectedSkill} setSelectedProject={setSelectedProject}/>
          )}
          {selectedProject && (
              <ProjectsModal selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
          )}
        </section>
    )
}