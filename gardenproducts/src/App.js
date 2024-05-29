import "./App.css"
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="NotFound" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
