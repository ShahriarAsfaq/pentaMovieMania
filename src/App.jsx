import { AallRoutes } from "./routes/allroutes";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Header />
        <AallRoutes />
      <Footer />
    </div>
  );
}

export default App;