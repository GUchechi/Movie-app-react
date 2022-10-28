import './App.css';
import Hero from './components/Hero/Hero';
import { MovieState } from './Context/MovieContext';

const App = () => {
  return (
    <MovieState>
      <Hero />
    </MovieState>
  );
}

export default App;
