import React from 'react'
import { useState } from 'react'
import { useThemeContext } from '../../context/ThemeContext'
import { v4 as uuidv4 } from 'uuid';
import './Search.css'

export const Search = () => {
    const { contextTheme, list, setList } = useThemeContext()

    const [text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleAddNotes = () => {
        if (text.length > 3) {
            // Seleccione la categoría "📒 Por hacer"
            const porHacerIndex = list.findIndex(cat => cat.title === '📒 Por hacer');
            const porHacer = list[porHacerIndex];
            // Cree un nuevo objeto que represente la tarea que desea agregar
            const nuevaTarea = {
                id: uuidv4(),
                done: false,
                description: text
            };

            // Agregue la nueva tarea al arreglo "task" de la categoría seleccionada
            porHacer.task.push(nuevaTarea);

            // actualizar el estado de la lista
            const newList = [...list];
            newList[porHacerIndex] = porHacer;
            setList(newList);
            setText('')

        } 


    }
    return (
        <div className="boxSearch">
            <input onChange={handleChange} placeholder="Ingrese su tarea" value={text} className="input-style" type="text" />
            <button onClick={handleAddNotes}>Añadir Nota</button>
        </div>


    )
}
