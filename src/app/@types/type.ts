export interface Technology {
    title: string,
    description?: string
}

export interface Candidate {
    name: string,
    id: string,
    bio?: string,
    skills?: Array<Technology>,
    location?: string,
    email: string,
}

export interface Question {
    question: string,
    id: string
}

// program = Job or Interships or community work!
export interface Program {
    title: string,
    description: string,
    date?: Date,
    location?: string,
    technology?: Array<Technology>,
    minExperience?: number,
    type?: 'job' | 'internship' | 'community work'
}