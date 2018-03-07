import { TodoView, todoStore } from './todo';

export function todolistStore() {
  return {
    todos: [],
    addTodo() {
      this.todos.push(todoStore(this.entry));
      this.entry = '';
    },
    entry: ''
  };
}

export const TodolistView = ({ state }) => (
  <div>
    <input
      value={state.entry}
      onInput={e => state.entry = e.target.value}
    />
    <button onClick={() => state.addTodo()}>Add</button>
    <ul>
      { state.todos.map(todo => <TodoView state={todo} />) }
    </ul>
  </div>
);
