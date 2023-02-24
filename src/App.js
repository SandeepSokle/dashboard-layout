import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/home" element={<Layout />}></Route>
          <Route exact path="/" element={<Layout />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
