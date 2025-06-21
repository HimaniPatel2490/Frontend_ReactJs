import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Furniture/Pages/Home";
import About from "./Furniture/Pages/About";
import Shop from "./Furniture/Pages/Shop";
import Service from "./Furniture/Pages/Service";
import Blog from "./Furniture/Pages/Blog";
import Contact from "./Furniture/Pages/Contact.Jsx";

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
     </BrowserRouter>
  );
}

export default App;
