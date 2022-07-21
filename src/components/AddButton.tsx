import React from 'react'
import { BsPlusCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';


function AddButton() {
    return (
        <div className="fixed bottom-12  right-12">
            <Link to="addProduct">
                <BsPlusCircle size={70} />
            </Link>
        </div>
    )
}

export default AddButton