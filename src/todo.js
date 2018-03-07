export function todoStore(text = '') {
  return {
    text: text,
    completed: false,
    toggle() {
      this.completed = !this.completed;
    }
  };
}

export const TodoView = ({ state }) => (
  <li>
    <label>
      <input
        type="checkbox"
        checked={state.completed}
        onChange={() => state.toggle() }
      />
      { state.text }
    </label>
  </li>
);
