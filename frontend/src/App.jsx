import { useEffect, useState } from 'react';

function App() {
  const [mensagem, setMensagem] = useState('Carregando...');

  useEffect(() => {
    fetch('http://localhost:3000/api')
      .then((res) => res.json())
      .then((data) => {
        setMensagem(data.mensagem);
      });
  }, []);

  return (
    <div style={{ padding: '40px' }}>
      <h1>React + Node.js</h1>
      <p>{mensagem}</p>
    </div>
  );
}

export default App;