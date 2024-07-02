import { useState } from 'react';
import TodoItem from './todoItem';
import './todoList.css';
import plus from '../assets/Layer 2.svg';
import { ListHeader } from './listHeader';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  const checkedTasksCounter = todos.reduce((prevValue, currentTask) => {
    if (currentTask.completed) {
      return prevValue + 1
    }

    return prevValue
  }, 0)
  const addTodo = () => {
    if (newTodo.trim() === '') return;

    const newTask = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    };

    setTodos([...todos, newTask]);
    setNewTodo('');
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className='wrapper'>
      <div className="newtask">
      <input
        type="text"
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
        placeholder="Adicione uma nova tarefa"
      />
      <button onClick={addTodo}>Criar <img src={plus} alt="icon" /></button>
      </div>

      <div className="tasksList">
        <ListHeader
        tasksCounter={todos.length}
        checkedTasks={checkedTasksCounter}
        />
      </div>

      <div>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
