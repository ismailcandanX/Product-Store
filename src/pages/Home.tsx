import AddButton from '../components/AddButton'
import FilterMenu from '../components/FilterMenu'
import ProductList from '../components/ProductList'

function Home() {
    return (
        <>
            <FilterMenu />
            <ProductList />
            <AddButton />
        </>
    )
}

export default Home