interface Todo {
  id: number;
  title: string;
  status: 'À faire' | 'En cours' | 'Terminée' | 'Non programmée';
  label: 'Occasionnel' | 'Quotidien' | 'Court terme' | 'Long terme';
}

interface CardProps {
  todo: Todo;
  onDelete: (id: number) => void;
}

const Card: React.FC<CardProps> = ({ todo, onDelete }) => {
  return (
    <div className="card">
      <div className="card-content">
        <span className="card-title">{todo.title}</span>
        <p>Status: {todo.status}</p>
        <p>Label: {todo.label}</p>
      </div>
      <div className="card-action">
        <button onClick={() => onDelete(todo.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Card;
