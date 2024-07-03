import './App.css';
import { Articles } from './components/Articles';
import { Comments } from './components/Comments';

function App() {
  return (
    <div className='grid grid-cols-4 gap-10'>
      <Comments />
      <Articles />
    </div>
  );
}

export default App;
