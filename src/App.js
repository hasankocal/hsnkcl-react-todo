import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { useTodoLayerValue } from './context/TodoContext';

function App() {
  const [{ todos }, dispatch] = useTodoLayerValue();
  return (
    <div className="App">
      <header>
        <h1>Hasan's Todo List</h1>
      </header>
      <Form />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
