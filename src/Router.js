import { Route, Routes } from 'react-router'
import AddNewProduct from './pages/AddNewProduct'
import Home from './pages/Home'
import Product from './pages/Product'

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="productdetails/:id" element={<Product />} />
            <Route path="/addProduct" element={<AddNewProduct />} />
        </Routes>
    )
}

export default Router