import Footer from 'components/Footer';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div >
      <Toaster/>
     <Header/>
     <Home/>
     <Footer/>
    </div>
  );
}

export default App;
