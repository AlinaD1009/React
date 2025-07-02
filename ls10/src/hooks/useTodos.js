import { useReducer, useEffect, useMemo, useId } from 'react';

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

export default function useTodos() {
    const [todos, dispatch] = useReducer(todoReducer, []);
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

    const addTodo = (text, category) => {
        const newTodo = {
        id: baseId + Math.random().toString(36),
        text,
        category,
        done: false
        };
        dispatch({ type: 'ADD', payload: newTodo });
    };

    const deleteTodo = id => dispatch({ type: 'DELETE', payload: id });
    const toggleTodo = id => dispatch({ type: 'TOGGLE', payload: id });

    const completedCount = useMemo(
        () => todos.filter(todo => todo.done).length,
        [todos]
    );

    return { todos, addTodo, deleteTodo, toggleTodo, completedCount };
}
