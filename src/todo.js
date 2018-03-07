export function todoStore(text = '') {
  return {
    text: text,
    completed: false,
  };
}

export const TodoView = ({ state }) => (
  <li>
    <label>
      <input
        type="checkbox"
        checked={state.completed}
        onChange={e => state.completed = e.target.checked }
      />
      { state.text }
    </label>
  </li>
);
