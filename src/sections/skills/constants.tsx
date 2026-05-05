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

import { RiJavaLine } from "react-icons/ri";
import { TbBrandMysql } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiSqllite } from "react-icons/di";
import { PiNetwork, PiShareNetworkBold } from "react-icons/pi";
import { LuComputer } from "react-icons/lu";
import { GrTest } from "react-icons/gr";
import { MdArticle } from "react-icons/md";

import GrokkingAlgorithms from "../../assets/books/grokking-algorithms.jpg"
import CleanCode from "../../assets/books/clean-code.jpg"
import DDA from '../../assets/books/DDA.jpg'
import ComputerNetworks from "../../assets/books/computer-networks.jpg"
import PragmaticProgrammer from "../../assets/books/the-pragmatic-programmer.jpg"

import LuxAiLogo from "../../assets/luxai/logo.svg"
import LuxAIPhoto from "../../assets/luxai/Dashboard.png"
import LuxAIPhoto1 from "../../assets/luxai/PlanejamentoCategoria.png"
import LuxAIPhoto2 from "../../assets/luxai/Login.png"
import LuxAIPhoto3 from "../../assets/luxai/Investimento.png"
import LuxAIPhoto4 from "../../assets/luxai/Arquivos.png"

import BankUpLogo from "../../assets/bankup/logo.svg"
import BankUpPhoto from "../../assets/bankup/bankup.jpeg"
import BankUpPhoto1 from "../../assets/bankup/bankup1.jpeg"
import BankUpPhoto2 from "../../assets/bankup/bankup2.jpeg"
import BankUpPhoto3 from "../../assets/bankup/bankup3.jpeg"
import BankUpPhoto4 from "../../assets/bankup/bankup4.jpeg"

import PortfolioLogo from "../../assets/portfolio/logo.svg"
import PortfolioPhoto from "../../assets/portfolio/Inicio.png"
import PortfolioPhoto1 from "../../assets/portfolio/aboutMe.png"
import PortfolioPhoto2 from "../../assets/portfolio/Skills.png"
import PortfolioPhoto3 from "../../assets/portfolio/Contact.png"

import PokemonLogo from "../../assets/pokemon/pokeball-logo.svg"
import PokemonPhoto from "../../assets/pokemon/pokemon-simulator.png"
import PokemonPhoto1 from "../../assets/pokemon/pokemon-simulator1.png"
import PokemonPhoto2 from "../../assets/pokemon/pokemon-simulator2.png"

import BattleShipLogo from "../../assets/battleship/logo.svg"
import BattleShipPhoto from "../../assets/battleship/b1.png"
import BattleShipPhoto1 from "../../assets/battleship/battleship1.png"

import FlyNgoPhoto from "../../assets/flyngo/flyngo.png"
import FlyNgoPhoto1 from "../../assets/flyngo/flyngo1.png"

import ShorturlPhoto from "../../assets/shorturl/shorturl.png"
import ShorturlPhoto1 from "../../assets/shorturl/shorturl1.png"

import LeetcodePhoto from "../../assets/leetcode/leetcode.png"
import LeetcodePhoto1 from "../../assets/leetcode/leetcode1.png"

import CybersecurityPhoto from "../../assets/cybersecurity/cybersecurity.png"
import CybersecurityPhoto1 from "../../assets/cybersecurity/cybersecurity1.png"

import CpuPhoto from "../../assets/cpu/cpu.png"
import CpuPhoto1 from "../../assets/cpu/cpu1.png"

import ScrumXpPhoto from "../../assets/scrumxp/scrumxp.png"
import ScrumXpPhoto1 from "../../assets/scrumxp/scrumxp1.png"

import WordLogo from "../../assets/utils/word.svg"

import { CATEGORIES, type Book, type Project, type SkillWithProjects } from "./types";


const LuxAI: Project = {
  id: "1",
  name: "LuxAI",
  logo: LuxAiLogo,
  category: CATEGORIES.FINANCEIRO,
  description: "Otimização de processos com IA em cenário de organização financeira",
  longDescription: "Visto que aplicações com intuito de organizar a vida financeira contém etapas e muitas vezes decisões passam despercebidas no momento da contabilidade, a IA encaixaria para tomada decisões e organização facilitadas da vida do usuário. O sistema analisa padrões de gastos e sugere cortes inteligentes baseados no perfil comportamental.",
  stack: [ "React", "TypeScript", "Tailwind", "Vite", "Python", "FastApi", "PostgreSQL" ],
  platform: "Website",
  images: [LuxAIPhoto, LuxAIPhoto1, LuxAIPhoto2, LuxAIPhoto3, LuxAIPhoto4],
  repo: "https://github.com/SamCarv/LuxAI/tree/main",
}
const BankUp: Project = {  
  id: "2",
  name: "BankUp",
  logo: BankUpLogo,
  category: CATEGORIES.FINANCEIRO,
  description: "Práticas de antigolpe de engenharia social em transações Pix",
  longDescription: "Uma aplicação bancária com intuito de mitigar golpes Pix por meio da engenharia social. Dado a situação em que os golpistas utilizam de técnicas como falsificação de identidade no WhatsApp os quais alegam ser parentes das vítimas, elaborou-se um feedback de aviso no momento da primeira transação para uma nova conta.",
  stack: [ "React", "Typescript", "Tailwind", "Vite", "Java", "SpringBoot", "PostgreSQL", "RabbitMQ", "Docker" ],
  platform: "Website",
  images: [ BankUpPhoto, BankUpPhoto1, BankUpPhoto2, BankUpPhoto3, BankUpPhoto4, ],
  repo: "https://github.com/FernandoCruzCavina/Bank-PixScam",
}

const BattleShip: Project = {
  id: "3",
  name: "Batalha Naval",
  logo: BattleShipLogo,
  category: CATEGORIES.JOGO,
  description: "Aprendizado lúdico de matriz e equação 2° grau",
  longDescription: "Jogo de batalha naval desenvolvido para explorar conceitos matemáticos de equação do segundo grau e matrizes. Com objetivo de introduzir esses conceitos para o usuário",
  stack: [ "Python", "Pygame" ],
  platform: "Aplicativo",
  images: [ BattleShipPhoto, BattleShipPhoto1, ],
  repo: "https://github.com/FernandoCruzCavina/Battleship",
}

const Portfolio: Project = {
  id: "4",
  name: "Portfólio",
  logo: PortfolioLogo,
  category: CATEGORIES.MARKETING,
  description: "Contar sobre mim e o que eu faço de melhor",
  longDescription: "Site pessoal desenvolvido para apresentar projetos, habilidades e experiências profissionais. O objetivo é comunicar de forma clara e moderna as competências técnicas, com foco em usabilidade, design responsivo e performance.",
  stack: [ "React", "Typescript", "Tailwind", "Vite" ],
  platform: "Website",
  images: [PortfolioPhoto, PortfolioPhoto1, PortfolioPhoto2, PortfolioPhoto3],
  repo: "https://github.com/FernandoCruzCavina/Portfolio",
  live: "https://fernandocruz.tech"
}

const FlyNgo: Project = {
  id: "5",
  name: "FlyNgo",
  category: CATEGORIES.SOCIAL,
  description: "Um site para marcar encontro de viagens e atividades delas",
  longDescription: "Plataforma social voltada para conectar pessoas interessadas em viagens e atividades em grupo. Permite organizar encontros, compartilhar experiências e descobrir novas oportunidades de lazer de forma colaborativa.",
  stack: [ "React", "Typescript", "Tailwind", "Vite", "SqlLite", "Prisma" ],
  platform: "Website",
  images: [ FlyNgoPhoto, FlyNgoPhoto1 ],
  repo: "https://github.com/FernandoCruzCavina/FlyNgo"
}

const PokemonSimulator: Project = {
  id: "6",
  name: "Pokémon Battle Simulator",
  logo: PokemonLogo,
  category: CATEGORIES.JOGO,
  description: "Um simulador de batalha pokémon no estilo gameboy",
  longDescription: "Este é um Simulador desenvolvido para consolidar fundamentos de POO, Herança e Polimorfismo. Utilizando o universo Pokémon como base lúdica, o seu diferencial reside em uma mecânica de batalha customizada, que foge do modelo tradicional e desafia a previsibilidade do jogador. Esteja preparado!",
  stack: [ "Java", "Java Swing" ],
  platform: "Aplicativo",
  images: [ PokemonPhoto, PokemonPhoto1, PokemonPhoto2 ],
  repo: "https://github.com/FernandoCruzCavina/Pokemon_Battle"
}

const ShortUrl: Project = {
  id: "7",
  name: "ShortUrl",
  category: CATEGORIES.FERRAMENTA,
  description: "Site Shorturl desenvolvido para entender escalamento de computação",
  longDescription: "Ferramenta para encurtamento de URLs que transforma links longos em versões mais curtas e compartilháveis. O sistema foca em simplicidade, rapidez e praticidade, sendo ideal para melhorar a distribuição de links na web.",
  stack: [ "React", "TypeScript", "Tailwind", "Vite", "Go", "Docker", "Cassandra" ],
  platform: "Website",
  images: [ ShorturlPhoto, ShorturlPhoto1 ],
  repo: "https://github.com/FernandoCruzCavina/ShortURL"
}

const LeetcodeChallenge: Project = {
  id: "8",
  name: "Leetcode Challenge",
  category: CATEGORIES.ESTUDO,
  description: "Realização de execício de algoritmos com Java",
  longDescription: "Repositório dedicado à resolução de desafios de algoritmos e estruturas de dados, com foco em desenvolvimento lógico e preparação para entrevistas técnicas. Inclui soluções em Java e organização progressiva por nível de dificuldade.",
  stack: [ "Java", ],
  platform: "Website",
  images: [ LeetcodePhoto, LeetcodePhoto1 ],
  repo: "https://github.com/FernandoCruzCavina/leetcode-challenges"
}

const ScrumXPArticle: Project = {
  id: "9",
  name: "Scrum vs XP",
  logo: WordLogo,
  category: CATEGORIES.ARTIGO,
  description: "Comparação de projetos de sucesso na área da Tecnologia da Informação",
  longDescription: "Este artigo estuda as fases, o funcionamento e as práticas de cada modelo ágil, procurando quando cada um se apresenta como vantagem e quando pode representar uma limitação no desenvolvimento do produto.",
  stack: [ "Modelo Ágil", ],
  platform: "Artigo",
  images: [ ScrumXpPhoto, ScrumXpPhoto1],
  live: "https://drive.google.com/file/d/10I-iM6yombysW2ckbVeZlnimzeTR_kyM/view?usp=sharing"
}

const CpuEvolutionArticle: Project = {
  id: "10",
  name: "Evolução dos processadores RISC e CISC",
  logo: WordLogo,
  category: CATEGORIES.ARTIGO,
  description: "Análise de caraterísticas processadores de cada geração",
  longDescription: "Através de uma análise temática de outros artigos científicos, foi possível observar como novas tecnologias foram surgindo e influenciando a evolução dos processadores.",
  stack: [ "Hardware", ],
  platform: "Artigo",
  images: [ CpuPhoto, CpuPhoto1 ],
  live: "https://drive.google.com/file/d/11D92aWqyf0hfP5Wc4OpisGcfZ1wsKh7g/view?usp=sharing"
}

const CybersecurityArticle: Project = {
  id: "11",
  name: "Cibersegurança e estratégias",
  logo: WordLogo,
  category: CATEGORIES.ARTIGO,
  description: "Conjunto de estratégias para proteção de dados",
  longDescription: "O estudo explora conceitos da cibersegurança, como o perfil de ataques e hackers, os componentes essenciais para a proteção de dados e a abordagem Defense in Depth (DiD).",
  stack: [ "Cibersegurança", ],
  platform: "Artigo",
  images: [ CybersecurityPhoto, CybersecurityPhoto1],
  live: "https://drive.google.com/file/d/1JIGW4QXAIpC37a0BuPguNubdftq_HE6t/view?usp=sharing"
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
      { name: "Redes", icon: <PiNetwork/>, projects: [ CybersecurityArticle, CpuEvolutionArticle, ], },
    ],
  },
  {
    title: "Banco de Dados",
    skills: [
      { name: "Postgres", icon: <BiLogoPostgresql/>, projects: [ LuxAI, BankUp, ], },
      { name: "MySQL", icon: <TbBrandMysql/>, projects: [ ShortUrl, ], },
      { name: "SqlLite", icon: <DiSqllite/>, projects: [ FlyNgo, BankUp, ], },
      { name: "Redis", icon: <SiRedis/>, projects: [ BankUp, ShortUrl, ], },
      { name: "Cassandra", icon: <SiApachecassandra/>, projects: [ ShortUrl, ], },
    ],
  },
  {
    title: "Práticas",
    skills: [
      { name: "Micro Serviços", icon: <PiShareNetworkBold/>, projects: [ BankUp, ShortUrl, ], },
      { name: "Monolito", icon: <LuComputer/>, projects: [ LuxAI, PokemonSimulator, FlyNgo,  ], },
      { name: "Testes Unitários", icon: <GrTest/>, projects: [ LuxAI, BankUp, ShortUrl, ], },
      { name: "Design", icon: <SiFigma/>, projects: [ LuxAI, ShortUrl, ], },
      { name: "Artigo", icon: <MdArticle/>, projects: [ ScrumXPArticle, CpuEvolutionArticle, CybersecurityArticle, ], }
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