import { MdDelete } from 'react-icons/md'
import { useNavigate } from 'react-router'
import { useAppDispatch } from '../redux/hooks'
import { deleteProductAsync } from '../redux/product/productsSlice'

function DeleteProduct(props: any) {
    const { id } = props
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const handleDelete = () => {
        dispatch(deleteProductAsync(id))
        navigate('/')
    }
    return (
        <div className='cursor-pointer' onClick={handleDelete}>
            <MdDelete size={35} className="" />
        </div>
    )
}

export default DeleteProduct