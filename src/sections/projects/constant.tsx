import { SiFastapi, SiPython, SiReact, SiSpringboot, SiTypescript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiJavaLine } from "react-icons/ri";

import LuxAIPhoto from "../../assets/luxai/Dashboard.png"
import LuxAIPhoto1 from "../../assets/luxai/PlanejamentoCategoria.png"
import LuxAIPhoto2 from "../../assets/luxai/Login.png"
import LuxAIPhoto3 from "../../assets/luxai/Investimento.png"
import LuxAIPhoto4 from "../../assets/luxai/Arquivos.png"

import BankUpPhoto from "../../assets/bankup/bankup.jpeg"
import BankUpPhoto1 from "../../assets/bankup/bankup1.jpeg"
import BankUpPhoto2 from "../../assets/bankup/bankup2.jpeg"
import BankUpPhoto3 from "../../assets/bankup/bankup3.jpeg"
import BankUpPhoto4 from "../../assets/bankup/bankup4.jpeg"

import PokemonPhoto from "../../assets/pokemon/pokemon-simulator.png"
import PokemonPhoto1 from "../../assets/pokemon/pokemon-simulator1.png"
import PokemonPhoto2 from "../../assets/pokemon/pokemon-simulator2.png"
import { type Project } from "./types";


const STACK = {
  react: {
    name: "React",
    icon: <SiReact />,
  },
  typescript: {
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  fastapi: {
    name: "FastAPI",
    icon: <SiFastapi />,
  },
  python: {
    name: "Python",
    icon: <SiPython/>,
  },
  postgresql: {
    name: "PostgreSQL",
    icon: <BiLogoPostgresql />,
  },
  springboot: {
    name: "Spring Boot",
    icon: <SiSpringboot />,
  },
  java: {
    name: "Java",
    icon: <RiJavaLine/>,
  },
} as const;

export const projects: Project[] = [
  {
    id: 1,
    name: "LuxAI",
    category: "Financeiro",
    platform: "Website",
    description: "O contexto desse problema advém de otimizações de processos com IA. Visto que aplicações com intuito de organizar a vida financeira contém etapas e muitas vezes decisões passam despercebidas no momento da contabilidade, a IA encaixaria para tomada decisões e organização facilitadas da vida do usuário. O sistema analisa padrões de gastos e sugere cortes inteligentes baseados no perfil comportamental.",
    role: "Responsável pela UI/UX e testes do produto final.",
    images: [ LuxAIPhoto, LuxAIPhoto1, LuxAIPhoto2, LuxAIPhoto3, LuxAIPhoto4 ],
    stacks: [ STACK.react, STACK.typescript, STACK.fastapi, STACK.python, STACK.postgresql ],
    links: { 
      github: "https://github.com/SamCarv/LuxAI/tree/main",
    }
  },
  {
    id: 2,
    name: "BankUp",
    category: "Financeiro",
    platform: "Website",
    description: "Uma aplicação bancária com intuito de mitigar golpes Pix por meio da engenharia social. Dado a situação em que os golpistas utilizam de técnicas como falsificação de identidade no WhatsApp os quais alegam ser parentes das vítimas, elaborou-se um feedback de aviso no momento da primeira transação para uma nova conta. Desse modo, poderia evitar uma boa parte de casos apenas com este aviso simples e prático",
    role: "Responsável pela UI/UX, testes unitários, serviço de email, usuário e pagamento",
    images: [ BankUpPhoto, BankUpPhoto1, BankUpPhoto2, BankUpPhoto3, BankUpPhoto4 ],
    stacks: [ STACK.react, STACK.typescript, STACK.springboot, STACK.java, STACK.postgresql ],
    links: { 
      github: "https://github.com/FernandoCruzCavina/Bank-PixScam", 
    }
  },
  {
    id: 3,
    name: "Pokémon Simulator",
    category: "Jogo",
    platform: "Aplicativo",
    description: "Este é um Simulador desenvolvido para consolidar fundamentos de POO, Herança e Polimorfismo. Utilizando o universo Pokémon como base lúdica, o projeto foca no tratamento de dados e lógica de sistemas. O diferencial reside em uma mecânica de batalha customizada, que foge do modelo tradicional e desafia a previsibilidade do jogador. Esteja preparado!",
    role: "Responsável pela UI/UX e pela lógica de batalha Pokémon",
    images: [ PokemonPhoto, PokemonPhoto1, PokemonPhoto2],
    stacks: [ STACK.java ],
    links: { 
      github: "https://github.com/FernandoCruzCavina/Pokemon_Battle", 
    }
  },
]