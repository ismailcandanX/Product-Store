import { useAppDispatch } from "../redux/hooks";
import { setCategory, setSearch } from "../redux/product/productsSlice";


function FilterMenu() {
    const dispatch = useAppDispatch();
    const handleChange = (e: any) => {
        dispatch(setSearch(e.target.value));
    }

    return (
        <div className="drop-shadow-xl p-8 " >
            <div className="w-full rounded-lg  p-4 flex place-content-between ">
                <input onChange={handleChange} className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Search Product" />
                <div className="flex justify-center ">
                    <div className="inline-block relative w-64 xl:w-96">
                        <select defaultValue={'all'} onChange={(e: any) => dispatch(setCategory(e.target.value))} className="form-select appearance-none block w-full px-3 py-2 text-base font-normal  text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" >
                            <option value="all">Select Category</option>
                            <option value="Clothing">Clothing</option>
                            <option value="Electronic">Electronic</option>
                            <option value="Furnitures">Furnitures</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterMenu