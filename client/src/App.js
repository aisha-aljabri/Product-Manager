import './App.css';
import { Router } from '@reach/router';
import Main from './views/main.js'
import Detail from './views/Detail'
import Update from './views/Update'
import Productform from './components/productForm'
function App() {

  return (
    <div className="App">
      
      <Router>
          <Main path="/" />
          <Productform path="/products/new" />
          <Detail path="/api/products/:id" />
          <Update path="/api/products/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
