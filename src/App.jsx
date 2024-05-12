import Login from "./Login";
import Register from "./Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/rigister" element={<Register />} />
        <Route path="/link" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
