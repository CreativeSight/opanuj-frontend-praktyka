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
  }, []);

  return data.map((item) => <div key={item.id}>{item.name}</div>);
}

export default App;
