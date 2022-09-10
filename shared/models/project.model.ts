export interface Project {
    
    client: string,
    roles: string[],
    description: string,
    duration: string,
    tasks: Task[],
    logo: string,
    technologies: Technology[]

}

type Task = {
    action: string,
    details: string[]
}

type Technology = {
    name: string,
    logo: string
}