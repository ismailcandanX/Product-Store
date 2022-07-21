import { useParams } from 'react-router'
import { useAppSelector } from '../redux/hooks'

function ProductsDetail() {
    const { id } = useParams()
    const allProducts = useAppSelector((state: any) => state.products.products)
    const filteredProduct = allProducts.filter((product: any) => product.id === id)
    return (
        <div>
            {
                <section className="text-gray-700 body-font overflow-hidden bg-white">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src="https://www.whitmorerarebooks.com/pictures/medium/2465.jpg" />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{filteredProduct[0].name}</h1>

                                <h1 className="text-gray-900 text-2xl title-font font-medium mb-1 mt-12">Description</h1>

                                <p className="leading-relaxed">{filteredProduct[0].description}</p>
                                <div className="flex mt-6">
                                    <span className="title-font font-medium text-2xl text-gray-900">${String(filteredProduct[0].price).replace(/(.)(?=(\d{3})+$)/g, '$1,')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }
        </div>
    )
}

export default ProductsDetail