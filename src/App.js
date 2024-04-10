// import logo from './logo.svg';
import './App.css';
import { data } from './mocks/dataDummy'
import SearchBar from './components/SearchBar';
import BusinessList from './components/BusinessList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ravenous</h1>
        <SearchBar/>
      </header>
      <main>
        <BusinessList data={data}/>
      </main>
    </div>
  );
}

export default App;
