import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import BasketList from './components/BasketList/BasketList';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header />
        <BasketList />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App;
