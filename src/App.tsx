import { useState } from 'react';
import { Check, Trash2, Plus } from 'lucide-react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() === '') return;

    const newTodo: Todo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  const activeTodos = todos.filter(todo => !todo.completed).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-black to-gray-900 px-8 py-6">
            <h1 className="text-3xl font-bold text-white">My Tasks</h1>
            <p className="text-gray-300 mt-1">
              {activeTodos} {activeTodos === 1 ? 'task' : 'tasks'} remaining
            </p>
          </div>

          <div className="p-8">
            <div className="flex gap-3 mb-6">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="What needs to be done?"
                className="flex-1 px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <button
                onClick={addTodo}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                <Plus size={20} />
                Add
              </button>
            </div>

            <div className="space-y-2">
              {todos.length === 0 ? (
                <div className="text-center py-12 text-slate-400">
                  <p className="text-lg">No tasks yet. Add one to get started!</p>
                </div>
              ) : (
                todos.map((todo) => (
                  <div
                    key={todo.id}
                    className="group flex items-center gap-3 p-4 bg-slate-50 hover:bg-slate-100 rounded-lg transition-all"
                  >
                    <button
                      onClick={() => toggleTodo(todo.id)}
                      className={`flex-shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all ${
                        todo.completed
                          ? 'bg-blue-500 border-blue-500'
                          : 'border-slate-300 hover:border-blue-400'
                      }`}
                    >
                      {todo.completed && <Check size={16} className="text-white" />}
                    </button>

                    <span
                      className={`flex-1 transition-all ${
                        todo.completed
                          ? 'text-slate-400 line-through'
                          : 'text-slate-700'
                      }`}
                    >
                      {todo.text}
                    </span>

                    <button
                      onClick={() => deleteTodo(todo.id)}
                      className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-600 transition-all p-2 hover:bg-red-50 rounded-md"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {todos.length > 0 && (
              <div className="mt-6 pt-6 border-t border-slate-200 flex justify-between items-center text-sm text-slate-500">
                <span>{todos.length} {todos.length === 1 ? 'item' : 'items'} total</span>
                <span>{todos.filter(t => t.completed).length} completed</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
