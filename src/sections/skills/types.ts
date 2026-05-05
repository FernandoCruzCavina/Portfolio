export const CATEGORIES = {
  FINANCEIRO: "Financeiro",
  JOGO: "Jogo",
  FERRAMENTA: "Ferramenta",
  SOCIAL: "Social",
  ESTUDO: "Estudo",
  MARKETING: "Marketing",
  ARTIGO: "Artigo",
} as const;

type Project = {
  id: string;
  name: string;
  logo?: string;
  category: Category;
  description: string;
  longDescription: string;
  stack: string[];
  platform: "Website" | "Aplicativo" | "Artigo";
  images: string[];
  repo?: string;
  live?: string;
};

type SkillWithProjects = Skill & {
  projects?: Project[];
};

type Skill = {
  name: string;
  icon: React.ReactNode;
};

type Book = {
  title: string;
  image: string;
  readAt: string;
  link: string;
  description: string;
};

export type { Project, SkillWithProjects, Skill, Book }
export type Category = (typeof CATEGORIES)[keyof typeof CATEGORIES];