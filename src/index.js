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

function renderer(View, node) {
  return function(state) {
    render(<View state={state} />, node);
  };
}

const renderView = renderer(App, document.getElementById('root'))

const state = observable({
  target: initialState,
  listener: renderView,
});

renderView(state);
