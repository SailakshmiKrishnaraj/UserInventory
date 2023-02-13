import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import InventoryTable from './Main Content/InventoryTable';
import Footer from './TableFooter/Footer';
function App() {
  return (
    <div className="App">
      <Header />
       < InventoryTable /> 
      <Footer />
    </div>
  );
}

export default App;
