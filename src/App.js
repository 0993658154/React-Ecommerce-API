

import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Slider from './components/Slider';
import { Routes , Route, createHashRouter } from 'react-router-dom';
import About from './components/About';
import ProductDeatails from './components/ProductDetails';



function App() {
  const routes=createHashRouter([{

  }])
  return (
    <div className="App">
      
      <Navbar/>
      <Routes>
        <Route path='/' element={
        <>
           <Slider/>
            <ProductList/>
          </>
        }
      />
      <Route path="about" element={<About/>}/>
      <Route path="product/:productId" element={<ProductDeatails/>}/>
      </Routes>
     
     
    </div>
  );
}


export default App;
