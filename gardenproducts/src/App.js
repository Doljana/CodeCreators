import "./App.css"
import { RouterProvider } from "react-router-dom";
import { router } from "./components/Router";
import Header from './components/Header/index'


function App() {
  return (
<RouterProvider router={router}/> 
  );
}

export default App;
