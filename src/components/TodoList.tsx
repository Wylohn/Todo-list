import React from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import Card from '../kits/Card';
import "../styles/TodoList.css";

interface Todo {
  id: number;
  title: string;
  status: 'À faire' | 'En cours' | 'Terminée' | 'Non programmée';
  label: 'Occasionnel' | 'Quotidien' | 'Court terme' | 'Long terme';
}

interface TodoListProps {
  todos: Todo[];
  onDragEnd: (result: DropResult) => void;
  onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDragEnd, onDelete }) => {
  const columns = {
    'À faire': { id: 'todo', todos: todos.filter(todo => todo.status === 'À faire') },
    'En cours': { id: 'inProgress', todos: todos.filter(todo => todo.status === 'En cours') },
    'Terminée': { id: 'done', todos: todos.filter(todo => todo.status === 'Terminée') },
    'Non programmée': { id: 'unplanned', todos: todos.filter(todo => todo.status === 'Non programmée') },
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="todo-list">
        {Object.keys(columns).map(columnKey => (
          <div key={columnKey} className="todo-column">
            <h2>{columnKey}</h2>
            <Droppable droppableId={columns[columnKey].id} direction="vertical">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {columns[columnKey].todos.map((todo, index) => (
                    <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
                      {(provided) => (
                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="draggable-item">
                          <Card key={todo.id} todo={todo} onDelete={onDelete} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </div>
    </DragDropContext>
  );
};

export default TodoList;
