import Card from '../kits/Card';

interface Todo {
  id: number;
  title: string;
  status: 'À faire' | 'En cours' | 'Terminée' | 'Non programmée';
  label: 'Occasionnel' | 'Quotidien' | 'Court terme' | 'Long terme';
}

interface TodoListProps {
  todos: Todo[];
  onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete }) => {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <Card key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TodoList;
