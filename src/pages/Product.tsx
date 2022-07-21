import React from 'react'
import { useParams } from 'react-router'
import ProductsDetail from '../components/ProductsDetail'

function Product() {
    const { id } = useParams()
    console.log(id)
    return (
        <>
            <ProductsDetail />
        </>
    )
}

export default Product