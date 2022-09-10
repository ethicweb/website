import { Project } from "./project.model";

export interface ExpPro {
    company: string,
    job: string,
    startingDate: string,
    endDate?: string,
    projects: Project[]
}