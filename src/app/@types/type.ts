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