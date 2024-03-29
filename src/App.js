import Navbar from './Navbar';
import Home from './Home';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <Counter />
      </div>
    </div>
  );
}

export default App;