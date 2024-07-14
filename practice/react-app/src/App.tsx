import { useEffect, useState } from 'react';
import { DefaultApi } from '../api-client/apis/DefaultApi';
import './App.css';
import { Character } from '../api-client/models';

function App() {
  const [data, setData] = useState<Character[]>([]);
  const api = new DefaultApi();

  useEffect(() => {
    api
      .getCharacters()
      .then((res) => setData(res.results!))
      .catch((err) => console.error(err));
  });

  return (
    <div
      style={{
        display: 'grid',
        gap: '20px',
        width: '100%',
        maxWidth: '100%',
        gridTemplateColumns: 'repeat(4, 1fr)',
      }}
    >
      {data.map((item) => (
        <div key={item.id}>
          <figure style={{ margin: 0 }}>
            <img src={item.image} alt={item.name} />
          </figure>
          {item.name}
        </div>
      ))}
    </div>
  );
}

export default App;
