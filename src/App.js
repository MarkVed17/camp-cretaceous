import "./App.css";
import { Router } from "./frontend/routes/Routes";
import { Navbar, Footer } from "./frontend/components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
