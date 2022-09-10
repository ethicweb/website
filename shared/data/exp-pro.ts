import { ExpPro } from "../models/exp-pro.model";

export const expProData: ExpPro = {
    company: "Capgemini",
    job: "Ingénieur Logiciel",
    startingDate: "2021-03-01T00:00:00",
    projects: [
        {
            client: "Société Générale",
            roles: ["Développeur Front-End"],
            description: "Portail Web pour les opérations réseau internes",
            duration: "Depuis août",
            tasks: [{
                action: "Développement Front-End",
                details: ["Blablabla", "Blabla"]
            }],
            logo: "",
            technologies: [
                {
                    logo: "",
                    name: "Angular"
                }
            ]
    
        },
        {
            client: "Indarra",
            roles: ["Ingénieur DevOps", "Chef de Projet"],
            description: "Site Web éditorial",
            duration: "7 mois",
            tasks: [{
                action: "Développement Front-End",
                details: ["Blablabla", "Blabla"]
            }],
            logo: "",
            technologies: [
                {
                    logo: "",
                    name: "Angular"
                }
            ]
    
        },
    ]
}
