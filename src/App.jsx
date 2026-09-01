import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Schemes from "./pages/Schemes";
import Grievance from "./pages/Grievance";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/schemes" element={<Schemes />} />
        <Route path="/grievance" element={<Grievance />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;