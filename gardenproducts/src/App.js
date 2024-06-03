import "./App.css"
import { RouterProvider } from "react-router-dom";
import { router } from "./components/Router";
// import Header from './components/Header/index.js'
// import Header from './components/Header';

function App() {
  return (
<RouterProvider router={router}/> 
  );
}

export default App;