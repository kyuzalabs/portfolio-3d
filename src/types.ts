export interface Social {
  id: string
  label: string
  url: string
}

export interface Experience {
  id: string
  role: string
  org: string
  period: string
  description: string
  tech: string[]
  type: 'work' | 'education' | 'certification'
}

export type ProjectCategory = 'web' | 'mobile' | 'fullstack' | 'other'

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  features: string[]
  role: string
  tags: string[]
  category: ProjectCategory
  image?: string
  emoji: string
  demoUrl: string
  repoUrl: string
}

export interface Profile {
  name: string
  role: string
  roles: string[]
  bio: string
  photo: string
  cvUrl: string
  location: string
}