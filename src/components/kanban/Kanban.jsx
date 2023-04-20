import React from 'react'
import data from '../../data'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { useState } from 'react'
import { Card } from '../card/Card'
import './Kanban.css'
import { useThemeContext } from '../../context/ThemeContext'
export const Kanban = () => {
    const { contextTheme, list, setList } = useThemeContext()


    const handleDelete = (id, titulo) => {
        // const valores = list.task.filter(item => item.id !== id) 
        const buscar = list.findIndex(item => item.title === titulo)
        const valores = list[buscar]
        const filtrado = valores.task.filter(item => item.id !== id)

        const nueva = [...list]
        nueva[buscar].task = filtrado
        
        setList(nueva)
    }


    const onDragEnd = (result) => {
        if (!result.destination) return;
        const { source, destination } = result;

        if (source.droppableId !== destination.droppableId) {
            const sourceColIndex = list.findIndex((e) => e.id === source.droppableId);
            const destinationColIndex = list.findIndex(
                (e) => e.id === destination.droppableId
            );

            const sourceCol = list[sourceColIndex];
            const destinationCol = list[destinationColIndex];

            const sourceTask = [...sourceCol.task];
            const destinationTask = [...destinationCol.task];

            const [removed] = sourceTask.splice(source.index, 1);
            destinationTask.splice(destination.index, 0, removed);

            list[sourceColIndex].task = sourceTask;
            list[destinationColIndex].task = destinationTask;

            setList(list);
        }
    }
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className={contextTheme ? 'kanbanLight' : 'kanbanDark'}>
                {data.map((section) => (
                    <Droppable key={section.id} droppableId={section.id}>
                        {(provided) => (
                            <div
                                {...provided.droppableProps}
                                className="kanban_section"
                                ref={provided.innerRef}
                            >
                                <div className="kanban_title">{section.title}</div>
                                <div className="kanban_content">
                                    {section.task.map((task, index) => (
                                        <Draggable
                                            key={task.id}
                                            draggableId={task.id}
                                            index={index}
                                        >
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={{
                                                        ...provided.draggableProps.style,
                                                        opacity: snapshot.isDragging ? "0.5" : "1",
                                                    }}
                                                >
                                                    <Card>
                                                        <h3>{task.description}</h3>
                                                        <span onClick={() => handleDelete(task.id, section.title)}>❌</span>
                                                    </Card>
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            </div>
                        )}
                    </Droppable>
                ))}
            </div>
        </DragDropContext>
    )
}
