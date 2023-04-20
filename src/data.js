import { v4 as uuidv4 } from 'uuid';


const data = [
    {
        id: uuidv4(),
        title: '📒 Por hacer',
        task: [
            {
                id: uuidv4(),
                done: false,
                description: "Curso de React"
            },
            {
                id: uuidv4(),
                done: false,
                description: "Curso de JavaScript"
            }
        ]
    },
    {
        id: uuidv4(),
        title: '✏️ En progreso',
        task: [
            {
                id: uuidv4(),
                done: false,
                description: "Curso de Css"
            },
            {
                id: uuidv4(),
                done: false,
                description: "Curso de HTML"
            }
        ]
    },
    {
        id: uuidv4(),
        title: '✅ Completado',
        task: [
            {
                id: uuidv4(),
                done: true,
                description: "Curso de PHP"
            },
            {
                id: uuidv4(),
                done: true,
                description: "Curso de Laravel"
            }
        ]
    }
]
export default data