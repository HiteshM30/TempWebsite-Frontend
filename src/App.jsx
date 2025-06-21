import { useEffect } from 'react';
import './App.css';
import Main from './components/Main';

function App() {
  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL;
    fetch(`${API_URL}/api/chat`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: 'Hello from frontend' }), // Example message
    })
      .then(res => res.json())
      .then(data => console.log('Backend response:', data))
      .catch(err => console.error('Backend request failed:', err));
  }, []);

  return (
    <div>
      <h1>Eptura AI Assistant</h1>
      <Main />
    </div>
  );
}

export default App;