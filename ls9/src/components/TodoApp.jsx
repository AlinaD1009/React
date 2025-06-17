import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  useId,
  useReducer
} from 'react';

const categories = ['Робота', 'Особисте', 'Навчання'];

function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'DELETE':
      return state.filter(todo => todo.id !== action.payload);
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    case 'SET':
      return action.payload;
    default:
      return state;
  }
}

export default function TodoApp() {

  const [todos, dispatch] = useReducer(todoReducer, []);

  const [text, setText] = useState('');
  const [category, setCategory] = useState(categories[0]);

  const inputRef = useRef(null);

  const baseId = useId();

  useEffect(() => {
    const stored = localStorage.getItem('todos');
    if (stored) {
      dispatch({ type: 'SET', payload: JSON.parse(stored) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleAdd = useCallback(() => {
    if (!text.trim()) return;
    const newTodo = {
      id: baseId + Math.random().toString(36),
      text,
      category,
      done: false
    };
    dispatch({ type: 'ADD', payload: newTodo });
    setText('');
  }, [text, category, baseId]);

  const handleDelete = useCallback(id => {
    dispatch({ type: 'DELETE', payload: id });
  }, []);

  const handleToggle = useCallback(id => {
    dispatch({ type: 'TOGGLE', payload: id });
  }, []);

  const completedCount = useMemo(() => {
    return todos.filter(todo => todo.done).length;
  }, [todos]);

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2>To-Do List</h2>
      <input
        ref={inputRef}
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Нове завдання"
      />
      <select value={category} onChange={e => setCategory(e.target.value)}>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <button onClick={handleAdd}>Додати</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => handleToggle(todo.id)}
            />
            <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            {' '}
            <em>({todo.category})</em>
            <button onClick={() => handleDelete(todo.id)}>Видалити</button>
          </li>
        ))}
      </ul>

      <p>Виконано завдань: {completedCount}</p>
    </div>
  );
}
