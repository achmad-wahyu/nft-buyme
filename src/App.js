// import logo from './logo.svg';
// import './App.css';
import './styles/index.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Faq from './components/Faq';


function App() {
  return (
    <div className="App">
        <Header />
        <Home />
        <About />
        <Faq/>
    </div>
  );
}

export default App;
