import { render } from 'inferno';
import observable from './observable';
import { TodolistView, todolistStore } from './todolist';

const App = ({ state }) => (
  <div>
    <TodolistView state={state.todolist} />
  </div>
);

const initialState = {
  todolist: todolistStore()
};

const state = observable({
  target: initialState,
  listener: renderView,
});

function renderView(state) {
  render(
    <App state={state} />,
    document.getElementById('root')
  );
}

renderView(state);
