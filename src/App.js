import './App.css';
import Center from './components/Center';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="home">
         <Sidebar/>
         <Center/>
      </div>
    </div>
  );
}

export default App;
