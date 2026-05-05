import type { Category } from "../skills/types";

type Stack = {
  name: string;
  icon: React.ReactNode;
}

type Project = {
  id: number;
  name: string;
  logo?: string;
  category: Category;
  description: string;
  role: string;
  stacks: Stack[];
  platform: "Website" | "Aplicativo" | "Artigo";
  images: string[];
  links: {
    github?: string,
    external?: string
  }
}

export type { Project }