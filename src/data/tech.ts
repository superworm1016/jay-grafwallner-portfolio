// Logos from Devicon (MIT): https://devicon.dev
import angular from '../assets/tech/angular.svg'
import azure from '../assets/tech/azure.svg'
import csharp from '../assets/tech/csharp.svg'
import docker from '../assets/tech/docker.svg'
import dotnet from '../assets/tech/dotnet.svg'
import githubactions from '../assets/tech/githubactions.svg'
import java from '../assets/tech/java.svg'
import javascript from '../assets/tech/javascript.svg'
import kubernetes from '../assets/tech/kubernetes.svg'
import nodejs from '../assets/tech/nodejs.svg'
import postgresql from '../assets/tech/postgresql.svg'
import python from '../assets/tech/python.svg'
import react from '../assets/tech/react.svg'
import redis from '../assets/tech/redis.svg'
import spring from '../assets/tech/spring.svg'
import sqlserver from '../assets/tech/sqlserver.svg'
import tailwindcss from '../assets/tech/tailwindcss.svg'
import terraform from '../assets/tech/terraform.svg'
import typescript from '../assets/tech/typescript.svg'

export const techIcons = {
  angular,
  azure,
  csharp,
  docker,
  dotnet,
  githubactions,
  java,
  javascript,
  kubernetes,
  nodejs,
  postgresql,
  python,
  react,
  redis,
  spring,
  sqlserver,
  tailwindcss,
  terraform,
  typescript,
}

export type TechKey = keyof typeof techIcons

export const techNames: Record<TechKey, string> = {
  angular: 'Angular',
  azure: 'Azure',
  csharp: 'C#',
  docker: 'Docker',
  dotnet: '.NET',
  githubactions: 'GitHub Actions',
  java: 'Java',
  javascript: 'JavaScript',
  kubernetes: 'Kubernetes',
  nodejs: 'Node.js',
  postgresql: 'PostgreSQL',
  python: 'Python',
  react: 'React',
  redis: 'Redis',
  spring: 'Spring Boot',
  sqlserver: 'SQL Server',
  tailwindcss: 'Tailwind CSS',
  terraform: 'Terraform',
  typescript: 'TypeScript',
}
