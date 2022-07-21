import { nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { filterCategory, getProductsAsync } from "../redux/product/productsSlice";

function ProductList() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getProductsAsync())
    }, [dispatch]);

    const getProducts = useAppSelector(filterCategory)
    const search = useAppSelector(state => state.products.search)

    const products = getProducts.filter((product: any) => product.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <div>
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Products</h2>
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {
                        products && products.map((product: any) => (
                            <Link to={`productdetails/${product.id}`} key={nanoid()}>
                                <div className="group relative" key={nanoid()}>
                                    <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                        <img src={product.avatar} alt={product.name} className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div>
                                            <h3 className="text-sm text-gray-700">
                                                <span>
                                                    <span aria-hidden="true" className="absolute inset-0"></span>
                                                    {product.name}
                                                </span>
                                            </h3>
                                            <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                                        </div>
                                        <p className="text-sm font-medium text-gray-900">${String(product.price).replace(/(.)(?=(\d{3})+$)/g, '$1,')}</p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductList