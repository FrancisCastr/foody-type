import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { pageRoutes } from './routes';
import Home from './pages/Home/Home';
import SingleProduct from './pages/Product/SingleProduct';
import Login from './components/Auth/Login';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={pageRoutes.main} element={<Home />} />
          <Route path={pageRoutes.allProduct} element={<Home />} />
          <Route path={pageRoutes.singleProduct} element={<SingleProduct />} />
          <Route path={pageRoutes.login} element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
