import {
  SiReact,
  SiTypescript,
  SiPython,
  SiDocker,
  SiNodedotjs,
  SiSpringboot,
  SiGo,
  SiFastapi,
  SiApachecassandra,
  SiRedis,
  SiTailwindcss,
  SiGithubactions,
  SiSonarqubecloud,
  SiGnubash,
  SiFigma,
} from "react-icons/si";

import GrokkingAlgorithms from "../../assets/books/grokking-algorithms.jpg"
import CleanCode from "../../assets/books/clean-code.jpg"
import DDA from '../../assets/books/DDA.jpg'
import ComputerNetworks from "../../assets/books/computer-networks.jpg"
import PragmaticProgrammer from "../../assets/books/the-pragmatic-programmer.jpg"
import LuxAiLogo from "../../assets/luxai/logo.svg"
import LuxAIPhoto from "../../assets/luxai/screenshot.png"
import LuxAIPhoto1 from "../../assets/luxai/screenshot1.png"

import { CATEGORIES, type Book, type Project, type SkillWithProjects } from "./types";
import { RiJavaLine } from "react-icons/ri";
import { TbBrandMysql } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiSqllite } from "react-icons/di";
import { PiNetwork, PiShareNetworkBold } from "react-icons/pi";
import { LuComputer } from "react-icons/lu";
import { GrTest } from "react-icons/gr";

const LuxAI: Project = {
  id: "1",
  name: "LuxAI",
  logo: LuxAiLogo,
  category: CATEGORIES.MARKETING,
  description: "Dashboard financeiro",
  longDescription:
    "Sistema completo com gráficos, autenticação e controle financeiro.",
  stack: [ "React", "TypeScript", "Tailwind", "Vite", "Python", "FastApi", "PostgreSQL" ],
  type: "Website",
  images: [LuxAIPhoto, LuxAIPhoto1],
  repo: "https://github.com/SamCarv/LuxAI/tree/main",
  live: "#",
}
const BankUp: Project = {  
  id: "2",
  name: "BankUp",
  category: CATEGORIES.FINANCEIRO,
  description: "Práticas de antigolpe de engenharia social",
  longDescription: "",
  stack: [ "React", "Typescript", "Tailwind", "Vite", "Java", "SpringBoot", "PostgreSQL", "RabbitMQ", "Docker" ],
  type: "Website",
  images: ["", ""],
  repo: "https://github.com/FernandoCruzCavina/Bank-PixScam",
  live: "#"
}

const BattleShip: Project = {
  id: "3",
  name: "Batalha Naval",
  category: CATEGORIES.JOGO,
  description: "Aprendizado lúdico de matriz e equação 2° grau",
  longDescription: "",
  stack: [ "Python", "Pygame" ],
  type: "Aplicativo",
  images: ["", ""],
  repo: "https://github.com/FernandoCruzCavina/Battleship",
}

const Portfolio: Project = {
  id: "4",
  name: "Portfólio",
  category: CATEGORIES.MARKETING,
  description: "Contar sobre mim e o que eu faço de melhor",
  longDescription: "Site pessoal desenvolvido para apresentar projetos, habilidades e experiências profissionais. O objetivo é comunicar de forma clara e moderna as competências técnicas, com foco em usabilidade, design responsivo e performance.",
  stack: [ "React", "Typescript", "Tailwind", "Vite" ],
  type: "Website",
  images: ["", ""],
  repo: "https://github.com/FernandoCruzCavina/Portfolio"
}

const FlyNgo: Project = {
  id: "5",
  name: "FlyNgo",
  category: CATEGORIES.SOCIAL,
  description: "Um site para marcar encontro de viagens e atividades delas",
  longDescription: "Plataforma social voltada para conectar pessoas interessadas em viagens e atividades em grupo. Permite organizar encontros, compartilhar experiências e descobrir novas oportunidades de lazer de forma colaborativa.",
  stack: [ "React", "Typescript", "Tailwind", "Vite", "SqlLite", "Prisma" ],
  type: "Website",
  images: ["", ""],
  repo: "https://github.com/FernandoCruzCavina/FlyNgo"
}

const PokemonSimulator: Project = {
  id: "6",
  name: "Pokemon Battle Simulator",
  category: CATEGORIES.JOGO,
  description: "Um simulador de batalha pokemon no estilo gameboy",
  longDescription: "",
  stack: [ "Java", "Java Swing" ],
  type: "Aplicativo",
  images: ["", ""],
  repo: "https://github.com/FernandoCruzCavina/Pokemon_Battle"
}

const ShortUrl: Project = {
  id: "7",
  name: "ShortUrl",
  category: CATEGORIES.FERRAMENTA,
  description: "Clássico ShortUrl",
  longDescription: "Ferramenta para encurtamento de URLs que transforma links longos em versões mais curtas e compartilháveis. O sistema foca em simplicidade, rapidez e praticidade, sendo ideal para melhorar a distribuição de links na web.",
  stack: [ "React", "TypeScript", "Tailwind", "Vite", "Go", "Docker", "Cassandra" ],
  type: "Website",
  images: ["", ""],
  repo: "https://github.com/FernandoCruzCavina/ShortURL"
}

const LeetcodeChallenge: Project= {
  id: "8",
  name: "Leetcode Challenge",
  category: CATEGORIES.ESTUDO,
  description: "Realização de execício de algoritmos com Java",
  longDescription: "Repositório dedicado à resolução de desafios de algoritmos e estruturas de dados, com foco em desenvolvimento lógico e preparação para entrevistas técnicas. Inclui soluções em Java e organização progressiva por nível de dificuldade.",
  stack: [ "Java", ],
  type: "Website",
  images: ["", ""],
  repo: "https://github.com/FernandoCruzCavina/leetcode-challenges"
}


const categories:  { title: string; skills: SkillWithProjects[] }[]= [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <SiReact />, projects: [ LuxAI, BankUp, ShortUrl, Portfolio, FlyNgo, ], },
      { name: "TypeScript", icon: <SiTypescript />, projects: [ LuxAI, BankUp, ShortUrl, Portfolio, FlyNgo, ], },
      { name: "Tailwind", icon: <SiTailwindcss/>, projects: [ LuxAI, BankUp, ShortUrl, Portfolio, FlyNgo, ], },
      { name: "Java", icon: <RiJavaLine/>, projects: [ PokemonSimulator, ], },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Java", icon: <RiJavaLine/>, projects: [ PokemonSimulator, LeetcodeChallenge, BankUp, ], },
      { name: "Spring", icon: <SiSpringboot/>, projects: [ BankUp, ], },
      { name: "Node.js", icon: <SiNodedotjs />, projects: [ FlyNgo, ], },
      { name: "Python", icon: <SiPython />, projects: [ LuxAI, BattleShip, ],},
      { name: "FastApi", icon: <SiFastapi/>, projects: [ LuxAI ],},
      { name: "Golang", icon: <SiGo/>, projects: [ ShortUrl ], },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "Docker", icon: <SiDocker />, projects: [ LuxAI, BankUp, ShortUrl, ], },
      { name: "Github Actions", icon: <SiGithubactions/>, projects: [ BankUp, ShortUrl, ], },
      { name: "Sonarqube", icon: <SiSonarqubecloud/>, projects: [ BankUp, ], },
      { name: "Bash", icon: <SiGnubash/>, projects: [  ], },
      { name: "Redes", icon: <PiNetwork/>, projects: [  ], },
    ],
  },
  {
    title: "Banco de Dados",
    skills: [
      { name: "Postgres", icon: <BiLogoPostgresql/>, projects: [ LuxAI, BankUp, ], },
      { name: "MySQL", icon: <TbBrandMysql/>, projects: [  ], },
      { name: "SqlLite", icon: <DiSqllite/>, projects: [ FlyNgo, BankUp, ], },
      { name: "Redis", icon: <SiRedis/>, projects: [ BankUp, ShortUrl ], },
      { name: "Cassandra", icon: <SiApachecassandra/>, projects: [ ShortUrl ], },
    ],
  },
  {
    title: "Práticas",
    skills: [
      { name: "Micro Serviços", icon: <PiShareNetworkBold/>, projects: [ BankUp, ShortUrl], },
      { name: "Monolito", icon: <LuComputer/>, projects: [ LuxAI, PokemonSimulator, FlyNgo,  ], },
      { name: "Testes Unitários", icon: <GrTest/>, projects: [ LuxAI, BankUp, ShortUrl, ], },
      { name: "Design", icon: <SiFigma/>, projects: [ LuxAI, ShortUrl, ], },
    ],
  },
];

const books: Book[] = [
  {
    title: "Grokking Algorithms",
    image: GrokkingAlgorithms,
    readAt: "2024",
    link: "https://www.manning.com/books/grokking-algorithms",
    description:
      "Introdução visual e intuitiva a algoritmos, cobrindo busca, ordenação, grafos e programação dinâmica com exemplos simples e didáticos.",
  },
  {
    title: "Clean Code",
    image: CleanCode,
    readAt: "2024",
    link: "https://www.amazon.com/dp/0132350882",
    description:
      "Clássico sobre boas práticas de desenvolvimento, focado em escrever código legível, sustentável e de fácil manutenção ao longo do tempo.",
  },
  {
    title: "Designing Data-Intensive Applications",
    image: DDA,
    readAt: "2025",
    link: "https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/",
    description:
      "Guia avançado sobre sistemas distribuídos, abordando bancos de dados, escalabilidade, consistência, replicação e arquitetura de dados em larga escala.",
  },
  {
    title: "Computer Networks",
    image: ComputerNetworks,
    readAt: "2025",
    link: "https://gaia.cs.umass.edu/kurose_ross/index.php",
    description:
      "Fundamentos de redes de computadores, incluindo protocolos, arquitetura de rede, TCP/IP, roteamento e comunicação entre sistemas.",
  },
  {
    title: "The Pragmatic Programmer",
    image: PragmaticProgrammer,
    readAt: "2026",
    link: "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/",
    description:
      "Um dos livros mais influentes para desenvolvedores, com lições práticas sobre carreira, boas práticas, mentalidade e construção de software de qualidade.",
  },
]

export { categories, books }