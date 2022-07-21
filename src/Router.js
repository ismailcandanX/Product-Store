import { Route, Routes } from 'react-router'
import AddProduct from './components/AddProduct'
import Home from './pages/Home'
import Product from './pages/Product'

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="productdetails/:id" element={<Product />} />
            <Route path="addProduct" element={<AddProduct />} />
        </Routes>
    )
}

export default Router