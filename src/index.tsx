import type { JSX } from "react";

export type Project = {
    title: string;
    description: string;
    tags: string[];
    link?: string;
    github?: string;
  };
  
  export type Skill = {
    name: string;
    icon: JSX.Element;
    level: number;
    category: "Frontend" | "Backend" | "Testing" | "DevOps";
  };
  