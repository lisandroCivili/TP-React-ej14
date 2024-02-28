import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import "./App.css";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer"; 
import Inicio from "./components/pages/Inicio"
import DetalleReceta from "./components/pages/DetalleReceta"
import Administrador from "./components/pages/Administrador"
import Error404 from "./components/pages/Error404"
import FormularioRecetas from "./components/pages/recetas/FormularioRecetas"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return <BrowserRouter>
         <Menu/>
           <Routes>
           <Route path="/" element={<Inicio/>}/>
              <Route path="/detalleproducto" element={<DetalleReceta/>}/>
              <Route path="/administrador" element={<Administrador/>}/>
              <Route path="/administrador/crear" element={<FormularioRecetas/>}/>
              <Route path="*" element={<Error404/>}/>
           </Routes> 
         <Footer/>
         </BrowserRouter>
}
export default App;