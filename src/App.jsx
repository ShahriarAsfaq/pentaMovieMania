import { AallRoutes } from "./routes/AallRoutes";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import './App.css';

function App() {
  
  return (
    <div className="relative">
      <Header />
      <div className="overflow-y-auto py-14">
        <AallRoutes />
        </div>
      <Footer />
    </div>
  );
}

export default App;