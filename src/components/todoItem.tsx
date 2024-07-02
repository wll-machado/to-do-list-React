import './todoItem.css';
import del from '../assets/delete.svg';

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

function todoItem({ id, text, completed, onToggle, onDelete }:TodoItemProps) {
  return (
    <>
    <div className='todoItens'>
      <input className='checkbox'
        type="checkbox"
        checked={completed}
        onChange={() => onToggle(id)}
      />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {text}
      </span>
      <button onClick={() => onDelete(id)}> <img src={del} alt="delete button" /></button>
    </div>
    </>
  );
};

export default todoItem;
